/**
 * Lightweight Zero-Dependency ZIP Archive Builder for Browser
 * 
 * Supports Store (uncompressed) zip archive generation compatible with
 * Obsidian, Windows Explorer, macOS Finder, and standard unzip tools.
 */

function makeCrc32Table(): Uint32Array {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) {
        c = 0xedb88320 ^ (c >>> 1);
      } else {
        c = c >>> 1;
      }
    }
    table[n] = c >>> 0;
  }
  return table;
}

const crc32Table = makeCrc32Table();

function calculateCrc32(data: Uint8Array): number {
  let crc = 0xffffffff;
  for (let i = 0; i < data.length; i++) {
    crc = (crc >>> 8) ^ crc32Table[(crc ^ data[i]) & 0xff];
  }
  return (crc ^ 0xffffffff) >>> 0;
}

export interface ZipFileEntry {
  filename: string; // e.g. "index.md" or "wiki/concept-1.md"
  content: string | Uint8Array;
}

export function createZipArchive(files: ZipFileEntry[]): Blob {
  const encoder = new TextEncoder();
  const localHeaderParts: Uint8Array[] = [];
  const centralDirParts: Uint8Array[] = [];

  let offset = 0;

  for (const file of files) {
    const filenameBytes = encoder.encode(file.filename);
    const dataBytes =
      typeof file.content === "string"
        ? encoder.encode(file.content)
        : file.content;
    const crc = calculateCrc32(dataBytes);
    const size = dataBytes.length;

    // Local Header
    const localHeader = new Uint8Array(30 + filenameBytes.length);
    const view = new DataView(localHeader.buffer);

    view.setUint32(0, 0x04034b50, true); // Local header signature
    view.setUint16(4, 20, true); // Version needed
    view.setUint16(6, 0, true); // General purpose flag
    view.setUint16(8, 0, true); // Compression method (0 = Store)
    view.setUint16(10, 0, true); // Last mod time
    view.setUint16(12, 0, true); // Last mod date
    view.setUint32(14, crc, true); // CRC-32
    view.setUint32(18, size, true); // Compressed size
    view.setUint32(22, size, true); // Uncompressed size
    view.setUint16(26, filenameBytes.length, true); // Filename length
    view.setUint16(28, 0, true); // Extra field length
    localHeader.set(filenameBytes, 30);

    localHeaderParts.push(localHeader);
    localHeaderParts.push(dataBytes);

    // Central Directory Header
    const cdHeader = new Uint8Array(46 + filenameBytes.length);
    const cdView = new DataView(cdHeader.buffer);

    cdView.setUint32(0, 0x02014b50, true); // CD signature
    cdView.setUint16(4, 20, true); // Version made by
    cdView.setUint16(6, 20, true); // Version needed
    cdView.setUint16(8, 0, true); // Flag
    cdView.setUint16(10, 0, true); // Compression method
    cdView.setUint16(12, 0, true); // Time
    cdView.setUint16(14, 0, true); // Date
    cdView.setUint32(16, crc, true); // CRC-32
    cdView.setUint32(20, size, true);
    cdView.setUint32(24, size, true); // Uncompressed size
    cdView.setUint16(28, filenameBytes.length, true); // Filename length
    cdView.setUint16(30, 0, true); // Extra field length
    cdView.setUint16(32, 0, true); // File comment length
    cdView.setUint16(34, 0, true); // Disk number start
    cdView.setUint16(36, 0, true); // Internal attributes
    cdView.setUint32(38, 0, true); // External attributes
    cdView.setUint32(42, offset, true); // Relative offset of local header
    cdHeader.set(filenameBytes, 46);

    centralDirParts.push(cdHeader);

    offset += localHeader.length + dataBytes.length;
  }

  const cdOffset = offset;
  let cdSize = 0;
  for (const part of centralDirParts) {
    cdSize += part.length;
  }

  // End of Central Directory Record (EOCD)
  const eocd = new Uint8Array(22);
  const eocdView = new DataView(eocd.buffer);

  eocdView.setUint32(0, 0x06054b50, true); // EOCD signature
  eocdView.setUint16(4, 0, true); // Number of disk
  eocdView.setUint16(6, 0, true); // Disk where CD starts
  eocdView.setUint16(8, files.length, true); // Num of CD records on disk
  eocdView.setUint16(10, files.length, true); // Total num of CD records
  eocdView.setUint32(12, cdSize, true); // CD size
  eocdView.setUint32(16, cdOffset, true); // Offset of CD start
  eocdView.setUint16(20, 0, true); // Comment length

  const allParts = [...localHeaderParts, ...centralDirParts, eocd];
  return new Blob(allParts, { type: "application/zip" });
}
