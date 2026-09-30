import { motion } from 'framer-motion'
import Reveal from './Reveal'
import CountUp from './CountUp'

const GROUPS = [
  {
    title: '视频制作',
    items: ['商业视频拍摄', '宣传片制作', '短视频制作', '人物口播拍摄', '镜头设计', '现场执行'],
  },
  {
    title: '后期制作',
    items: ['视频剪辑', '调色', '字幕包装', '节奏设计', '成片优化'],
  },
  {
    title: '项目能力',
    items: ['前期客户沟通', '内容策划', '脚本框架', '拍摄执行', '甲方沟通', '团队协作', '作品审核', '项目交付'],
  },
]

// 软件熟练度（百分比 + 文字等级）
const SOFTWARE = [
  { name: '剪映', value: 100, level: '精通' },
  { name: 'DaVinci Resolve', value: 80, level: '非常熟练' },
  { name: 'Lightroom', value: 70, level: '熟练' },
  { name: 'Premiere Pro', value: 50, level: '熟练' },
  { name: 'Photoshop', value: 20, level: '基础' },
]

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">
            SKILLS<span className="cn">专业能力</span>
          </h2>
        </Reveal>

        <div className="skills__grid">
          {GROUPS.map((g, i) => (
            <Reveal key={g.title} className="skill-group" delay={i * 0.08}>
              <h3 className="skill-group__title">{g.title}</h3>
              <ul className="skill-group__tags">
                {g.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="software" delay={0.1}>
          <h3 className="software__title">Software · 软件</h3>
          <ul className="software__list">
            {SOFTWARE.map((s) => (
              <li key={s.name} className="software__row">
                <span className="software__name">{s.name}</span>
                <span className="software__pct">
                  <CountUp to={s.value} />
                  <span className="software__pct-unit">%</span>
                </span>
                <span className="software__level">{s.level}</span>
                <div className="software__bar">
                  <motion.div
                    className="software__fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.value}%` }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
