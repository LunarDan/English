# English Learning

一个英语学习项目，当前包含前端页面、后端服务和公共包。现阶段已完成 Home 页面和词库页面的静态搭建。

## 项目结构

```text
english/
  apps/web        # Vue 前端应用
  server          # NestJS 后端服务
  packages        # 公共包
```

## 技术栈

- Vue 3 + Vite
- TypeScript
- Element Plus
- Three.js / GSAP
- NestJS
- Prisma
- pnpm workspace

## 安装依赖

```bash
pnpm install
```

## 本地运行

启动前端：

```bash
pnpm run web
```

启动后端：

```bash
pnpm run server
```

同时启动前端和后端：

```bash
pnpm run all
```