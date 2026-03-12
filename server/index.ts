import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleContactQuote } from "./routes/contact-quote";
import { handleGetContent, handleGetAllContent } from "./routes/content";
import {
  handleAdminLogin,
  handleBulkUpdateContent,
  handleUploadImage,
  upload,
} from "./routes/admin";
import { requireAuth } from "./middleware/auth";
// Add this:
import { handleAtelieQuote } from "./routes/atelie-quote";
import { handleFoodTruckQuote } from "./routes/foodtruck-quote";
export function createServer() {
  const app = express();

  // ── Middleware ──────────────────────────────────────────────────────────────
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // ── Public routes ───────────────────────────────────────────────────────────
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  app.post("/api/contact-quote", handleContactQuote);
  // Atelie form endpoint
  app.post("/api/atelie-quote", handleAtelieQuote);
  // Food Truck form endpoint

  app.post("/api/foodtruck-quote", handleFoodTruckQuote);

  // Content (public read)
  app.get("/api/content", handleGetAllContent);
  app.get("/api/content/:page", handleGetContent);

  // ── Admin routes (password-protected) ──────────────────────────────────────
  app.post("/api/admin/login", handleAdminLogin);
  app.put("/api/admin/content", requireAuth, handleBulkUpdateContent);
  app.post(
    "/api/admin/upload",
    requireAuth,
    upload.single("image"),
    handleUploadImage
  );

  return app;
}
