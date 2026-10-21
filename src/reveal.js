import { sm, lerp, clamp } from './utils/math.js'
import { vtext } from './utils/vtext.js'
import outfit from './data/outfit-glyphs.json'
import logoUrl from './assets/seeknow-logo.png'

/**
 * Seeknow cinematic logo reveal (canvas).
 * Timeline: black -> dark silhouette + spark -> slow light sweep -> fully lit
 * logo -> tagline sweep -> hold. Pass { intro: true } for the optional macro close-up scene.
 */
export function createReveal(cv, { intro = false } = {}) {
  const INTRO = intro
  const ctx = cv.getContext('2d')
  const sm = (a, b, x) => {
    x = Math.min(1, Math.max(0, (x - a) / (b - a)))
    return x * x * (3 - 2 * x)
  }
  const lerp = (a, b, k) => a + (b - a) * k,
    clamp = (x, a, b) => Math.min(b, Math.max(a, x))
  const mk = (w, h) => {
    const c = document.createElement('canvas')
    c.width = Math.max(1, w | 0)
    c.height = Math.max(1, h | 0)
    return c
  }
  const img = new Image()
  let vw,
    vh,
    dpr,
    s1,
    s2,
    t0,
    L,
    Lb,
    M,
    T,
    G1,
    G2,
    B1,
    B2,
    R,
    P,
    PW,
    PH,
    dust = [],
    raf
  const replay = () => {
    t0 = performance.now()
  }
  function resize() {
    dpr = Math.min(2, devicePixelRatio || 1)
    vw = innerWidth
    vh = innerHeight
    cv.width = vw * dpr
    cv.height = vh * dpr
    R = mk(vw, vh)
    s1 = (1.3 * vh) / (0.82 * img.height)
    s2 = Math.min(vw * 0.36, (vh * 0.5 * img.width) / img.height) / img.width
  }
  function start() {
    P = Math.round(img.width * 0.15)
    PW = img.width + 2 * P
    PH = img.height + 2 * P
    L = mk(PW, PH)
    L.getContext('2d').drawImage(img, P, P)
    Lb = mk(PW, PH)
    let x = Lb.getContext('2d')
    x.drawImage(L, 0, 0)
    x.globalCompositeOperation = 'source-in'
    x.fillStyle = '#010202'
    x.fillRect(0, 0, PW, PH)
    const tint = (c, k) => {
      const q = c.getContext('2d')
      q.globalCompositeOperation = 'source-over'
      q.clearRect(0, 0, c.width, c.height)
      q.drawImage(L, 0, 0, c.width, c.height)
      q.globalCompositeOperation = 'source-in'
      q.fillStyle = k
      q.fillRect(0, 0, c.width, c.height)
    }
    B1 = mk(PW / 5, PH / 5)
    tint(B1, 'rgba(235,225,255,1)')
    B2 = mk(PW / 16, PH / 16)
    tint(B2, 'rgba(235,225,255,1)')
    M = mk(PW, PH)
    T = mk(PW, PH)
    G1 = mk(PW / 6, PH / 6)
    G2 = mk(PW / 22, PH / 22)
    for (let i = 0; i < 55; i++)
      dust.push({
        x: Math.random(),
        y: Math.random(),
        r: 0.5 + Math.random() * 0.9,
        a: 0.15 + Math.random() * 0.5,
        vx: (Math.random() - 0.5) * 0.003,
        vy: -0.002 - Math.random() * 0.004,
        ph: Math.random() * 6.28,
      })
    resize()
    addEventListener('resize', resize)
    addEventListener('pointerdown', replay)
    t0 = performance.now()
    raf = requestAnimationFrame(frame)
  }
  function glowCanvas(g, k) {
    const x = g.getContext('2d')
    x.globalCompositeOperation = 'source-over'
    x.clearRect(0, 0, g.width, g.height)
    x.drawImage(T, 0, 0, g.width, g.height)
    x.globalCompositeOperation = 'source-atop'
    x.fillStyle = k
    x.fillRect(0, 0, g.width, g.height)
  }
  function vignette() {
    const v = ctx.createRadialGradient(
      vw / 2,
      vh / 2,
      Math.min(vw, vh) * 0.3,
      vw / 2,
      vh / 2,
      Math.max(vw, vh) * 0.78,
    )
    v.addColorStop(0, 'rgba(0,0,0,0)')
    v.addColorStop(1, 'rgba(0,0,0,.7)')
    ctx.globalCompositeOperation = 'source-over'
    ctx.fillStyle = v
    ctx.fillRect(0, 0, vw, vh)
  }
  // ---------- SCENE 1: macro close-up, dark silhouette, rim light sweep (0 - 6.4s)
  function scene1(t) {
    const env = sm(0.3, 3.4, t) * (1 - sm(4.6, 6.3, t))
    const k = clamp((t - 2) / 3.6, 0, 1),
      e = k * k * (3 - 2 * k)
    const lxp = lerp(0.03, 0.78, e) * vw,
      lyp = lerp(0.88, 0.14, e) * vh
    const cam = 1 + (0.05 * t) / 6.4,
      s = s1 * cam
    ctx.save()
    ctx.translate(vw / 2, vh / 2)
    ctx.scale(cam, cam)
    ctx.translate(-vw / 2, -vh / 2)
    // logo origin so ring centre sits at ~ (0.5,0.56)
    const ox = vw * 0.5 - (P + 397) * s1,
      oy = vh * 0.56 - (P + 69) * s1
    // haze backdrop
    ctx.globalCompositeOperation = 'lighter'
    let h = ctx.createRadialGradient(lxp, lyp, 0, lxp, lyp, vw * 0.95)
    h.addColorStop(0, 'rgba(150,150,160,' + 0.5 * env + ')')
    h.addColorStop(0.5, 'rgba(95,92,105,' + 0.28 * env + ')')
    h.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.fillStyle = h
    ctx.fillRect(0, 0, vw, vh)
    let tp = ctx.createLinearGradient(0, 0, 0, vh * 0.7)
    tp.addColorStop(0, 'rgba(170,165,185,' + 0.32 * env + ')')
    tp.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.fillStyle = tp
    ctx.fillRect(0, 0, vw, vh)
    // rim glow, masked around the light
    const r = R.getContext('2d')
    r.setTransform(1, 0, 0, 1, 0, 0)
    r.globalCompositeOperation = 'source-over'
    r.clearRect(0, 0, vw, vh)
    r.drawImage(B2, ox, oy, PW * s1, PH * s1)
    r.globalAlpha = 0.8
    r.drawImage(B1, ox, oy, PW * s1, PH * s1)
    r.globalAlpha = 1
    r.globalCompositeOperation = 'destination-in'
    const mg = r.createRadialGradient(lxp, lyp, 0, lxp, lyp, vw * 0.5)
    mg.addColorStop(0, 'rgba(0,0,0,1)')
    mg.addColorStop(0.35, 'rgba(0,0,0,.6)')
    mg.addColorStop(1, 'rgba(0,0,0,0)')
    r.fillStyle = mg
    r.fillRect(0, 0, vw, vh)
    ctx.globalAlpha = Math.min(1, 1.3 * env)
    ctx.drawImage(R, 0, 0)
    ctx.globalAlpha = 1
    // hot spot flare at the light
    let f = ctx.createRadialGradient(lxp, lyp, 0, lxp, lyp, vh * 0.35)
    f.addColorStop(0, 'rgba(255,245,255,' + 0.22 * env + ')')
    f.addColorStop(1, 'rgba(150,100,255,0)')
    ctx.fillStyle = f
    ctx.fillRect(0, 0, vw, vh)
    // the dark logo silhouette in front of the light
    ctx.globalCompositeOperation = 'source-over'
    ctx.drawImage(Lb, ox, oy, PW * s1, PH * s1)
    ctx.restore()
    vignette()
  }
  // ---------- SCENE 2: wide shot, logo emerges from darkness (7.4 - 18s)
  function scene2(t) {
    const W = img.width,
      H = img.height
    const lead = lerp(
      -0.12 * W,
      1.3 * W,
      (() => {
        const k = clamp((t - 8.7) / 3.3, 0, 1)
        return k * k * (3 - 2 * k)
      })(),
    )
    const hotOn = sm(7.3, 8.1, t) * (1 - sm(12, 13.4, t)),
      hx = P + 397,
      hy = P + 6
    const ramp = sm(11.6, 12.6, t)
    const m = M.getContext('2d')
    m.globalCompositeOperation = 'source-over'
    m.clearRect(0, 0, PW, PH)
    const x0 = P + lead - 0.32 * W,
      x1 = P + lead + 0.05 * W,
      g = m.createLinearGradient(x0, 0, x1, 0)
    g.addColorStop(0, 'rgba(255,255,255,1)')
    g.addColorStop(0.7, 'rgba(255,255,255,1)')
    g.addColorStop(0.78, 'rgba(255,255,255,.55)')
    g.addColorStop(0.92, 'rgba(255,255,255,.5)')
    g.addColorStop(1, 'rgba(255,255,255,0)')
    m.fillStyle = g
    m.fillRect(0, 0, PW, PH)
    m.globalCompositeOperation = 'lighter'
    const hg = m.createRadialGradient(hx, hy, 0, hx, hy, H * 0.7)
    hg.addColorStop(0, 'rgba(255,255,255,' + 0.95 * hotOn + ')')
    hg.addColorStop(1, 'rgba(255,255,255,0)')
    m.fillStyle = hg
    m.fillRect(0, 0, PW, PH)
    m.fillStyle = 'rgba(255,255,255,' + ramp + ')'
    m.fillRect(0, 0, PW, PH)
    // dim band travelling across after the logo is lit
    const bk = clamp((t - 12.2) / 1.3, 0, 1),
      bamp = Math.sin(bk * Math.PI) * 0.4
    if (bamp > 0) {
      const bx = P + lerp(-0.1 * W, 1.1 * W, bk),
        bg = m.createLinearGradient(bx - 0.07 * W, 0, bx + 0.07 * W, 0)
      bg.addColorStop(0, 'rgba(0,0,0,0)')
      bg.addColorStop(0.5, 'rgba(0,0,0,' + bamp + ')')
      bg.addColorStop(1, 'rgba(0,0,0,0)')
      m.globalCompositeOperation = 'destination-out'
      m.fillStyle = bg
      m.fillRect(0, 0, PW, PH)
    }
    const q = T.getContext('2d')
    q.globalCompositeOperation = 'source-over'
    q.clearRect(0, 0, PW, PH)
    q.drawImage(L, 0, 0)
    q.globalCompositeOperation = 'destination-in'
    q.drawImage(M, 0, 0)
    q.globalCompositeOperation = 'source-atop'
    const tg = q.createRadialGradient(hx, hy, 0, hx, hy, H * 1.1)
    tg.addColorStop(0, 'rgba(205,175,255,' + 0.5 * hotOn + ')')
    tg.addColorStop(1, 'rgba(205,175,255,0)')
    q.fillStyle = tg
    q.fillRect(0, 0, PW, PH)
    glowCanvas(G1, 'rgba(150,95,255,.95)')
    glowCanvas(G2, 'rgba(150,95,255,.95)')
    const ga = sm(10, 13, t) * (1 - 0.5 * sm(14, 20, t))
    const hz = Math.min(1, sm(7.6, 9.4, t) * 0.5 + 0.5 * ga)
    const cam = 1 + 0.02 * clamp((t - 7.4) / 10.6, 0, 1)
    const ox = vw / 2 - (PW * s2) / 2,
      oy = vh / 2 - (PH * s2) / 2,
      sx = ox + hx * s2,
      sy = oy + hy * s2
    ctx.save()
    ctx.translate(vw / 2, vh / 2)
    ctx.scale(cam, cam)
    ctx.translate(-vw / 2, -vh / 2)
    ctx.globalCompositeOperation = 'lighter'
    let a = ctx.createRadialGradient(vw / 2, vh / 2, 0, vw / 2, vh / 2, Math.max(vw, vh) * 0.45)
    a.addColorStop(0, 'rgba(0,0,0,0)')
    a.addColorStop(0.5, 'rgba(0,0,0,0)')
    a.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.fillStyle = a
    ctx.fillRect(0, 0, vw, vh)
    // soft light rays from the light source
    for (let i = 0; i < 9; i++) {
      const ang = -1.1 + i * 0.28 + Math.sin(t * 0.3 + i) * 0.03,
        len = Math.max(vw, vh) * 0.6
      ctx.save()
      ctx.translate(sx, sy)
      ctx.rotate(ang)
      const rg = ctx.createLinearGradient(0, 0, len, 0)
      rg.addColorStop(0, 'rgba(190,165,255,' + 0.018 * hotOn + ')')
      rg.addColorStop(1, 'rgba(190,165,255,0)')
      ctx.fillStyle = rg
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(len, -len * 0.04)
      ctx.lineTo(len, len * 0.04)
      ctx.fill()
      ctx.restore()
    }
    ctx.globalCompositeOperation = 'source-over'
    ctx.globalAlpha = 0.06 * sm(7.5, 8.8, t)
    ctx.drawImage(L, ox, oy, PW * s2, PH * s2)
    ctx.globalAlpha = 1
    ctx.globalCompositeOperation = 'lighter'

    ctx.globalCompositeOperation = 'source-over'
    ctx.drawImage(T, ox, oy, PW * s2, PH * s2)
    // lens bloom at the highlight
    ctx.globalCompositeOperation = 'lighter'
    let b = ctx.createRadialGradient(sx, sy, 0, sx, sy, vh * 0.16)
    b.addColorStop(0, 'rgba(255,245,255,' + 0.4 * hotOn + ')')
    b.addColorStop(0.3, 'rgba(175,130,255,' + 0.15 * hotOn + ')')
    b.addColorStop(1, 'rgba(90,50,200,0)')
    ctx.fillStyle = b
    ctx.fillRect(0, 0, vw, vh)
    ctx.save()
    ctx.translate(sx, sy)
    ctx.scale(1, 0.05)
    let st = ctx.createRadialGradient(0, 0, 0, 0, 0, vw * 0.18)
    st.addColorStop(0, 'rgba(225,205,255,' + 0.35 * hotOn + ')')
    st.addColorStop(1, 'rgba(150,100,255,0)')
    ctx.fillStyle = st
    ctx.beginPath()
    ctx.arc(0, 0, vw * 0.18, 0, 6.28)
    ctx.fill()
    ctx.restore()
    // faint dust
    for (const d of dust) {
      const X = ((((d.x + d.vx * t + Math.sin(t * 0.3 + d.ph) * 0.004) % 1) + 1) % 1) * vw,
        Y = ((((d.y + d.vy * t) % 1) + 1) % 1) * vh
      const dd = Math.hypot(X - vw / 2, Y - vh / 2) / (vh * 0.4),
        al =
          d.a * (0.1 + 0.5 * Math.exp(-dd * dd) * ga) * (0.6 + 0.4 * Math.sin(t * 1.5 + d.ph)) * sm(7.6, 9, t)
      ctx.fillStyle = 'rgba(225,210,255,' + al + ')'
      ctx.beginPath()
      ctx.arc(X, Y, d.r, 0, 6.28)
      ctx.fill()
    }
    // tagline under the logo: revealed by a soft light sweep after the logo is fully lit
    {
      const tk = clamp((t - 12.4) / 2.4, 0, 1)
      if (tk > 0) {
        ctx.globalCompositeOperation = 'source-over'
        ctx.globalAlpha = 1
        const lw = W * s2,
          bot = oy + (P + H) * s2,
          txt = "India's First Workforce Operating System"
        const f0 = lw * 0.07,
          w0 = vtext(outfit['400'], txt, f0, f0 * 0.14).w,
          fs = (f0 * lw * 0.8) / w0,
          T = vtext(outfit['400'], txt, fs, fs * 0.14),
          tw = T.w,
          tx = vw / 2 - tw / 2,
          ty = bot + lw * 0.075 + fs,
          e = tk * tk * (3 - 2 * tk),
          lead = (-0.1 + 1.5 * e) * tw
        const tgr = ctx.createLinearGradient(lead - 0.35 * tw, 0, lead, 0)
        tgr.addColorStop(0, 'rgba(238,232,255,.92)')
        tgr.addColorStop(1, 'rgba(238,232,255,0)')
        ctx.shadowBlur = 0
        ctx.save()
        ctx.translate(tx, ty)
        ctx.fillStyle = tgr
        ctx.fill(T.p)
        ctx.restore()
      }
    }
    ctx.restore()
    vignette()
  }
  function frame(now) {
    const t = (now - t0) / 1000
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.globalCompositeOperation = 'source-over'
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, vw, vh)
    if (INTRO) {
      if (t < 6.7) scene1(t)
      else if (t >= 7.2) scene2(Math.min(t, 60))
    } else scene2(Math.min(t + 6.6, 60))
    raf = requestAnimationFrame(frame)
  }

  return {
    play() {
      img.onload = start
      img.src = logoUrl
    },
    replay,
    skipToMain() {
      // Skip to the main reveal (scene 2)
      t0 = performance.now() - 7200 // Jump to 7.2 seconds (start of scene 2)
    },
    destroy() {
      cancelAnimationFrame(raf)
      removeEventListener('resize', resize)
      removeEventListener('pointerdown', replay)
    },
  }
}
