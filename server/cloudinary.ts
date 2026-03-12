import { v2 as cloudinary } from "cloudinary";

let configured = false;

function ensureCloudinaryConfigured() {
  if (configured) {
    return;
  }

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error(
      "CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET must be set for image uploads"
    );
  }

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  });

  configured = true;
}

export async function uploadImageToCloudinary(file: Express.Multer.File) {
  ensureCloudinaryConfigured();

  return new Promise<string>((resolve, reject) => {
    const upload = cloudinary.uploader.upload_stream(
      {
        folder: "dlm-cms",
        resource_type: "image",
      },
      (error, result) => {
        if (error || !result?.secure_url) {
          reject(error ?? new Error("Cloudinary upload did not return a secure URL"));
          return;
        }

        resolve(result.secure_url);
      }
    );

    upload.end(file.buffer);
  });
}

export function isManagedCloudinaryUrl(url: string) {
  try {
    const parsed = new URL(url);
    return (
      parsed.hostname === "res.cloudinary.com" &&
      parsed.pathname.includes("/image/upload/") &&
      parsed.pathname.includes("/dlm-cms/")
    );
  } catch {
    return false;
  }
}

function getPublicIdFromUrl(url: string) {
  if (!isManagedCloudinaryUrl(url)) {
    return null;
  }

  try {
    const parsed = new URL(url);
    const marker = "/image/upload/";
    const markerIndex = parsed.pathname.indexOf(marker);
    if (markerIndex === -1) {
      return null;
    }

    let publicPath = parsed.pathname.slice(markerIndex + marker.length);
    if (publicPath.startsWith("v")) {
      const slashIndex = publicPath.indexOf("/");
      if (slashIndex > 0) {
        publicPath = publicPath.slice(slashIndex + 1);
      }
    }

    const lastDot = publicPath.lastIndexOf(".");
    if (lastDot > 0) {
      publicPath = publicPath.slice(0, lastDot);
    }

    return publicPath || null;
  } catch {
    return null;
  }
}

export async function deleteImageFromCloudinaryUrl(url: string) {
  const publicId = getPublicIdFromUrl(url);
  if (!publicId) {
    return;
  }

  ensureCloudinaryConfigured();

  await cloudinary.uploader.destroy(publicId, {
    resource_type: "image",
    invalidate: true,
  });
}