// 占位封面：当数据里 image 留空时显示。
// 填了真实图片路径后会自动换成真实图。
const TONES = ['ph-cover--0', 'ph-cover--1', 'ph-cover--2']

export default function PlaceholderCover({ word, index }) {
  return (
    <div className={`ph-cover ${TONES[index % 3]}`} aria-hidden="true">
      <span className="ph-cover__word">{word}</span>
    </div>
  )
}
