import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <span className="footer__brand">{site.brand}</span>
          <span className="footer__tag">摄影 · 剪辑 · 商业视频</span>
          <span className="footer__loc">长沙 · 中国</span>
        </div>
        <div className="footer__bottom">© 2026 YIZILI</div>
      </div>
    </footer>
  )
}
