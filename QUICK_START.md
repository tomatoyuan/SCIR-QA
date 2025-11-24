# 快速开始部署指南

## 将项目部署到 GitHub Pages

### 步骤 1: 初始化 Git 仓库（如果还没有）

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Research directions showcase system"
```

### 步骤 2: 连接到 GitHub 仓库

```bash
# 添加远程仓库
git remote add origin https://github.com/tomatoyuan/SCIR-QA.git

# 推送到主分支
git branch -M main
git push -u origin main
```

### 步骤 3: 部署到 GitHub Pages

```bash
# 构建项目
npm run build

# 部署到 gh-pages 分支
npm run deploy
```

### 步骤 4: 启用 GitHub Pages

1. 前往 https://github.com/tomatoyuan/SCIR-QA
2. 点击 **Settings** → **Pages**
3. 在 **Source** 部分：
   - 选择 **Deploy from a branch**
   - Branch: 选择 **gh-pages**
   - Folder: 选择 **/ (root)**
4. 点击 **Save**

### 步骤 5: 访问网站

等待几分钟后，您的网站将在以下地址可用：
**https://tomatoyuan.github.io/SCIR-QA/**

## 后续更新

当您更新研究数据或代码后：

```bash
# 提交更改
git add .
git commit -m "Update research data"
git push

# 重新构建和部署
npm run build
npm run deploy
```

## 注意事项

- 首次部署后，GitHub Pages 可能需要几分钟才能生效
- 如果网站无法访问，请检查 GitHub Pages 设置是否正确
- 确保 `gh-pages` 分支已成功创建并包含 `dist` 文件夹的内容

