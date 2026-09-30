import Reveal from './Reveal'
import BorderGlow from './BorderGlow'
import { glowProps } from './glow'

const KEYWORDS = [
  { title: '热爱', desc: '把喜欢的事情变成工作。' },
  { title: '成就感', desc: '从一个想法到最终成片。' },
  { title: '成长', desc: '不断复盘、修正，再做得更好。' },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">
            ABOUT<span className="cn">关于我</span>
          </h2>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__lead">
            <p className="about__lead-cn">我是一名来自湖南长沙的视频创作者。</p>
            <p className="about__lead-en">Commercial video creator based in Changsha.</p>
          </Reveal>

          <Reveal className="about__body" delay={0.08}>
            <div className="about__facts">
              <span className="about__fact"><em>姓名</em>易子力</span>
              <span className="about__fact"><em>出生</em>2006 年</span>
              <span className="about__fact"><em>性别</em>男</span>
              <span className="about__fact"><em>籍贯</em>湖南邵阳</span>
              <span className="about__fact"><em>现居</em>长沙</span>
            </div>
            <p>
              从小学开始接触影像创作，初中开始自学视频剪辑，高中进入全媒体专业后正式系统学习拍摄与视频制作。17
              岁开始进入社会，参与自由职业拍摄与商业项目实践。
            </p>
            <p>
              2024 年 4 月 17 日正式进入传媒行业工作。工作期间，19 岁成为传媒公司核心技术负责人，从 0 到 1
              参与搭建内容制作团队，主导完成数十个商业客户的视频项目。
            </p>
            <p>
              目前主要专注于商业视频领域，熟悉从前期沟通、内容策划、脚本框架、现场拍摄、人物引导，到后期剪辑、调色和最终交付的完整流程。
            </p>
          </Reveal>
        </div>

        <div className="about__keywords">
          {KEYWORDS.map((k, i) => (
            <Reveal key={k.title} className="keyword" delay={i * 0.08}>
              <BorderGlow {...glowProps}>
                <div className="keyword__body">
                  <h3>{k.title}</h3>
                  <p>{k.desc}</p>
                </div>
              </BorderGlow>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
