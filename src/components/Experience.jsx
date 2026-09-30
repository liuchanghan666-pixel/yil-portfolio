import Reveal from './Reveal'
import BorderGlow from './BorderGlow'
import { glowProps } from './glow'

const DUTIES = [
  '前期客户沟通',
  '宣传片内容规划',
  '脚本框架',
  '现场拍摄',
  '人物口播引导',
  '动作与站位指导',
  '视频剪辑',
  '调色',
  '团队作品审核',
  '项目质量把控',
  '最终交付',
]

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">
            EXPERIENCE<span className="cn">工作经历</span>
          </h2>
        </Reveal>

        <Reveal className="exp">
          <BorderGlow {...glowProps}>
            <div className="exp__inner">
              <div className="exp__top">
                <div>
                  <h3 className="exp__company">小杨哥传媒有限公司</h3>
                  <p className="exp__role">核心技术负责人 · 视频制作</p>
                </div>
                <span className="exp__period">2024.04 — 2026.09</span>
              </div>

              <div className="exp__body">
                <p>
                  19 岁成为公司核心技术负责人，从 0 到 1 参与搭建内容制作团队。负责商业视频项目从前期沟通到最终交付的完整制作流程。
                </p>
                <p className="exp__highlight">不仅负责个人创作，同时承担团队制作标准和项目质量管理。</p>
              </div>

              <ul className="exp__duties">
                {DUTIES.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </BorderGlow>
        </Reveal>

        <div className="exp__types">
          <Reveal className="exp-type" delay={0.05}>
            <BorderGlow {...glowProps}>
              <div className="exp-type__inner">
                <h4>短视频项目</h4>
                <p>
                  主要负责：拍摄 / 剪辑。部分项目参与团队协作及作品审核；同时负责部分甲方口播指导、表达引导、动作指导和拍摄站位。
                </p>
              </div>
            </BorderGlow>
          </Reveal>
          <Reveal className="exp-type" delay={0.1}>
            <BorderGlow {...glowProps}>
              <div className="exp-type__inner">
                <h4>宣传片项目</h4>
                <p>
                  主要负责：前期沟通 → 内容规划 → 脚本框架 → 拍摄 → 剪辑 → 调色 → 最终交付。宣传片项目是个人主要负责和深度参与的项目类型。
                </p>
              </div>
            </BorderGlow>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
