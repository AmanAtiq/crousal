import SibApiV3Sdk from "sib-api-v3-sdk";
import type { ContactQuoteRequest } from "@shared/api";

type QuoteEmailPayload = ContactQuoteRequest & {
  requestId: string;
  createdAt: string;
};

type QuoteEmailResult = {
  delivered: boolean;
  message: string;
};

const DEFAULT_BRAND_RECIPIENTS: Record<string, string[]> = {
  "delicias da madalena": ["delicias@dlm.ao"],
  "food truck": ["foodtruck@dlm.ao"],
  "atelie de doces": ["atelie@dlm.ao"],
};

function parseEmails(value?: string) {
  return (value ?? "")
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function getBrandRecipients(brand: string) {
  const normalizedBrand = brand.trim().toLowerCase();
  const brandOverrideKey =
    normalizedBrand === "delicias da madalena"
      ? "CONTACT_QUOTE_DELICIAS_EMAILS"
      : normalizedBrand === "food truck"
        ? "CONTACT_QUOTE_FOODTRUCK_EMAILS"
        : normalizedBrand === "atelie de doces"
          ? "CONTACT_QUOTE_ATELIE_EMAILS"
          : undefined;

  const brandOverrides = brandOverrideKey
    ? parseEmails(process.env[brandOverrideKey])
    : [];

  return brandOverrides.length > 0
    ? brandOverrides
    : DEFAULT_BRAND_RECIPIENTS[normalizedBrand] ?? [];
}

function getRecipients(brand: string) {
  return Array.from(
    new Set([
      ...parseEmails(process.env.CONTACT_QUOTE_TEAM_EMAILS),
      ...getBrandRecipients(brand),
    ])
  );
}

function getBrevoConfig() {
  const apiKey = process.env.SMTP_PASS; // Use SMTP_PASS as Brevo API key
  const from = process.env.SMTP_FROM;
  if (!apiKey || !from) return null;
  return { apiKey, from };
}

function formatQuoteText(payload: QuoteEmailPayload) {
  const lines = [
    `Pedido: ${payload.requestId}`,
    `Recebido em: ${payload.createdAt}`,
    "",
    `Marca: ${payload.brand}`,
    `Tipo de evento: ${payload.eventType}`,
    `Convidados: ${payload.guestCount}`,
    `Data: ${payload.eventDate}`,
    `Horario: ${payload.eventTime}`,
    "",
    `Nome: ${payload.fullName}`,
    `Email: ${payload.email}`,
    `WhatsApp: ${payload.whatsapp}`,
  ];

  if (payload.message.trim()) {
    lines.push("", "Mensagem adicional:", payload.message.trim());
  }

  return lines.join("\n");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatQuoteHtml(payload: QuoteEmailPayload) {
  const requestId = escapeHtml(payload.requestId);
  const brand = escapeHtml(payload.brand);
  const eventType = escapeHtml(payload.eventType);
  const eventDate = escapeHtml(payload.eventDate);
  const eventTime = escapeHtml(payload.eventTime);
  const fullName = escapeHtml(payload.fullName);
  const email = escapeHtml(payload.email);
  const whatsapp = escapeHtml(payload.whatsapp);
  const messageBlock = payload.message.trim()
    ? `<tr><td style="padding:8px 0;font-weight:600;color:#4D3522;">Mensagem adicional</td><td style="padding:8px 0;color:#4D3522;">${escapeHtml(payload.message.trim())}</td></tr>`
    : "";

  return `
    <div style="font-family:Arial,sans-serif;background:#faf5ed;padding:24px;color:#2c1c0f;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:20px;padding:28px;border:1px solid #f0e3cf;">
        <p style="margin:0 0 8px;font-size:12px;letter-spacing:1.8px;text-transform:uppercase;color:#c8a050;">Smart Quote</p>
        <h1 style="margin:0 0 20px;font-size:28px;line-height:1.2;">Novo pedido ${requestId}</h1>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;font-weight:600;color:#4D3522;">Marca</td><td style="padding:8px 0;color:#4D3522;">${brand}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600;color:#4D3522;">Tipo de evento</td><td style="padding:8px 0;color:#4D3522;">${eventType}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600;color:#4D3522;">Convidados</td><td style="padding:8px 0;color:#4D3522;">${payload.guestCount}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600;color:#4D3522;">Data</td><td style="padding:8px 0;color:#4D3522;">${eventDate}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600;color:#4D3522;">Horario</td><td style="padding:8px 0;color:#4D3522;">${eventTime}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600;color:#4D3522;">Nome</td><td style="padding:8px 0;color:#4D3522;">${fullName}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600;color:#4D3522;">Email</td><td style="padding:8px 0;color:#4D3522;">${email}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600;color:#4D3522;">WhatsApp</td><td style="padding:8px 0;color:#4D3522;">${whatsapp}</td></tr>
          ${messageBlock}
        </table>
      </div>
    </div>
  `;
}


export async function sendContactQuoteEmail(
  payload: QuoteEmailPayload
): Promise<QuoteEmailResult> {
  const brevoConfig = getBrevoConfig();
  if (!brevoConfig) {
    return {
      delivered: false,
      message:
        "Brevo API is not configured. Set SMTP_PASS (Brevo API key) and SMTP_FROM to enable quote emails.",
    };
  }

  const recipients = getRecipients(payload.brand);
  if (recipients.length === 0) {
    return {
      delivered: false,
      message:
        "No quote recipients configured. Set CONTACT_QUOTE_TEAM_EMAILS or a brand-specific CONTACT_QUOTE_*_EMAILS value.",
    };
  }

  SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey = brevoConfig.apiKey;
  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
  sendSmtpEmail.sender = {
    name: brevoConfig.from.replace(/<.*?>/, '').trim(),
    email: brevoConfig.from.match(/<(.+?)>/)?.[1] || brevoConfig.from,
  };
  sendSmtpEmail.to = recipients.map((email) => ({ email }));
  sendSmtpEmail.replyTo = { email: payload.email };
  sendSmtpEmail.subject = `[Smart Quote] ${payload.requestId} • ${payload.brand} • ${payload.eventType}`;
  sendSmtpEmail.textContent = formatQuoteText(payload);
  sendSmtpEmail.htmlContent = formatQuoteHtml(payload);

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
    return {
      delivered: true,
      message: `Pedido recebido e enviado para ${recipients.join(", ")}`,
    };
  } catch (error: any) {
    return {
      delivered: false,
      message: `Erro ao enviar email: ${error?.message || String(error)}`,
    };
  }
}