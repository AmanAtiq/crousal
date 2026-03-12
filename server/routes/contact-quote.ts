import { RequestHandler } from "express";
import { ContactQuoteRequest, ContactQuoteResponse } from "@shared/api";
import { sendContactQuoteEmail } from "../services/contact-quote-email";

const quoteRequests: Array<ContactQuoteRequest & { requestId: string; createdAt: string }> = [];

export const handleContactQuote: RequestHandler = async (req, res) => {
  const payload = req.body as Partial<ContactQuoteRequest>;

  const requiredFields: Array<keyof ContactQuoteRequest> = [
    "brand",
    "eventType",
    "guestCount",
    "eventDate",
    "eventTime",
    "fullName",
    "email",
    "whatsapp",
  ];

  const missingField = requiredFields.find((field) => {
    const value = payload[field];
    if (typeof value === "number") return Number.isNaN(value);
    return !value || String(value).trim().length === 0;
  });

  if (missingField) {
    return res.status(400).json({ message: `Missing required field: ${missingField}` });
  }

  if (!String(payload.email).includes("@")) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  const requestId = `SQ-${Date.now().toString(36).toUpperCase()}`;

  const quoteRequest = {
    brand: String(payload.brand),
    eventType: String(payload.eventType),
    guestCount: Number(payload.guestCount),
    eventDate: String(payload.eventDate),
    eventTime: String(payload.eventTime),
    fullName: String(payload.fullName),
    email: String(payload.email),
    whatsapp: String(payload.whatsapp),
    message: payload.message ? String(payload.message) : "",
    requestId,
    createdAt: new Date().toISOString(),
  };

  try {
    const emailResult = await sendContactQuoteEmail(quoteRequest);
    if (!emailResult.delivered) {
      return res.status(503).json({ message: emailResult.message });
    }

    quoteRequests.push(quoteRequest);

    const response: ContactQuoteResponse = {
      message: "Pedido recebido e enviado para a nossa equipa",
      requestId,
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error("Failed to send contact quote email", error);
    return res.status(502).json({ message: "Falha ao encaminhar o pedido por email" });
  }
};