# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

`benken-frontend` is the frontend for kodebenken.no, a personal portfolio/project site. It's a React 19 + TypeScript + Vite single-page app using React Router for client-side routing, with Three.js used for interactive 3D project demos (e.g. the cube demo under `/projects/cube`).

## Commands

- `npm run dev` — start Vite dev server (port 5173, `host: true`, allowed host `kodebenken.no`)
- `npm run build` — type-check via `tsc -b` then build with Vite
- `npm run lint` — run ESLint over the project
- `npm run preview` — preview the production build (port 5173)

There is no test suite configured in this repo.

### Docker

- `docker build -t myapp .` then `docker run` — the Dockerfile installs deps and runs `npm run dev`, exposing port 5173. This mirrors what `docker compose up --build` does per `README.Docker.md`.

## Architecture

- **Routing**: `src/App.tsx` defines all routes via `react-router-dom`'s `<Routes>`/`<Route>`. `src/main.tsx` wraps the app in `<BrowserRouter>`. New pages must be added both as a file under `src/pages/` and as a `<Route>` entry in `App.tsx`.
- **Pages vs components**: `src/pages/` holds top-level route components (`HomePage`, `AboutPage`, `ProjectsPage`, `CubeProjectPage`). `src/components/` holds reusable/embedded pieces (`NavBarComponent`, `ProjectList`, `CubeComponent`).
- **Project listing pattern**: `ProjectsPage` renders `ProjectList`, which is a hardcoded `<ul>` of `NavLink`s to individual project pages/routes (e.g. `/projects/cube`). Adding a new project means: create a page in `src/pages/`, add its route in `App.tsx`, and add a `NavLink` entry in `ProjectList.tsx`.
- **Three.js integration**: Three.js scenes are encapsulated in components under `src/components/` (see `CubeComponent.tsx`) using the pattern: create scene/camera/renderer in a `useEffect`, append `renderer.domElement` to a `ref`-tracked container div, drive the render loop with `requestAnimationFrame` stored in a ref, and dispose of the renderer/geometry/material plus cancel the animation frame and detach the DOM element in the `useEffect` cleanup function. Follow this pattern for new Three.js-based project pages.
- **Styling**: global styles in `src/index.css` and `src/App.css`; no CSS modules or styling library is used.

## Deployment

- `.github/workflows/google.yml` builds a Docker image on push to `main`, pushes it to Google Artifact Registry, and updates the `deployment-1` GKE deployment via `kubectl set image`. This runs automatically on merge to `main` — there is no separate staging step.
