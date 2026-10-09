# RobotPay

Plesk deployment instructions: see [PLESK_DEPLOYMENT.md](./PLESK_DEPLOYMENT.md).

## Run locally

```sh
npm ci
npm run dev
```

## Build and start production

```sh
npm ci
npm run build
npm start
```

Production requires Node.js `20.19+` or `22.12+`. The server serves generated files from `dist/` and listens on the port provided by the host.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
