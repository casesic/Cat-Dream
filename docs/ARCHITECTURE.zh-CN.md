# Cat Dreams 架构文档

## 概览

`Cat Dreams` 是一个基于 `Next.js`、`TypeScript` 和 `Tailwind CSS` 构建的个人网站，计划部署到 `Vercel`。

当前站点包含四个页面：

- `/`：带有个人介绍的首页
- `/blog`：博客列表页
- `/blog/[slug]`：博客详情页
- `/projects`：项目展示页

整体架构刻意保持简洁，并以内容为中心：

- 博客内容以本地 Markdown 文件形式存放在 `/posts`
- 项目内容以本地 JSON 文件形式存放在 `/data/projects.json`
- 合适的页面会采用静态生成
- 样式由 Tailwind 工具类配合少量全局样式表完成
- SEO 元数据通过 Next.js metadata API 按页面声明

这个仓库非常适合作为作品集网站、内容网站或可逐步扩展的轻量博客的基础。

## 目标

当前实现主要优化以下几点：

- 简单的本地内容管理
- 在 Vercel 上保持低部署复杂度
- 通过静态生成获得良好的性能和 SEO
- 清晰的组件边界
- 在不过早引入 CMS 的前提下，便于未来扩展

## 技术栈

- 使用 `app/` 路由的 `Next.js 14`
- `React 18`
- `TypeScript`
- `Tailwind CSS 3`
- 使用 `gray-matter` 解析 Markdown frontmatter
- 使用 `react-markdown` + `remark-gfm` 渲染文章内容

## 目录结构

```text
app/
  blog/
    [slug]/
      page.tsx
    page.tsx
  projects/
    page.tsx
  globals.css
  layout.tsx
  not-found.tsx
  page.tsx

components/
  Layout.tsx
  MDXRenderer.tsx
  PostCard.tsx
  ProjectCard.tsx

data/
  projects.json

lib/
  posts.ts

posts/
  *.md
```

## 路由模型

项目使用 Next.js 的 `app router`。

### `app/layout.tsx`

站点的全局外壳：

- 包裹所有页面
- 加载全局样式
- 注入根级元数据
- 渲染共享的 `Layout` 组件

### `app/page.tsx`

首页：

- 个人介绍
- 指向博客页和项目页的快捷链接
- 用于说明站点和作者信息的摘要卡片

### `app/blog/page.tsx`

博客列表页：

- 通过 `getAllPosts()` 读取全部文章元数据
- 渲染 `PostCard` 组件列表
- 作为静态生成的索引页

### `app/blog/[slug]/page.tsx`

博客详情页：

- 使用 `generateStaticParams()` 预构建文章路由
- 使用 `generateMetadata()` 生成每篇文章的 SEO 元数据
- 通过 `getPostBySlug(slug)` 读取单个 Markdown 文件
- 通过 `MDXRenderer` 渲染文章正文

### `app/projects/page.tsx`

项目页：

- 从 `/data/projects.json` 导入本地 JSON 数据
- 渲染 `ProjectCard` 列表

### `app/not-found.tsx`

用于处理不存在路由或未知博客 slug 的自定义 404 页面。

## 数据架构

### 博客数据

博客内容存放在 `/posts` 内的 Markdown 文件中。

每个文件都应包含如下结构的 frontmatter：

```md
---
title: "文章标题"
date: "2026-04-10"
summary: "简短摘要"
---
```

当前解析器实现位于 `lib/posts.ts`。

#### `getAllPosts()`

职责：

- 读取 `/posts` 下所有 `.md` 文件
- 使用 `gray-matter` 解析 frontmatter
- 将文件映射为 `PostMeta`
- 按日期倒序排序文章

使用位置：

- `/blog`
- `/blog/[slug]` 中的 `generateStaticParams()`

#### `getPostBySlug(slug)`

职责：

- 读取 `/posts/${slug}.md`
- 解析 frontmatter 和 Markdown 正文
- 返回完整文章内容
- 如果文件不存在则返回 `null`

使用位置：

- `/blog/[slug]`
- 每篇文章的元数据生成逻辑

### 项目数据

项目数据目前存放在 `/data/projects.json`。

每个项目对象包含：

- `name`
- `description`
- `stack`
- `link`

当前故意保持为本地、扁平的数据结构。后续可以迁移到：

- CMS
- 数据库
- 远程 API
- Markdown 或 MDX 文件，以支持更丰富的项目详情页

## 渲染流程

### 博客列表流程

1. Next.js 渲染 `/blog`
2. `getAllPosts()` 在构建阶段读取本地 Markdown 文件
3. 从 frontmatter 提取元数据
4. `PostCard` 将每一项渲染为预览卡片

### 博客详情流程

1. `generateStaticParams()` 在构建阶段枚举所有有效 slug
2. Next.js 预渲染 `/blog/[slug]` 页面
3. `getPostBySlug()` 加载完整 Markdown 内容
4. `MDXRenderer` 将 Markdown 转换为由 React 渲染的 HTML
5. `generateMetadata()` 根据文章元数据生成 SEO 标签

### 项目页流程

1. `/projects` 导入本地 JSON 文件
2. 页面将每条记录映射为 `ProjectCard`
3. 最终结果以静态方式渲染

## 组件职责

### `components/Layout.tsx`

站点级布局外壳：

- 顶部导航
- 页面容器
- 页脚
- 共享的间距与页面框架

该组件由根级的 `app/layout.tsx` 使用。

### `components/PostCard.tsx`

用于博客列表页，展示：

- 文章日期
- 文章标题
- 文章摘要
- 跳转到详情页的链接

### `components/ProjectCard.tsx`

用于项目页，展示：

- 项目名称
- 项目描述
- 技术栈标签
- 外部链接

### `components/MDXRenderer.tsx`

尽管组件名叫 `MDXRenderer`，但当前实现渲染的是 Markdown，而不是完整的 MDX 执行能力。

当前职责：

- 通过 `react-markdown` 渲染 Markdown 正文
- 通过 `remark-gfm` 启用 GitHub Flavored Markdown

重要说明：

- 组件名虽然是 `MDXRenderer`，但当前并不会编译带有嵌入式 JSX 组件的 MDX 语法
- 如果后续需要真正的 MDX 支持，这个组件会是最自然的扩展位置

## 样式系统

样式主要通过以下方式处理：

- 在页面和组件文件中使用 Tailwind 工具类
- 通过 `app/globals.css` 提供全站基础样式和正文排版格式

当前视觉风格：

- 深色背景配合暖橙色强调色
- 柔和米白正文而不是纯白
- 大圆角、轻边框、弱阴影或无阴影卡片
- 简洁无衬线字体与充足留白
- 面向博客内容的自定义 prose 样式

这种做法让大部分样式与组件就近放置，同时保留少量可复用的全局文本规则。

## SEO 策略

SEO 通过 Next.js metadata API 实现。

### 根级元数据

定义在 `app/layout.tsx` 中：

- 站点标题模板
- 基础描述
- 关键词
- Open Graph 默认值
- Twitter 卡片默认值

### 页面级元数据

定义在：

- `app/page.tsx`
- `app/blog/page.tsx`
- `app/projects/page.tsx`
- `app/blog/[slug]/page.tsx`

文章页面会根据文章 frontmatter 动态生成元数据：

- 标题
- 描述
- 类文章的 Open Graph 字段

## 静态生成策略

整个站点围绕静态生成构建。

当前行为：

- 首页是静态的
- 博客索引页是静态的
- 博客详情页会根据文件 slug 预渲染
- 项目页是静态的

这与 Vercel 非常契合，因为它具备：

- 快速的边缘分发
- 极低的后端复杂度
- 可预测的 SEO 输出
- 通过重新构建捕捉内容变化

## 部署说明

目标平台是 `Vercel`。

预期部署模型：

1. 将仓库推送到 Git 提供商
2. 在 Vercel 中导入项目
3. Vercel 执行 `npm install` 和 `npm run build`
4. 站点以静态生成的 Next.js 应用形式部署

## 如何运行

### 本地开发

首次运行时，先安装依赖：

```bash
npm install
```

启动本地开发服务器：

```bash
npm run dev
```

启动后，默认可在 `http://localhost:3000` 访问站点。

### 本地生产构建

如果需要验证生产构建，可以运行：

```bash
npm run build
```

构建完成后，可以用以下命令启动生产服务：

```bash
npm run start
```

### 运行说明

- `npm run dev` 用于本地开发，支持热更新
- `npm run build` 用于生成生产构建结果
- `npm run start` 用于启动已经构建好的生产版站点
- 如果在 Windows 的 `exFAT` 盘符上本地构建失败，优先将仓库移动到 `NTFS` 磁盘后再验证 `npm run build`

## 内容更新流程

### 新增一篇博客文章

1. 在 `/posts` 中创建新的 Markdown 文件
2. 添加 `title`、`date` 和 `summary` frontmatter
3. 用 Markdown 编写正文
4. 重新构建或重新部署

### 新增一个项目

1. 打开 `/data/projects.json`
2. 追加一个新的项目对象
3. 重新构建或重新部署

## 推荐的下一步扩展

这些是最自然的后续改进方向。

### 内容能力

- 为博客文章增加标签或分类
- 为 `/blog` 添加分页
- 上一篇 / 下一篇文章导航
- 预计阅读时长
- 代码块语法高亮
- RSS feed
- sitemap 与 robots 配置

### SEO 与分享

- canonical URL
- 自动生成 OG 图片
- 为文章和项目添加结构化数据
- 为真实生产域名配置更合适的 `metadataBase`

### 写作体验改进

- 真正的 MDX 支持
- 在文章中复用内容组件
- 草稿支持
- 使用 `zod` 做内容校验

### 项目模块扩展

- 项目详情页，例如 `/projects/[slug]`
- 截图和封面图
- 精选项目支持
- GitHub 链接与演示链接分离

### 站点体验

- 深色模式
- 搜索
- 数据分析
- 联系页面
- Newsletter 订阅

## 后续开发建议约定

为了保持代码库一致性，后续修改通常应遵循以下规则：

- 共享 UI 放在 `/components`
- 构建期数据辅助函数放在 `/lib`
- 原始内容放在 `/posts` 和 `/data`
- 除非出现明确的动态需求，否则优先使用静态生成
- 新增顶层页面时同步补充页面元数据
- 将卡片式摘要 UI 与完整详情渲染保持分离

## 给新对话的快速上下文

如果未来需要快速介绍项目，下面这段是最简洁且准确的交接说明：

`Cat Dreams` 是一个部署到 Vercel 的 Next.js `app router` 个人网站。它包含 `/`、`/blog`、`/blog/[slug]` 和 `/projects`。博客文章以本地 Markdown 文件形式存放在 `/posts` 中，并通过 `lib/posts.ts` 使用 `gray-matter` 解析。项目数据以本地 JSON 形式存放在 `/data/projects.json`。共享 UI 位于 `/components`。样式使用 Tailwind 和 `app/globals.css`。SEO 元数据通过 Next.js metadata API 按页面配置。当前的 `MDXRenderer` 实际渲染的是 Markdown，而不是真正的 MDX。如果在当前 Windows 环境的 `exFAT` 磁盘上进行本地生产构建，可能会失败；但同一项目在 `NTFS` 上可成功构建，因此应用本身没有问题。

## 文档维护

当以下任一内容发生变化时，应更新本文档：

- 新增或删除路由
- 数据源发生变化
- 渲染策略发生变化
- 部署假设发生变化
- 运行方式发生变化
- Markdown 渲染升级为真正的 MDX
- 引入新的重要子系统
