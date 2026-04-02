import {
  clearCache,
  layout,
  layoutWithLines,
  prepare,
  prepareWithSegments,
  walkLineRanges,
  type LayoutLine,
  type PreparedText,
  type PreparedTextWithSegments,
} from '@chenglou/pretext';

export interface PretextTextStyle {
  font: string;
  lineHeight: number;
  whiteSpace?: 'normal' | 'pre-wrap';
}

export interface PretextMeasuredBlock {
  lines: LayoutLine[];
  width: number;
  height: number;
  lineCount: number;
  lineHeight: number;
}

export const PRETEXT_FONT_FAMILY = '"IBM Plex Sans", sans-serif';
export const PRETEXT_DISPLAY_FONT_FAMILY = '"Space Grotesk", "IBM Plex Sans", sans-serif';

export const PRETEXT_TYPOGRAPHY = {
  heroTitle: {
    font: `700 28px ${PRETEXT_DISPLAY_FONT_FAMILY}`,
    lineHeight: 34,
  },
  title: {
    font: `700 18px ${PRETEXT_DISPLAY_FONT_FAMILY}`,
    lineHeight: 24,
  },
  body: {
    font: `500 14px ${PRETEXT_FONT_FAMILY}`,
    lineHeight: 20,
  },
  badge: {
    font: `700 10px ${PRETEXT_FONT_FAMILY}`,
    lineHeight: 14,
  },
  meta: {
    font: `600 12px ${PRETEXT_FONT_FAMILY}`,
    lineHeight: 18,
  },
} as const satisfies Record<string, PretextTextStyle>;

const preparedTextCache = new Map<string, PreparedText>();
const preparedSegmentCache = new Map<string, PreparedTextWithSegments>();

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function getCacheKey(text: string, style: PretextTextStyle) {
  return `${style.font}::${style.whiteSpace || 'normal'}::${text}`;
}

function getPreparedText(text: string, style: PretextTextStyle) {
  const cacheKey = getCacheKey(text, style);
  const cached = preparedTextCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const prepared = prepare(text, style.font, { whiteSpace: style.whiteSpace || 'normal' });
  preparedTextCache.set(cacheKey, prepared);
  return prepared;
}

function getPreparedSegments(text: string, style: PretextTextStyle) {
  const cacheKey = getCacheKey(text, style);
  const cached = preparedSegmentCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const prepared = prepareWithSegments(text, style.font, { whiteSpace: style.whiteSpace || 'normal' });
  preparedSegmentCache.set(cacheKey, prepared);
  return prepared;
}

export function measureTextBlock(text: string, style: PretextTextStyle, maxWidth: number): PretextMeasuredBlock {
  if (!text.trim()) {
    return {
      lines: [],
      width: 0,
      height: 0,
      lineCount: 0,
      lineHeight: style.lineHeight,
    };
  }

  const prepared = getPreparedText(text, style);
  const preparedSegments = getPreparedSegments(text, style);
  const layoutResult = layout(prepared, maxWidth, style.lineHeight);
  const linesResult = layoutWithLines(preparedSegments, maxWidth, style.lineHeight);
  const width = Math.ceil(linesResult.lines.reduce((max, line) => Math.max(max, line.width), 0));

  return {
    lines: linesResult.lines,
    width,
    height: layoutResult.height,
    lineCount: layoutResult.lineCount,
    lineHeight: style.lineHeight,
  };
}

export function measureSingleLineWidth(text: string, style: PretextTextStyle) {
  return measureTextBlock(text, style, 2000).width;
}

export function findShrinkWrapWidth(
  text: string,
  style: PretextTextStyle,
  minWidth: number,
  maxWidth: number,
  preferredLineCount: number
) {
  if (!text.trim()) {
    return minWidth;
  }

  const prepared = getPreparedSegments(text, style);
  let low = minWidth;
  let high = maxWidth;
  let bestWidth = maxWidth;
  let bestMeasuredWidth = maxWidth;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    let widestLine = 0;
    const lineCount = walkLineRanges(prepared, mid, (line) => {
      widestLine = Math.max(widestLine, line.width);
    });

    if (lineCount <= preferredLineCount) {
      bestWidth = mid;
      bestMeasuredWidth = widestLine;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return clamp(Math.ceil(Math.max(bestMeasuredWidth + 8, bestWidth)), minWidth, maxWidth);
}

export function clearPretextTextCaches() {
  preparedTextCache.clear();
  preparedSegmentCache.clear();
  clearCache();
}