import { ADMIN_API_KEY } from "./adminKey";

/**
 * Retrieves all page content sections from the backend.
 * @returns A promise that resolves to a record of section keys to their content.
 */
export async function getAllContent(): Promise<Record<string, unknown>> {
  try {
    const res = await fetch("/api/content", {
      cache: "no-store",
      headers: {
        "Pragma": "no-cache",
        "Cache-Control": "no-cache",
      },
    });
    if (!res.ok) {
      return {};
    }
    return await res.json();
  } catch (err) {
    console.warn("Could not fetch content from backend API, using bundled defaults.");
    return {};
  }
}

/**
 * Updates a single page content section. Requires admin authentication.
 * @param section The key of the content section to update.
 * @param content The new JSON content for the section.
 * @returns A promise that resolves when the update is complete.
 */
export async function updateContent(section: string, content: unknown): Promise<void> {
  const adminKey = localStorage.getItem("admin_key") || ADMIN_API_KEY;
  if (!adminKey) throw new Error("Not authenticated. Please log in again.");

  const url = `/api/content/${section}`;
  const headers = {
    "Content-Type": "application/json",
    "x-admin-key": adminKey,
  };
  const body = JSON.stringify(content);

  let res = await fetch(url, {
    method: "PUT",
    headers,
    body,
  });

  // Fallback to POST if the hosting environment or proxy disallows PUT (HTTP 405)
  if (res.status === 405) {
    res = await fetch(url, {
      method: "POST",
      headers,
      body,
    });
  }

  if (!res.ok) {
    const resBody = await res.json().catch(() => ({}));
    if (res.status === 405) {
      throw new Error(
        resBody.error?.message ??
          "HTTP 405 Method Not Allowed: The backend API endpoint is not receiving this request. Please ensure the backend server is running and reverse-proxy for /api is configured."
      );
    }
    throw new Error(resBody.error?.message ?? `HTTP ${res.status} updating content`);
  }
}

/**
 * Uploads an image file to the server storage.
 * @param file The image file to upload.
 * @returns The public URL path to the uploaded image.
 */
export async function uploadImage(file: File): Promise<string> {
  const form = new FormData();
  form.append("bucket", "content-images");
  form.append("file", file);
  form.append("path", `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`);
  const res = await fetch("/api/upload", {
    method: "POST",
    headers: {
      "x-admin-key": ADMIN_API_KEY,
    },
    body: form,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error?.message || `Upload failed (${res.status})`);
  }
  return `/storage/${data.data.fullPath}`;
}