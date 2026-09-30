import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { scrollToId } from '../lib/scroll'

const LINKS = [
  { label: '首页', href: 'home' },
  { label: '作品', href: 'works' },
  { label: '关于', href: 'about' },
  { label: '经历', href: 'experience' },
  { label: '联系', href: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 移动端菜单打开时锁定滚动
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (e, href) => {
    e.preventDefault()
    setOpen(false)
    scrollToId(href)
  }

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <a href="#home" className="nav__brand" onClick={(e) => go(e, 'home')}>
        {site.brand}
      </a>

      <nav className="nav__links">
        {LINKS.map((l) => (
          <a key={l.href} href={`#${l.href}`} onClick={(e) => go(e, l.href)}>
            {l.label}
          </a>
        ))}
      </nav>

      <button
        className={`nav__burger ${open ? 'is-open' : ''}`}
        aria-label="菜单"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
      </button>

      <div className={`nav__menu ${open ? 'is-open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={`#${l.href}`} onClick={(e) => go(e, l.href)}>
            {l.label}
          </a>
        ))}
      </div>
    </header>
  )
}
