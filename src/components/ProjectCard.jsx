import { motion } from 'framer-motion'
import PlaceholderCover from './PlaceholderCover'

// 通用项目卡片：封面 + 标题 + 说明（不含年份）。
// project.video 有值 → 卡片可点击，弹窗播放（onOpen 传入当前项目）。
export default function ProjectCard({ project, index, feature = false, onOpen }) {
  const playable = !!project.video
  return (
    <motion.article
      className={`project-card ${feature ? 'project-card--feature' : ''}`}
      data-cursor={playable ? 'view' : undefined}
      onClick={playable ? () => onOpen(project) : undefined}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6% 0px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-card__media">
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : project.video ? (
          <video src={project.video} muted playsInline preload="metadata" />
        ) : (
          <PlaceholderCover word={project.title} index={index} />
        )}
        {playable && (
          <span className="project-card__play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </span>
        )}
        <div className="project-card__overlay" />
      </div>

      <div className="project-card__info">
        <h3 className="project-card__title">{project.title}</h3>
        {project.description && <p className="project-card__desc">{project.description}</p>}
      </div>
    </motion.article>
  )
}
