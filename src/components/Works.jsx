import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import CircularGallery from './CircularGallery'
import VideoModal from './VideoModal'
import { filmWorks, clientWall, autoWorks, carPhotos, personalWorks } from '../data/works'

function SubHead({ en, title, count }) {
  return (
    <Reveal className="work-sub__head">
      <span className="work-sub__en">{en}</span>
      <h3 className="work-sub__title">{title}</h3>
      {count != null && <span className="work-sub__count">{count}</span>}
    </Reveal>
  )
}

export default function Works() {
  const [active, setActive] = useState(null)

  return (
    <section className="section works" id="works">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">
            WORKS<span className="cn">作品</span>
          </h2>
          <p className="section-sub">精选代表作品，按类别浏览。</p>
        </Reveal>

        {/* 宣传片案例 */}
        <div className="work-sub">
          <SubHead en="Film" title="宣传片案例" count={`${filmWorks.length} 部`} />
          <div className="film-grid">
            {filmWorks.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} feature={i === 0} onOpen={setActive} />
            ))}
          </div>
        </div>

        {/* 短视频项目 —— 合作客户墙 */}
        <div className="work-sub">
          <SubHead en="Clients" title="短视频项目" count={`${clientWall.length} 个客户`} />
          <div className="client-wall">
            {clientWall.map((c, i) => (
              <Reveal key={c.id} className="client" delay={i * 0.03}>
                <div className="client__media">
                  {c.image ? (
                    <img src={c.image} alt={c.name} loading="lazy" />
                  ) : (
                    <span className="client__ph">{c.name}</span>
                  )}
                </div>
                <div className="client__name">{c.name}</div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 汽车动态 + 静态展示（纯影像） */}
        <div className="work-sub">
          <SubHead en="Auto" title="汽车动态 + 静态展示" count={`${autoWorks.length} 条`} />
          <div className="photo-grid">
            {autoWorks.map((p, i) => {
              const playable = !!p.video
              return (
                <Reveal key={p.id} className="photo photo--c" delay={i * 0.04}>
                  <div
                    className="photo__media"
                    data-cursor={playable ? 'view' : undefined}
                    onClick={playable ? () => setActive(p) : undefined}
                  >
                    {p.image ? (
                      <img src={p.image} alt="" loading="lazy" />
                    ) : p.video ? (
                      <video src={p.video} muted playsInline preload="metadata" />
                    ) : (
                      <span className="photo__ph">待补充</span>
                    )}
                    {playable && (
                      <span className="photo__play" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                          <path d="M8 5v14l11-7z" fill="currentColor" />
                        </svg>
                      </span>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* 摄影作品（3D 环形画廊） */}
        <div className="work-sub">
          <SubHead en="Photography" title="摄影作品" />
          <div className="photo-carousel">
            <CircularGallery
              items={carPhotos}
              bend={2}
              textColor="#ffffff"
              borderRadius={0.06}
              scrollEase={0.02}
              font="bold 30px Archivo"
              scrollSpeed={1.9}
            />
          </div>
        </div>

        {/* 个人作品 */}
        <div className="work-sub">
          <SubHead en="Personal" title="个人作品" count={`${personalWorks.length} 条`} />
          <div className="photo-grid">
            {personalWorks.map((p, i) => {
              const playable = !!p.video
              return (
                <Reveal key={p.id} className="photo photo--wide" delay={i * 0.03}>
                  <div
                    className="photo__media"
                    data-cursor={playable ? 'view' : undefined}
                    onClick={playable ? () => setActive(p) : undefined}
                  >
                    {p.image ? (
                      <img src={p.image} alt="" loading="lazy" />
                    ) : p.video ? (
                      <video src={p.video} muted playsInline preload="metadata" />
                    ) : (
                      <span className="photo__ph">待补充</span>
                    )}
                    {playable && (
                      <span className="photo__play" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                          <path d="M8 5v14l11-7z" fill="currentColor" />
                        </svg>
                      </span>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {active && <VideoModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
