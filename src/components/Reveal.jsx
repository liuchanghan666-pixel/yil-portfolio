import { motion } from 'framer-motion'

// 通用滚动渐入容器。
// 这是「滚动动画」的替换点：以后想换成 React Bits 的动画组件，替换这里的实现即可。
export default function Reveal({ children, delay = 0, y = 28, className = '', once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
