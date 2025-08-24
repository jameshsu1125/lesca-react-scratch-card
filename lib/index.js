import { jsxs as F, jsx as P } from "react/jsx-runtime";
import { useRef as h, useState as w, useEffect as b } from "react";
const S = (t, n, s, r) => {
  const o = t.getContext("2d");
  o && o.drawImage(n, 0, 0, s, r);
}, B = (t, n) => {
  const s = { x: 0, y: 0 }, r = { x: 0, y: 0 };
  if (n.offsetParent !== void 0 && n.offsetParent instanceof HTMLElement)
    do
      r.x += n.offsetLeft, r.y += n.offsetTop;
    while (n = n.offsetParent);
  return t instanceof TouchEvent ? (s.x = t.touches[0].clientX - r.x, s.y = t.touches[0].clientY - r.y) : (s.x = t.pageX - r.x, s.y = t.pageY - r.y), s;
}, M = (t, n) => Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2)), z = (t, n) => Math.atan2(n.x - t.x, n.y - t.y), K = (t, n, s, r) => {
  const o = n.getContext("2d");
  if (o) {
    for (var l = o.getImageData(0, 0, s, r), a = l.data, A = a.length, C = A / t, c = 0, i = c = 0; i < A; i += t)
      parseInt(String(a[i])) === 0 && c++;
    return Math.round(c / C * 100);
  }
}, R = new Image();
R.src = "data:image/png;base64,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";
const O = ({
  children: t,
  cover: n,
  onComplete: s,
  percent: r = 50,
  width: o = 320,
  height: l = 240,
  brushSize: a = { width: 50, height: 50 }
}) => {
  const A = h(document.createElement("canvas")), [C, c] = w(!1), [i, J] = w("none"), [I, E] = w(), d = h(!1), u = h({ x: 0, y: 0 }), L = (e) => {
    d.current = !1, e.removeEventListener("mousedown", m), e.removeEventListener("mousemove", g), e.removeEventListener("mouseup", y), e.removeEventListener("touchstart", m), e.removeEventListener("touchmove", g), e.removeEventListener("touchend", y);
  };
  b(() => {
    const e = new Image();
    e.onload = () => {
      J("block"), E(e), c(!0);
    }, e.src = n;
  }, []);
  const m = (e) => {
    d.current = !0, u.current = B(e, A.current);
  }, g = (e) => {
    if (!d.current) return;
    e.preventDefault?.();
    const Q = B(e, A.current), U = M(u.current, Q), V = z(u.current, Q), f = A.current, v = f.getContext("2d");
    Array.from(Array(Math.floor(U)).keys()).forEach((x) => {
      const { x: W, y: Z } = u.current, D = W + Math.sin(V) * x - a.width / 2, Y = Z + Math.cos(V) * x - a.height / 2;
      v && (v.globalCompositeOperation = "destination-out", v.drawImage(R, D, Y, a.width, a.height));
    }), u.current = Q;
    const p = K(32, f, f.width, f.height);
    p && p >= r && (c(!1), s?.(), L(f));
  }, y = () => {
    d.current = !1;
  };
  return b(() => {
    if (I) {
      const e = A.current;
      e && (S(e, I, o, l), e.addEventListener("mousedown", m, !1), e.addEventListener("mousemove", g, !1), e.addEventListener("mouseup", y, !1), e.addEventListener("touchstart", m, !1), e.addEventListener("touchmove", g, !1), e.addEventListener("touchend", y, !1));
    }
  }, [I]), /* @__PURE__ */ F("div", { className: "LescaScratchCard", style: { position: "relative", width: o, height: l, display: i }, children: [
    t,
    C && /* @__PURE__ */ P(
      "canvas",
      {
        ref: A,
        width: o,
        height: l,
        style: { position: "absolute", backgroundColor: "transparent", top: 0, left: 0 }
      }
    )
  ] });
};
export {
  O as default
};
