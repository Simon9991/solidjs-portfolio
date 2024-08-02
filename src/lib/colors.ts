export function hexToRgb(hex: string) {
  const bigint = Number.parseInt(hex.slice(1), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

export function rgbToHex(red: number, green: number, blue: number) {
  return `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;
}

export function interpolateColors(
  startColor: string,
  endColor: string,
  factor: number,
) {
  const [startRed, startGreen, startBlue] = hexToRgb(startColor);
  const [endRed, endGreen, endBlue] = hexToRgb(endColor);
  const red = Math.round(startRed + factor * (endRed - startRed));
  const green = Math.round(startGreen + factor * (endGreen - startGreen));
  const blue = Math.round(startBlue + factor * (endBlue - startBlue));

  return rgbToHex(red, green, blue);
}

function getBackgroundColor(scroll: number, maxScroll = 255) {
  const scrollPercentage = scroll / maxScroll;

  return interpolateColors("#282c34", "#1e293b", scrollPercentage);
}
