import { useEffect } from 'react'
import { motion } from 'framer-motion'

// 视频播放弹窗：点击作品卡片打开，全屏遮罩 + 居中视频。
export default function VideoModal({ project, onClose }) {
  useEffect(() => {
    const lenis = window.__lenis
    if (lenis) lenis.stop()
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      if (lenis) lenis.start()
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <motion.div
      className="video-modal"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="video-modal__box"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.92, y: 24 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 12 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <button className="video-modal__close" onClick={onClose} aria-label="关闭">
          <span aria-hidden="true">✕</span>
        </button>
        <video className="video-modal__video" src={project.video} controls autoPlay playsInline />
        {(project.title || project.description) && (
          <div className="video-modal__meta">
            {project.title && <h3 className="video-modal__title">{project.title}</h3>}
            {project.description && <p className="video-modal__desc">{project.description}</p>}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
