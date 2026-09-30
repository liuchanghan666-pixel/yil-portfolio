import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// 自定义光标：仅桌面端（hover + 精确指针）启用，触屏自动关闭。
// 经过 [data-cursor="view"] 的元素时放大并显示「查看」。
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [view, setView] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 })

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return
    setEnabled(true)
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  useEffect(() => {
    if (!enabled) return
    const over = (e) => setView(!!e.target.closest('[data-cursor="view"]'))
    document.addEventListener('mouseover', over)
    return () => document.removeEventListener('mouseover', over)
  }, [enabled])

  if (!enabled) return null

  return (
    <motion.div
      className="cursor"
      style={{ x: sx, y: sy }}
      data-state={view ? 'view' : 'idle'}
      aria-hidden="true"
    >
      <span className="cursor__dot">
        <span className="cursor__label">查看</span>
      </span>
    </motion.div>
  )
}
