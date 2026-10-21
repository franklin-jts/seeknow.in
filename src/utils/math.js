export const sm = (a, b, x) => {
  x = Math.min(1, Math.max(0, (x - a) / (b - a)))
  return x * x * (3 - 2 * x)
}
export const lerp = (a, b, k) => a + (b - a) * k
export const clamp = (x, a, b) => Math.min(b, Math.max(a, x))
