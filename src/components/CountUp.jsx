import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

// 数字增长：进入视口后从 0 增长到目标值，仅触发一次。
export default function CountUp({ to, duration = 1.3 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to, duration])

  return <span ref={ref}>{val}</span>
}
