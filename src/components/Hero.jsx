import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { site } from '../data/site'
import { scrollToId } from '../lib/scroll'
import TechText from './TechText'
import GradualBlur from './GradualBlur'

const EASE = [0.22, 1, 0.36, 1]

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 900], [0, 140])
  const scale = useTransform(scrollY, [0, 900], [1.06, 1])

  // 首屏鼠标跟随视差（只有第一页文字跟随）
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 15, mass: 0.4 })
  const sy = useSpring(my, { stiffness: 60, damping: 15, mass: 0.4 })
  // 分层：大标题稳（幅度小），下方小字飘（幅度中等），产生纵深
  const titleX = useTransform(sx, (v) => v * 0.45)
  const titleY = useTransform(sy, (v) => v * 0.45)

  const handleMove = (e) => {
    const nx = (e.clientX / window.innerWidth - 0.5) * 2 // -1 .. 1
    const ny = (e.clientY / window.innerHeight - 0.5) * 2
    mx.set(nx * 30) // 中等幅度 ±30px
    my.set(ny * 30)
  }
  const handleLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <section className="hero" id="home" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <motion.div className="hero__bg" style={{ y, scale }} aria-hidden="true">
        <div className="hero__bg-media" />
        <div className="hero__overlay" />
      </motion.div>

      <div className="hero__inner">
        <motion.p
          className="hero__greeting"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9, ease: EASE }}
        >
          Hi, I&apos;m Yi Zili. Welcome to my home field.
        </motion.p>

        <motion.h1 className="hero__title" style={{ x: titleX, y: titleY }}>
          <TechText
            text={site.nameEn}
            fontWeight={300}
            fontSize={360}
            letterSpacing={0.04}
            color="#ffffff"
            accentColor="#cbb18a"
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={15}
            fontFamily="'Archivo', sans-serif"
          />
        </motion.h1>

        <motion.div className="hero__meta" style={{ x: sx, y: sy }}>
          <motion.p
            className="hero__name-zh"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8, ease: EASE }}
          >
            {site.nameZh}
          </motion.p>

          <motion.p
            className="hero__roles"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.16, duration: 0.9 }}
          >
            {site.roleEn.join('   ·   ')}
          </motion.p>

          <motion.p
            className="hero__kicker"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.26, duration: 0.8, ease: EASE }}
          >
            {site.roleZh}
          </motion.p>

          <motion.p
            className="hero__loc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.34, duration: 0.9 }}
          >
            {site.locationEn}
          </motion.p>

          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.44, duration: 0.8, ease: EASE }}
          >
            <a
              href="#works"
              className="btn"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('works')
              }}
            >
              查看作品
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* 首屏底部渐变模糊：让内容在滑出屏幕前柔化淡出 */}
      <GradualBlur
        target="parent"
        position="bottom"
        height="6rem"
        strength={2.5}
        divCount={6}
        curve="bezier"
        exponential
        opacity={1}
      />
    </section>
  )
}
