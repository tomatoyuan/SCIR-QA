# 部署说明 / Deployment Guide

## GitHub Pages 部署步骤

### 1. 仓库配置

项目已配置为部署到 `SCIR-QA` 仓库。配置文件如下：

**vite.config.ts**
```typescript
base: '/SCIR-QA/', // GitHub Pages base path
```

**src/App.tsx**
```typescript
<BrowserRouter basename="/SCIR-QA">
```

### 2. 构建和部署

```bash
# 安装依赖（如果还没有）
npm install

# 构建项目
npm run build

# 部署到 GitHub Pages
npm run deploy
```

### 3. 启用 GitHub Pages

1. 前往您的 GitHub 仓库
2. 点击 **Settings** → **Pages**
3. 在 **Source** 部分，选择 **Deploy from a branch**
4. 选择分支：**gh-pages**
5. 选择文件夹：**/ (root)**
6. 点击 **Save**

### 4. 访问网站

部署完成后，您的网站将在以下地址可用：
```
https://tomatoyuan.github.io/SCIR-QA/
```

## 本地开发

```bash
# 启动开发服务器
npm run dev

# 访问 http://localhost:5173
```

## 更新研究数据

编辑 `src/data/researchData.ts` 文件来更新研究方向、研究点、论文和demo信息。

修改后需要重新构建和部署：
```bash
npm run build
npm run deploy
```

