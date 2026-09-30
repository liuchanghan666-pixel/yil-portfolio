import Reveal from './Reveal'

const GEAR = ['Sony A7M4', 'Sony FX3', 'DJI RS 4 Pro', 'DJI Mavic 4 Pro', 'DJI Pocket 3']

// 设备：小模块，不做重点展示。
export default function Equipment() {
  return (
    <section className="equipment" aria-label="设备">
      <div className="container">
        <Reveal className="equipment__inner">
          <span className="equipment__label">Gear · 设备</span>
          <div className="equipment__items">
            {GEAR.map((g) => (
              <span key={g} className="equipment__item">
                {g}
              </span>
            ))}
          </div>
          <p className="equipment__note">以上为过去商业项目中使用过的设备，目前个人暂无固定持有摄影设备。</p>
        </Reveal>
      </div>
    </section>
  )
}
