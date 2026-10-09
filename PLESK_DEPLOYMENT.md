# Deploy RobotPay to Plesk

This project is a Node.js application. Plesk must run `server.cjs`; do not publish it as a static-only site.

## Runtime requirements

- Node.js `20.19+` or `22.12+` (Vite 8 requirement)
- npm
- The Git checkout's application root is the folder containing `package.json` and `server.cjs`
- Startup file: `server.cjs` (or start command: `npm start`)

The production server listens on `PORT` supplied by Plesk and serves the Vite build from `dist/`.

## Configure once in Plesk

1. Connect the Plesk Git extension to the GitHub repository and deploy it to the application root.
2. Enable the Node.js application for that root; select the required Node.js version and set `server.cjs` as the startup file.
3. Configure the Git deployment action to run from the repository root after each pull:

   ```sh
   npm ci --include=dev && npm run build
   ```

   The build needs Vite from `devDependencies`; keep development dependencies installed until the build completes. If the Git extension has no post-deployment command, run this command from Plesk Terminal after “Pull + Deploy Now”.
4. Restart the Node.js application after a successful build.

`dist/` is excluded from Git, so every deployment must build it on Plesk before restarting. `npm run build` also regenerates the French and English SEO routes, sitemap, and robots file.

## After each deployment

Check these URLs on the public domain:

- `/`
- `/contact/`
- `/services/game-api/`
- `/sitemap.xml`
- `/robots.txt`

An unknown page should return HTTP 404.

The SEO canonical domain is currently set to `https://robotpay.online` in `index.html` and `scripts/generate-seo-pages.mjs`. If the Plesk public domain is different, update both values before building and deploying.
