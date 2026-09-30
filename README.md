# YIL · 易子力 — 个人作品集

摄影 / 视频剪辑 / 商业视频创作者的个人职业名片网站。

## 技术栈

- **Vite + React 18**（组件化、易维护）
- **Framer Motion**（滚动渐入、Hero 文字逐字揭示、视差）
- **Lenis**（平滑滚动）
- **手写 CSS**（一套 CSS 变量设计系统，黑 + 米白 + 深灰）

## 本地运行

```bash
npm install     # 首次安装依赖
npm run dev     # 开发预览（终端会给出本地地址，浏览器打开）
npm run build   # 打包到 dist/
npm run preview # 预览打包结果
```

## 项目结构

```
yil-portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                 # 入口
    ├── App.jsx                  # 页面骨架 + 平滑滚动
    ├── styles/global.css        # 设计系统（颜色/字体/所有样式）
    ├── lib/scroll.js            # 平滑滚动工具
    ├── data/
    │   ├── site.js              # 名字/职业/联系方式（改这里全局生效）
    │   └── works.js             # 作品数据（6 分区：宣传片/客户墙/汽车/摄影/口播/个人）
    └── components/
        ├── Cursor.jsx           # 自定义光标（可整体关闭）
        ├── Navbar.jsx           # 导航
        ├── Hero.jsx             # 首屏
        ├── Works.jsx            # 作品区（6 个分区）
        ├── ProjectCard.jsx      # 带标题的作品卡
        ├── PlaceholderCover.jsx # 封面占位（没图时显示）
        ├── CountUp.jsx          # 百分比数字增长动画
        ├── About.jsx            # 关于我 + 三个关键词
        ├── Skills.jsx           # 专业能力 + 软件
        ├── Equipment.jsx        # 设备小模块
        ├── Experience.jsx       # 工作经历 + 项目能力说明
        ├── Services.jsx         # 服务
        ├── Contact.jsx          # 联系我
        └── Footer.jsx           # 页脚
```

## 怎么替换作品图片和视频

所有作品数据在 `src/data/works.js`，分 6 组。图片 / 视频放进 `public/works/`，数据里只写路径。

| 分组 | 变量 | 说明 |
| --- | --- | --- |
| 宣传片案例 | `filmWorks` | 完整卡片，恒隆家电置顶 |
| 短视频项目 | `clientWall` | 客户截图墙（image 留空显示客户名占位） |
| 汽车动态+静态 | `autoWorks` | 车辆视频卡片 |
| 车辆摄影 | `carPhotos` | 纯图片 |
| 口播作品 | `talkWorks` | 1～2 条代表 |
| 个人作品 | `personalWorks` | 个人影像 |

替换宣传片封面：

```js
{ id: 'henglong', title: '恒隆家电', description: '产品 / 品牌宣传片',
  image: '/works/henglong.jpg',   // 填了自动替换占位
  video: '/works/henglong.mp4' }  // 视频（可选）
```

客户墙截图（短视频项目）：

```js
{ id: 'yaer', name: '亚尔五金集团 · 亚尔利群', image: '/works/yaer.jpg' }
```

填了 `image` 自动换真实图，没填继续显示占位。

## 怎么替换 Hero 背景视频

打开 `src/components/Hero.jsx`，取消 `<video>` 注释，删掉 `.hero__bg` 那一块即可。视频要求：自动播放 / 静音 / 循环 / 无控件（已默认配好）。

## 常见小改动

- **换名字 / 电话 / 职业**：改 `src/data/site.js`。
- **换颜色 / 字体**：改 `src/styles/global.css` 顶部的 `:root` 变量。
- **关掉自定义光标**：删掉 `src/App.jsx` 里的 `<Cursor />`。
- **关掉平滑滚动**：删掉 `src/App.jsx` 里的 Lenis `useEffect`。

## 下一步最值得优化（按优先级）

1. **作品点击 → 弹窗播放**：短片本地 MP4、宣传片接 B 站嵌入（数据里 `video` 字段已预留）。
2. **真实素材**：替换封面图、Hero 视频、加 B 站链接。
3. **从 React Bits 挑组件增强**：Hero 文字动画、作品卡、光标、滚动动画都做成了独立组件，方便逐个替换。
4. **部署上线**：`npm run build` 后把 `dist/` 部署到 Vercel / Netlify / 云服务器。
