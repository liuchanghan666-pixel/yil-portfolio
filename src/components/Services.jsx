import Reveal from './Reveal'
import BorderGlow from './BorderGlow'
import { glowProps } from './glow'

const SERVICES = [
  { title: '商业宣传片', desc: '企业、品牌、酒店、产品等商业宣传视频。' },
  { title: '商业短视频', desc: '品牌短视频、人物短视频、汽车短视频等。' },
  { title: '视频拍摄', desc: '人物、产品、汽车、企业环境等商业影像拍摄。' },
  { title: '后期制作', desc: '剪辑、调色、节奏设计、字幕包装及成片优化。' },
]

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">
            SERVICES<span className="cn">服务</span>
          </h2>
        </Reveal>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} className="service" delay={i * 0.06}>
              <BorderGlow {...glowProps}>
                <div className="service__inner">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </BorderGlow>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
