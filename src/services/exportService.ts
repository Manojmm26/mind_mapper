import { EdgeData, MindMapData, NodeData } from './llmService';
import { PretextGraphLayout, PretextMapNode, PretextThemeFamily, PRETEXT_THEME_ACCENTS } from './pretextMapLayout';
import { PRETEXT_TYPOGRAPHY, PRETEXT_FONT_FAMILY, PRETEXT_DISPLAY_FONT_FAMILY } from './pretextTextService';

export type ExportFormat = 'json' | 'png' | 'svg';

export interface ExportOptions {
  format: ExportFormat;
  filename?: string;
  includeMetadata?: boolean;
  quality?: number;
  scale?: number;
}

export interface ExportResult {
  success: boolean;
  filename: string;
  blob?: Blob;
  dataUrl?: string;
  error?: string;
}

function sanitizeFilename(name: string): string {
  return name
    .replace(/[^a-z0-9\s\-_]/gi, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 80)
    .toLowerCase() || 'mind-map';
}

function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();

  setTimeout(() => {
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, 100);
}

export function exportToJson(
  data: MindMapData,
  filename?: string,
  includeMetadata: boolean = true
): ExportResult {
  try {
    const exportData = includeMetadata
      ? {
          ...data,
          exportedAt: new Date().toISOString(),
          version: '1.0.0',
          nodeCount: data.nodes.length,
          edgeCount: data.edges.length,
        }
      : data;

    const jsonStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const baseName = filename || sanitizeFilename(data.nodes[0]?.label || 'mind-map');

    triggerDownload(blob, `${baseName}.json`);

    return {
      success: true,
      filename: `${baseName}.json`,
      blob,
    };
  } catch (error) {
    return {
      success: false,
      filename: '',
      error: error instanceof Error ? error.message : 'Unknown error during JSON export',
    };
  }
}

export async function exportCanvasToPng(
  canvas: HTMLCanvasElement,
  filename?: string,
  options?: {
    scale?: number;
    backgroundColor?: string;
    quality?: number;
  }
): Promise<ExportResult> {
  try {
    const scale = options?.scale ?? 2;
    const quality = options?.quality ?? 0.95;
    const bgColor = options?.backgroundColor ?? '#0f172a';

    const originalWidth = canvas.width;
    const originalHeight = canvas.height;
    const dpr = window.devicePixelRatio || 1;

    const exportCanvas = document.createElement('canvas');
    exportCanvas.width = Math.floor((originalWidth / dpr) * scale);
    exportCanvas.height = Math.floor((originalHeight / dpr) * scale);

    const ctx = exportCanvas.getContext('2d');
    if (!ctx) {
      throw new Error('Failed to get export canvas context');
    }

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

    const scaleX = exportCanvas.width / originalWidth;
    const scaleY = exportCanvas.height / originalHeight;
    ctx.scale(scaleX * dpr, scaleY * dpr);
    ctx.drawImage(canvas, 0, 0);

    const blob = await new Promise<Blob | null>((resolve) => {
      exportCanvas.toBlob(resolve, 'image/png', quality);
    });

    if (!blob) {
      throw new Error('Failed to generate PNG blob');
    }

    const baseName = filename || 'mind-map';
    triggerDownload(blob, `${baseName}.png`);

    return {
      success: true,
      filename: `${baseName}.png`,
      blob,
    };
  } catch (error) {
    return {
      success: false,
      filename: '',
      error: error instanceof Error ? error.message : 'Unknown error during PNG export',
    };
  }
}

function hexToRgba(hex: string, alpha: number): string {
  const normalized = hex.replace('#', '');
  const bigint = parseInt(normalized.length === 3 ? normalized.split('').map((p) => p + p).join('') : normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function getNodePalette(node: PretextMapNode) {
  const accents = PRETEXT_THEME_ACCENTS[node.themeFamily] || PRETEXT_THEME_ACCENTS.slate;
  const accent = accents[Math.min(node.themeLevel, accents.length - 1)];

  if (node.depth === 0) {
    return {
      accent: '#38bdf8',
      surface: '#0f172a',
      header: '#111827',
      border: hexToRgba('#38bdf8', 0.88),
      title: '#f8fafc',
      body: 'rgba(226,232,240,0.94)',
      pillBackground: 'rgba(255,255,255,0.12)',
      pillText: '#bae6fd',
    };
  }

  return {
    accent,
    surface: 'rgba(255,255,255,0.95)',
    header: hexToRgba(accent, 0.12 + node.themeLevel * 0.03),
    border: hexToRgba(accent, 0.48),
    title: '#0f172a',
    body: '#475569',
    pillBackground: hexToRgba(accent, 0.11),
    pillText: accent,
  };
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapText(text: string, maxWidth: number, fontSize: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const estimatedWidth = testLine.length * fontSize * 0.6;

    if (estimatedWidth > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines.length > 0 ? lines : [text];
}

export function exportLayoutToSvg(
  layout: PretextGraphLayout,
  filename?: string,
  options?: {
    backgroundColor?: string;
    padding?: number;
    includeGrid?: boolean;
  }
): ExportResult {
  try {
    const bgColor = options?.backgroundColor ?? '#0f172a';
    const padding = options?.padding ?? 48;
    const includeGrid = options?.includeGrid ?? false;

    if (layout.nodes.length === 0) {
      throw new Error('Cannot export empty layout');
    }

    const bounds = layout.nodes.reduce(
      (acc, node) => ({
        minX: Math.min(acc.minX, node.x),
        minY: Math.min(acc.minY, node.y),
        maxX: Math.max(acc.maxX, node.x + node.width),
        maxY: Math.max(acc.maxY, node.y + node.height),
      }),
      {
        minX: Number.POSITIVE_INFINITY,
        minY: Number.POSITIVE_INFINITY,
        maxX: Number.NEGATIVE_INFINITY,
        maxY: Number.NEGATIVE_INFINITY,
      }
    );

    const width = bounds.maxX - bounds.minX + padding * 2;
    const height = bounds.maxY - bounds.minY + padding * 2;
    const offsetX = -bounds.minX + padding;
    const offsetY = -bounds.minY + padding;

    let svg = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    svg += `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">\n`;

    svg += `  <defs>\n`;
    svg += `    <style>\n`;
    svg += `      .title { font-family: ${PRETEXT_DISPLAY_FONT_FAMILY}; font-weight: 700; }\n`;
    svg += `      .body { font-family: ${PRETEXT_FONT_FAMILY}; font-weight: 500; }\n`;
    svg += `      .badge { font-family: ${PRETEXT_FONT_FAMILY}; font-weight: 700; font-size: 10px; }\n`;
    svg += `    </style>\n`;
    svg += `    <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">\n`;
    svg += `      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0f172a" flood-opacity="0.3"/>\n`;
    svg += `    </filter>\n`;
    svg += `  </defs>\n`;

    svg += `  <rect width="100%" height="100%" fill="${bgColor}"/>\n`;

    if (includeGrid) {
      svg += `  <g opacity="0.1">\n`;
      for (let x = 0; x < width; x += 72) {
        for (let y = 0; y < height; y += 72) {
          svg += `    <circle cx="${x}" cy="${y}" r="1" fill="#94a3b8"/>\n`;
        }
      }
      svg += `  </g>\n`;
    }

    svg += `  <g transform="translate(${offsetX}, ${offsetY})">\n`;

    svg += `    <g id="edges">\n`;
    for (const edge of layout.edges) {
      const source = layout.nodes.find((n) => n.id === edge.source);
      const target = layout.nodes.find((n) => n.id === edge.target);

      if (!source || !target) continue;

      const targetPalette = getNodePalette(target);
      const startX = source.x + source.width;
      const startY = source.y + source.height / 2;
      const endX = target.x;
      const endY = target.y + target.height / 2;
      const deltaX = Math.abs(endX - startX);
      const curve = Math.max(56, deltaX * 0.42);

      svg += `      <path d="M ${startX} ${startY} C ${startX + curve} ${startY}, ${endX - curve} ${endY}, ${endX} ${endY}"
        fill="none"
        stroke="${hexToRgba(targetPalette.accent, 0.42)}"
        stroke-width="2"/>\n`;

      if (edge.label) {
        const midX = (startX + endX) / 2;
        const midY = (startY + endY) / 2;
        svg += `      <text x="${midX}" y="${midY - 8}" class="badge" fill="${targetPalette.accent}" text-anchor="middle" opacity="0.8">${escapeXml(edge.label)}</text>\n`;
      }
    }
    svg += `    </g>\n`;

    svg += `    <g id="nodes">\n`;
    for (const node of layout.nodes) {
      const palette = getNodePalette(node);
      const radius = node.depth === 0 ? 28 : 24;
      const paddingX = node.depth === 0 ? 26 : 20;
      const paddingY = node.depth === 0 ? 24 : 18;

      svg += `      <g id="node-${node.id}" filter="url(#shadow)">\n`;

      svg += `        <rect x="${node.x}" y="${node.y}" width="${node.width}" height="${node.height}" rx="${radius}" fill="${palette.surface}" stroke="${palette.border}" stroke-width="1.2"/>\n`;

      const headerHeight = Math.min(node.height, node.depth === 0 ? 88 : 72);
      svg += `        <path d="M ${node.x + radius} ${node.y} L ${node.x + node.width - radius} ${node.y} A ${radius} ${radius} 0 0 1 ${node.x + node.width} ${node.y + radius} L ${node.x + node.width} ${node.y + headerHeight - radius} A ${radius} ${radius} 0 0 1 ${node.x + node.width - radius} ${node.y + headerHeight} L ${node.x + radius} ${node.y + headerHeight} A ${radius} ${radius} 0 0 1 ${node.x} ${node.y + headerHeight - radius} L ${node.x} ${node.y + radius} A ${radius} ${radius} 0 0 1 ${node.x + radius} ${node.y} Z" fill="${palette.header}"/>\n`;

      let cursorY = node.y + paddingY;
      const titleStyle = node.depth === 0 ? PRETEXT_TYPOGRAPHY.heroTitle : PRETEXT_TYPOGRAPHY.title;
      const titleFontSize = parseInt(titleStyle.font.match(/\d+px/)?.[0] || '18');
      const titleLines = wrapText(node.data.label, node.width - paddingX * 2, titleFontSize);

      svg += `        <g class="title" fill="${palette.title}" font-size="${titleFontSize}">\n`;
      for (const line of titleLines) {
        svg += `          <text x="${node.x + paddingX}" y="${cursorY}">${escapeXml(line)}</text>\n`;
        cursorY += titleStyle.lineHeight;
      }
      svg += `        </g>\n`;

      if (node.badges.length > 0) {
        cursorY += 10;
        let badgeX = node.x + paddingX;

        for (const badge of node.badges) {
          svg += `          <rect x="${badgeX}" y="${cursorY}" width="${badge.width}" height="20" rx="10" fill="${palette.pillBackground}"/>\n`;
          svg += `          <text x="${badgeX + 9}" y="${cursorY + 14}" class="badge" fill="${palette.pillText}">${escapeXml(badge.label)}</text>\n`;
          badgeX += badge.width + 6;
        }
        cursorY += 24;
      }

      if (node.description && node.data.description) {
        cursorY += 12;
        const bodyFontSize = 14;
        const bodyLines = wrapText(node.data.description, node.width - paddingX * 2, bodyFontSize);

        svg += `        <g class="body" fill="${palette.body}" font-size="${bodyFontSize}">\n`;
        for (const line of bodyLines.slice(0, 4)) {
          svg += `          <text x="${node.x + paddingX}" y="${cursorY}">${escapeXml(line)}</text>\n`;
          cursorY += 20;
        }
        if (bodyLines.length > 4) {
          svg += `          <text x="${node.x + paddingX}" y="${cursorY}" opacity="0.6">...</text>\n`;
        }
        svg += `        </g>\n`;
      }

      if (node.tags.length > 0) {
        cursorY += 12;
        let tagX = node.x + paddingX;
        const tagBg = node.depth === 0 ? hexToRgba('#0f172a', 0.14) : hexToRgba('#0f172a', 0.06);
        const tagColor = node.depth === 0 ? '#e2e8f0' : '#475569';

        for (const tag of node.tags.slice(0, 3)) {
          const tagWidth = Math.ceil(tag.label.length * 6) + 18;
          svg += `          <rect x="${tagX}" y="${cursorY}" width="${tagWidth}" height="22" rx="11" fill="${tagBg}"/>\n`;
          svg += `          <text x="${tagX + 9}" y="${cursorY + 15}" class="badge" fill="${tagColor}">${escapeXml(tag.label)}</text>\n`;
          tagX += tagWidth + 6;
        }
      }

      svg += `      </g>\n`;
    }
    svg += `    </g>\n`;

    svg += `  </g>\n`;
    svg += `</svg>`;

    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const baseName = filename || sanitizeFilename(layout.nodes[0]?.data.label || 'mind-map');

    triggerDownload(blob, `${baseName}.svg`);

    return {
      success: true,
      filename: `${baseName}.svg`,
      blob,
    };
  } catch (error) {
    return {
      success: false,
      filename: '',
      error: error instanceof Error ? error.message : 'Unknown error during SVG export',
    };
  }
}

export async function exportMindMap(
  data: MindMapData,
  options: ExportOptions
): Promise<ExportResult> {
  const baseName = options.filename || sanitizeFilename(data.nodes[0]?.label || 'mind-map');

  switch (options.format) {
    case 'json':
      return exportToJson(data, baseName, options.includeMetadata);

    case 'png':
      throw new Error('PNG export requires a canvas element. Use exportCanvasToPng instead.');

    case 'svg':
      throw new Error('SVG export requires a layout. Use exportLayoutToSvg instead.');

    default:
      return {
        success: false,
        filename: '',
        error: `Unsupported export format: ${options.format}`,
      };
  }
}

export function getExportFilename(data: MindMapData, format: ExportFormat): string {
  const baseName = sanitizeFilename(data.nodes[0]?.label || 'mind-map');
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  return `${baseName}-${timestamp}.${format}`;
}
