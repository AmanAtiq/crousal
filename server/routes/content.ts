import { RequestHandler } from "express";
import { getAllContent, getPageContent } from "../db";

/** GET /api/content/:page  ─ public */
export const handleGetContent: RequestHandler = async (req, res) => {
  try {
    const pageParam = req.params.page;
    const page = Array.isArray(pageParam) ? pageParam[0] : pageParam;

    if (!page) {
      res.status(400).json({ error: "Missing page parameter" });
      return;
    }

    const content = await getPageContent(page);
    res.json(content);
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Failed to load page content",
    });
  }
};

/** GET /api/content  ─ public, returns all pages */
export const handleGetAllContent: RequestHandler = async (_req, res) => {
  try {
    const result = await getAllContent();
    res.json(result);
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Failed to load CMS content",
    });
  }
};
