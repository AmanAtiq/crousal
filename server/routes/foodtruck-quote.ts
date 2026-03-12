import { RequestHandler } from "express";
import { sendContactQuoteEmail } from "../services/contact-quote-email";

// Accepts Food Truck form fields: name, phone, eventType, guests, date, time, details
export const handleFoodTruckQuote: RequestHandler = async (req, res) => {
  const { name, phone, eventType, guests, date, time, details } = req.body;

  if (!name || !phone || !eventType || !guests || !date || !time) {
    return res.status(400).json({ message: "Missing required field" });
  }

  // Compose email payload for Food Truck
  const quoteRequest = {
    brand: "foodtruck",
    fullName: name,
    whatsapp: phone,
    eventType,
    guestCount: guests,
    eventDate: date,
    eventTime: time,
    email: "foodtruck@dlm.ao", // or use a field if available
    message: details || "",
    requestId: `FT-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
  };

  try {
    const emailResult = await sendContactQuoteEmail(quoteRequest);
    if (!emailResult.delivered) {
      return res.status(503).json({ message: emailResult.message });
    }
    return res.json({ message: "Pedido enviado com sucesso!", requestId: quoteRequest.requestId });
  } catch (err) {
    return res.status(500).json({ message: "Erro ao enviar pedido." });
  }
};
