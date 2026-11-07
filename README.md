# A Little Diwali Magic

A personal Diwali surprise built with TanStack Start, React 19, and JavaScript. The project runs locally with Vite and uses Nitro for its Vercel production build. It currently has no external backend or environment-variable requirements.

## Run locally

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:3000` or `http://localhost:5173`.

## Build and run the production server locally

```bash
npm run build
npm start
```

## Deploy to Vercel

Push this project to a Git repository, import that repository in Vercel, and deploy. `vercel.json` identifies the app as TanStack Start; Vercel builds it through Nitro. No environment variables are needed by the current app.

For manual deployment, use `npx vercel` from the project directory. See the [TanStack Start hosting guide](https://tanstack.com/start/latest/docs/framework/react/guide/hosting) for the current Vercel setup.

## Project structure

- `src/routes/` contains the pages and server routes.
- `src/routes/__root.jsx` renders the shared HTML document and global providers.
- `src/server.js` is the TanStack Start server entry.
- `vite.config.js` configures TanStack Start, Nitro, and React.
