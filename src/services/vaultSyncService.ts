/**
 * Vault Sync Service - Local Directory & Obsidian Vault Integration
 *
 * Uses the Web File System Access API (showDirectoryPicker) to read and write
 * Markdown files (.md) directly to a local directory or Obsidian vault.
 *
 * Each WikiPage is formatted as an Obsidian-compatible Markdown file with YAML frontmatter.
 */

import { WikiPage } from "../config/wikiSchema";
import { wikiPageToMarkdown } from "./wikiMarkdownExport";

export interface VaultSyncStatus {
  isConnected: boolean;
  directoryName?: string;
  syncedFilesCount: number;
  error?: string;
}

let directoryHandle: FileSystemDirectoryHandle | null = null;

/**
 * Checks if the Web File System Access API is supported in the current browser.
 */
export function isFileSystemAccessSupported(): boolean {
  return typeof window !== "undefined" && "showDirectoryPicker" in window;
}

/**
 * Prompts the user to select a local folder/vault directory.
 */
export async function connectLocalVault(): Promise<VaultSyncStatus> {
  if (!isFileSystemAccessSupported()) {
    return {
      isConnected: false,
      syncedFilesCount: 0,
      error: "Web File System Access API is not supported in this browser.",
    };
  }

  try {
    directoryHandle = await (window as any).showDirectoryPicker({
      mode: "readwrite",
    });

    return {
      isConnected: true,
      directoryName: directoryHandle?.name,
      syncedFilesCount: 0,
    };
  } catch (err: any) {
    if (err.name === "AbortError") {
      return { isConnected: false, syncedFilesCount: 0 };
    }
    return {
      isConnected: false,
      syncedFilesCount: 0,
      error: err.message || "Failed to select directory.",
    };
  }
}

/**
 * Writes a WikiPage directly into the selected local vault directory as a .md file.
 *
 * @param page - The WikiPage to export.
 */
export async function syncPageToVault(page: WikiPage): Promise<boolean> {
  if (!directoryHandle) {
    return false;
  }

  try {
    const filename = `${page.title.replace(/[^a-z0-9\s\-_]/gi, "").trim() || "untitled"}.md`;
    const markdownContent = wikiPageToMarkdown(page);

    const fileHandle = await directoryHandle.getFileHandle(filename, { create: true });
    const writable = await (fileHandle as any).createWritable();
    await writable.write(markdownContent);
    await writable.close();

    return true;
  } catch (error) {
    console.error("Failed to sync page to vault:", error);
    return false;
  }
}

/**
 * Syncs an array of WikiPages to the local vault directory.
 *
 * @param pages - Array of WikiPages.
 */
export async function syncAllPagesToVault(pages: WikiPage[]): Promise<number> {
  if (!directoryHandle) {
    return 0;
  }

  let count = 0;
  for (const page of pages) {
    const success = await syncPageToVault(page);
    if (success) count++;
  }
  return count;
}
