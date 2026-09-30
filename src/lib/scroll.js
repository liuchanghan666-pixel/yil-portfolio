// 平滑滚动到指定 section（配合 Lenis；无 Lenis 时退回原生 smooth 滚动）。
export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  const lenis = window.__lenis
  if (lenis) {
    lenis.scrollTo(el, { offset: -72 })
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
