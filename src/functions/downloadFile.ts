import * as React from "react";

export default function downloadFile(
  event: React.MouseEvent,
  filepath: string
) {
  try {
    if (!event || !filepath.trim()) {
      throw new Error("Missing event or filepath");
    }
    event.preventDefault();
    const a = document.createElement("a");
    a.href = filepath;
    a.download = filepath.split("/").pop() || "";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch {
    // eslint-disable-next-line no-console
    console.error("Error downloading file");
  }
}
