import { PRETEXT_TYPOGRAPHY } from "../../services/pretextTextService";
import { ExplorerNode, SceneNode } from "./types";
import { hexToRgba, getNodePalette } from "./utils";

export function drawBadgeRow(
  ctx: CanvasRenderingContext2D,
  labels: Array<{ label: string; width: number }>,
  x: number,
  y: number,
  background: string,
  color: string
) {
  let cursorX = x;
  labels.forEach((item) => {
    ctx.fillStyle = background;
    ctx.beginPath();
    ctx.roundRect(cursorX, y, item.width, 20, 10);
    ctx.fill();
    ctx.fillStyle = color;
    ctx.font = PRETEXT_TYPOGRAPHY.badge.font;
    ctx.textBaseline = "top";
    ctx.fillText(item.label, cursorX + 9, y + 5);
    cursorX += item.width + 6;
  });
}

export function drawNodeCard(
  ctx: CanvasRenderingContext2D,
  node: ExplorerNode,
  x: number,
  y: number,
  scale: number,
  opacity: number,
  role: SceneNode["role"],
  isHovered: boolean,
  isSelected: boolean,
  isVisited: boolean,
  descendantCount: number
) {
  const palette = getNodePalette(node);
  const radius = node.depth === 0 ? 28 : 24;
  const paddingX = node.depth === 0 ? 26 : 20;
  const paddingY = node.depth === 0 ? 24 : 18;
  const width = node.width;
  const height = node.height;

  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.globalAlpha = opacity;

  ctx.shadowColor = isSelected
    ? hexToRgba(palette.accent, 0.28)
    : palette.shadow;
  ctx.shadowBlur = isSelected ? 26 : isHovered ? 22 : 18;
  ctx.shadowOffsetY = 12;

  ctx.beginPath();
  ctx.roundRect(0, 0, width, height, radius);
  ctx.fillStyle = palette.surface;
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.globalAlpha = opacity;
  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;

  const headerHeight = Math.min(height, node.depth === 0 ? 88 : 72);
  ctx.beginPath();
  ctx.roundRect(0, 0, width, headerHeight, [radius, radius, 0, 0]);
  ctx.fillStyle = palette.header;
  ctx.fill();

  ctx.beginPath();
  ctx.roundRect(0, 0, width, height, radius);
  ctx.lineWidth = isSelected ? 2.4 : isHovered ? 1.8 : 1.2;
  ctx.strokeStyle = isSelected
    ? palette.accent
    : isHovered
      ? hexToRgba(palette.accent, 0.7)
      : palette.border;
  ctx.stroke();

  if (isVisited && role !== "focus") {
    ctx.fillStyle = hexToRgba(palette.accent, 0.15);
    ctx.beginPath();
    ctx.roundRect(width - 48, 12, 36, 18, 9);
    ctx.fill();
    ctx.fillStyle = palette.pillText;
    ctx.font = `700 9px ${PRETEXT_TYPOGRAPHY.badge.font.split(" ").slice(-2).join(" ")}`;
    ctx.textBaseline = "top";
    ctx.fillText("SEEN", width - 42, 16);
  }

  if (descendantCount > 0 && role === "focus") {
    ctx.fillStyle = hexToRgba(palette.accent, 0.2);
    ctx.beginPath();
    ctx.roundRect(width - 60, 12, 48, 20, 10);
    ctx.fill();
    ctx.fillStyle = palette.pillText;
    ctx.font = `700 10px ${PRETEXT_TYPOGRAPHY.badge.font.split(" ").slice(-2).join(" ")}`;
    ctx.textBaseline = "top";
    ctx.fillText(`${descendantCount} nodes`, width - 54, 16);
  }

  let cursorY = paddingY;
  const titleStyle =
    node.depth === 0 ? PRETEXT_TYPOGRAPHY.heroTitle : PRETEXT_TYPOGRAPHY.title;
  ctx.fillStyle = palette.title;
  ctx.font = titleStyle.font;
  ctx.textBaseline = "top";

  const titleText =
    node.isEditing && node.editLabel !== undefined
      ? node.editLabel
      : node.data.label;
  const titleLines = titleText.split("\n");
  titleLines.forEach((line) => {
    ctx.fillText(line, paddingX, cursorY);
    cursorY += titleStyle.lineHeight;
  });

  if (node.badges.length > 0 && !node.isEditing) {
    cursorY += 10;
    drawBadgeRow(
      ctx,
      node.badges,
      paddingX,
      cursorY,
      palette.pillBackground,
      palette.pillText,
    );
    cursorY += 24;
  }

  if (
    node.description &&
    node.description.lines.length > 0 &&
    !node.isEditing
  ) {
    cursorY += 12;
    ctx.fillStyle = palette.body;
    ctx.font = PRETEXT_TYPOGRAPHY.body.font;
    ctx.textBaseline = "top";

    const maxDescLines = 4;
    node.description.lines.slice(0, maxDescLines).forEach((line) => {
      ctx.fillText(line.text, paddingX, cursorY);
      cursorY += PRETEXT_TYPOGRAPHY.body.lineHeight;
    });
    if (node.description.lines.length > maxDescLines) {
      ctx.fillStyle = hexToRgba(palette.body, 0.5);
      ctx.fillText("...", paddingX, cursorY);
    }
  } else if (node.isEditing && node.editDescription) {
    cursorY += 12;
    ctx.fillStyle = palette.body;
    ctx.font = PRETEXT_TYPOGRAPHY.body.font;
    ctx.textBaseline = "top";

    const descLines = node.editDescription.split("\n");
    const maxDescLines = 6;
    descLines.slice(0, maxDescLines).forEach((line) => {
      ctx.fillText(line, paddingX, cursorY);
      cursorY += PRETEXT_TYPOGRAPHY.body.lineHeight;
    });
  }

  if (node.tags.length > 0 && !node.isEditing) {
    cursorY += 12;
    const tagBg =
      node.depth === 0
        ? hexToRgba("#0f172a", 0.14)
        : hexToRgba("#0f172a", 0.06);
    const tagColor = node.depth === 0 ? "#e2e8f0" : "#475569";
    drawBadgeRow(
      ctx,
      node.tags.slice(0, 3),
      paddingX,
      cursorY,
      tagBg,
      tagColor,
    );
  }

  if (node.isEditing) {
    ctx.strokeStyle = hexToRgba(palette.accent, 0.6);
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.roundRect(4, 4, width - 8, height - 8, radius - 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  ctx.restore();
}

export function drawEdge(
  ctx: CanvasRenderingContext2D,
  source: SceneNode,
  target: SceneNode,
  label?: string
) {
  const targetPalette = getNodePalette(target.node);
  const startX = source.targetX + source.node.width / 2;
  const startY = source.targetY + source.node.height / 2;
  const endX = target.targetX + target.node.width / 2;
  const endY = target.targetY + target.node.height / 2;

  const deltaX = Math.abs(endX - startX);
  const deltaY = Math.abs(endY - startY);
  const curve = Math.max(40, deltaX * 0.35);

  ctx.beginPath();

  if (Math.abs(startY - endY) < 50) {
    const midX = (startX + endX) / 2;
    ctx.moveTo(startX, startY);
    ctx.quadraticCurveTo(midX, startY - 30, endX, endY);
  } else {
    ctx.moveTo(startX, startY);
    ctx.bezierCurveTo(
      startX,
      startY + curve * 0.5,
      endX,
      endY - curve * 0.5,
      endX,
      endY,
    );
  }

  ctx.strokeStyle = hexToRgba(targetPalette.accent, 0.35);
  ctx.lineWidth = 2;
  ctx.stroke();

  if (label) {
    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;
    ctx.fillStyle = hexToRgba(targetPalette.accent, 0.7);
    ctx.font = PRETEXT_TYPOGRAPHY.badge.font;
    ctx.textBaseline = "bottom";
    ctx.textAlign = "center";
    ctx.fillText(label, midX, midY - 6);
    ctx.textAlign = "start";
    ctx.textBaseline = "top";
  }
}
