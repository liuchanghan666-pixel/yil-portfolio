import Reveal from './Reveal'
import BorderGlow from './BorderGlow'
import { glowProps } from './glow'
import { site } from '../data/site'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="section-head">
          <h2 className="section-title">
            CONTACT<span className="cn">联系我</span>
          </h2>
        </Reveal>

        <div className="contact__hero">
          <Reveal>
            <p className="contact__hero-en">LET&apos;S</p>
            <p className="contact__hero-en">MAKE SOMETHING</p>
            <p className="contact__hero-en">GOOD.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="contact__hero-cn">有项目，一起做点好的。</p>
          </Reveal>
        </div>

        <div className="contact__cards">
          <Reveal className="contact__card">
            <BorderGlow {...glowProps}>
              <div className="contact__card-inner">
                <div className="contact__wechat">
                  <img src="/contact/wechat.jpg" alt="微信二维码" loading="lazy" />
                </div>
                <div className="contact__links">
                  <div className="contact__item">
                    <span className="contact__label">电话 / TEL</span>
                    <a className="contact__phone" href={`tel:${site.phoneRaw}`}>
                      {site.phone}
                    </a>
                  </div>
                  <div className="contact__item">
                    <span className="contact__label">邮箱 / EMAIL</span>
                    <a className="contact__email" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                  </div>
                </div>
              </div>
            </BorderGlow>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
