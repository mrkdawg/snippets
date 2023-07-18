/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 * @param text The text to be rendered.
 * @param font The css font descriptor that text is to be rendered with (e.g. "16px Helvetica").
 */
export function getTextWidth(text: string, font: string): number {
    // re-use canvas object for better performance
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d")!;
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
}