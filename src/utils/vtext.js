// Draws text from built-in vector glyph outlines (no web-font download needed).
// `font` = { upm, c: { [char]: { d: svgPathData, a: advance } } }
export function vtext(font, txt, size, sp) {
  const sc = size / font.upm
  const p = new Path2D()
  let x = 0
  for (const ch of txt) {
    const g = font.c[ch]
    if (!g) continue
    if (g.d) p.addPath(new Path2D(g.d), new DOMMatrix([sc, 0, 0, -sc, x, 0]))
    x += g.a * sc + sp
  }
  return { p, w: x - sp }
}
