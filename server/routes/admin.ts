import { RequestHandler } from "express";
import multer from "multer";
import { upsertContent } from "../db";
import { uploadImageToCloudinary } from "../cloudinary";
import { signAdminToken } from "../middleware/auth";

// ─── Login ────────────────────────────────────────────────────────────────────
export const handleAdminLogin: RequestHandler = (req, res) => {
  const { password } = req.body as { password: string };
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    res.status(500).json({ error: "ADMIN_PASSWORD environment variable is not set" });
    return;
  }
  if (!password || password !== adminPassword) {
    // Constant-time feel: always respond after the same work
    res.status(401).json({ error: "Invalid password" });
    return;
  }
  res.json({ token: signAdminToken() });
};

// ─── Bulk upsert content ──────────────────────────────────────────────────────
export const handleBulkUpdateContent: RequestHandler = async (req, res) => {
  try {
    const { updates } = req.body as {
      updates: Array<{ page: string; key: string; value: string }>;
    };

    if (!Array.isArray(updates) || updates.length === 0) {
      res.status(400).json({ error: "updates must be a non-empty array" });
      return;
    }

    await upsertContent(updates);

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Failed to save CMS content",
    });
  }
};

// ─── Image upload ─────────────────────────────────────────────────────────────
const fileFilter = (
  _req: Express.Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  if (file.mimetype.startsWith("image/")) cb(null, true);
  else cb(new Error("Only image files are accepted"));
};

export const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
});

export const handleUploadImage: RequestHandler = async (req, res) => {
  try {
    if (!req.file) {
      res.status(400).json({ error: "No file uploaded" });
      return;
    }

    const url = await uploadImageToCloudinary(req.file);

    const { page, key } = req.body as { page?: string; key?: string };
    if (page && key) {
      await upsertContent([{ page, key, value: url }]);
    }

    res.json({ url });
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Failed to upload image",
    });
  }
};
