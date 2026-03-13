# Fitness Tracker

A simple personal fitness tracker web app with React, TypeScript, and Material UI. Write down your workouts and track your progress.

## Features

- Can add a new activity, duration and way to add already completed tasks
- Activities with the ability to mark as done or delete them
- Can see how minutes we worked out for and home much time is left
- Have a page which give breakdown by percentage of activities done

# Getting Started

## Prerequisites

- Node.js
- npm

## Install

```bash
git clone https://github.com/Mate-ber/fitnessapp.git
cd fitnessapp
npm install
```

## Run

```bash
npm run dev
```

## Check and Use

Open http://localhost:5173

# CI/CD

GitHub Actions runs on every push via .github/workflows/verify-and-deploy.yml:

1. Verify — runs typecheck, ESLint, Prettier, and depcheck in parallel
2. Test — runs the full Vitest suite
3. Build — production Vite build
4. Deploy — deploys to GitHub Pages
