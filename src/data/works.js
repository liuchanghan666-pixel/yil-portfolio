// ============ 作品数据（分区分组） ============
// 图片 / 视频放进 public/works/ 目录，这里只写相对路径。
// image 留空 → 显示占位封面；video 留空 → 暂无视频（下一阶段接播放）。

// —— 宣传片案例（完整卡片展示，恒隆家电置顶，7 部）——
export const filmWorks = [
  { id: 'henglong', title: '恒隆家电', description: '产品 / 品牌宣传片', image: '/works/henglong.jpg', video: '/works/henglong.mp4' },
  { id: 'qidoudou', title: '柒抖豆臭豆腐', description: '品牌宣传片', image: '/works/qidoudou.jpg', video: '/works/qidoudou.mp4' },
  { id: 'huadeng', title: '华灯初上酒店', description: '酒店宣传片', image: '/works/huadeng.jpg', video: '/works/huadeng.mp4' },
  { id: 'paopao', title: '泡泡海洋酒店', description: '酒店宣传片', image: '/works/paopao.jpg', video: '/works/paopao.mp4' },
  { id: 'kunyue', title: '鲲跃国茶馆', description: '品牌形象宣传片', image: '/works/kunyue.jpg', video: '/works/kunyue.mp4' },
]

// —— 短视频项目（合作客户墙，轻量展示）——
// 之后把甲方截图放进 public/works/，在 image 填路径即可。
export const clientWall = [
  { id: 'xiaoyangge', name: '长沙小杨哥二手车', image: '/works/client-xiaoyangge.jpg' },
  { id: 'jiadi', name: '长沙佳弟撩车', image: '/works/client-jiadi.jpg' },
  { id: 'xiaozhang', name: '小张的奥德赛', image: '/works/client-xiaozhang.jpg' },
  { id: 'feifei', name: '费费的轿跑', image: '/works/client-feifei.jpg' },
  { id: 'yaer', name: '亚尔五金集团 · 亚尔利群', image: '/works/client-yaer.jpg' },
  { id: 'fujia', name: '副驾的木木', image: '/works/client-fujia.jpg' },
  { id: 'chenshuting', name: '长沙陈书婷笑笑二手车', image: '/works/client-chenshuting.jpg' },
  { id: 'fansheng', name: '长沙繁盛二手车', image: '/works/client-fansheng.jpg' },
  { id: 'shufuge', name: '长沙舒服哥二手车 / 林啦啦', image: '/works/client-shufuge.jpg' },
  { id: 'huazhijie', name: '湖南华之杰奔驰', image: '/works/client-huazhijie.jpg' },
  { id: 'huamei', name: '湖南华美奔驰', image: '/works/client-huamei.jpg' },
]

// —— 汽车动态 + 静态展示（纯影像，不显示名称）——
export const autoWorks = [
  { id: 'auto1', image: '', video: '/works/auto-1.mp4' }, // 车辆短片
  { id: 'auto2', image: '', video: '/works/auto-2.mp4' }, // 奥迪A4 动态 + 静态
  { id: 'auto3', image: '', video: '/works/auto-3.mp4' }, // 迈巴赫 静态
  { id: 'auto4', image: '', video: '/works/auto-4.mp4' }, // 高尔夫GTI 静态
]

// —— 摄影作品（3D 环形画廊；image 填真实照片路径 /works/xxx.jpg，text 填作品名）——
export const carPhotos = [
  { image: '/works/photo-01.jpg', text: 'PHOTO 01' },
  { image: '/works/photo-02.jpg', text: 'PHOTO 02' },
  { image: '/works/photo-03.jpg', text: 'PHOTO 03' },
  { image: '/works/photo-04.jpg', text: 'PHOTO 04' },
  { image: '/works/photo-05.jpg', text: 'PHOTO 05' },
  { image: '/works/photo-06.jpg', text: 'PHOTO 06' },
  { image: '/works/photo-07.jpg', text: 'PHOTO 07' },
]

// —— 个人作品（个人创作 / 影像）——
export const personalWorks = [
  { id: 'p1', image: '', video: '/works/personal-1.mp4' },
  { id: 'p2', image: '', video: '/works/personal-2.mp4' },
  { id: 'p3', image: '/works/personal-3.jpg', video: '/works/personal-3.mp4' },
  { id: 'p4', image: '', video: '/works/personal-4.mp4' },
]
