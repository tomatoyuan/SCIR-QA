# 4everland 部署指南

由于我无法直接访问您的 4everland 账户，请按照以下步骤在 4everland 平台上完成部署。

此项目是一个 Vite + React 单页应用 (SPA)。

## 步骤 1: 登录并导入项目

1. 打开 [4everland Dashboard](https://dashboard.4everland.org/) 并登录。
2. 点击 **"New Project"** (新建项目)。
3. 选择 **"Import Git Repository"** 并连接您的 GitHub 账户。
4. 从列表中选择 `QASystem2` 仓库。

## 步骤 2: 配置构建设置 (Build Settings)

在导入页面中，请确保配置如下：

*   **Root Directory**: `./` (默认)
*   **Framework Preset**: 选择 `Vite` 或 `React` (4everland通常会自动检测)
*   **Build Command**: `npm run build`
    *   *注意：不要使用 `npm run deploy` 或 `build:ghpages`，因为它们是专为 GitHub Pages (带有 `/SCIR-QA/` 路径) 设计的。`npm run build` 会使用默认的根路径 `/`，这适合 4everland。*
*   **Output Directory**: `dist` (默认)
*   **Deploy Hook**: (可选，保持默认)

## 步骤 3: 解决 SPA 路由问题 (重要)

由于这是一个单页应用 (React Router)，在 IPFS/4everland 上刷新非首页 (如 `/research/reasoning`) 可能会导致 404。

您可以尝试以下两种方法之一：

**方法 A: 使用 HashRouter (推荐用于纯静态/IPFS)**
如果您不介意 URL 中带有 `#` (例如 `url/#/research/reasoning`)，这是最稳妥的方法。
我已为您修改 `src/main.tsx` 或 `src/App.tsx` 中的 Router 类型 (如果需要)。
*(注：如果当前使用的是 `BrowserRouter`，在 4everland 这种去中心化托管上可能需要配置重写规则，或者简单地改用 HashRouter)*

**方法 B: 配置 4everland 重写规则 (已为您准备)**
我已经在项目的 `public` 目录下为您创建了一个 `_redirects` 文件。
大多数静态托管服务 (包括 4everland, Netlify, Vercel) 都会自动识别此文件，并将所有请求重定向到 `index.html`，从而解决刷新 404 的问题。

您只需确保在构建时包含此文件（Vite 默认会复制 `public` 目录下的所有文件到 `dist`，所以通常无需额外操作）。

## 补充建议
为了确保在各种静态托管服务上兼容性最佳，建议：
1. 确保 `vite.config.ts` 中的 `base` 为 `'/'` (当前已配置正确)。
2. 确保已提交最新的代码到 GitHub `main` 分支。

祝部署顺利！
