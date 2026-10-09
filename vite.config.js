import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const publicDir = path.resolve(process.cwd(), "public");

function serveGeneratedSeoPages() {
  const middleware = (request, response, next) => {
    let pathname;
    try {
      pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    } catch {
      return next();
    }

    const relativePath = pathname.replace(/^\/+|\/+$/g, "");
    if (!relativePath) return next();

    const normalizedPath = path.normalize(relativePath);
    if (normalizedPath.startsWith("..") || path.isAbsolute(normalizedPath)) {
      return next();
    }

    const htmlPath = path.join(publicDir, normalizedPath, "index.html");
    fs.readFile(htmlPath, (error, html) => {
      if (error) return next();

      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html; charset=utf-8");
      response.setHeader("Cache-Control", "no-store");
      response.end(html);
    });
  };

  return {
    name: "serve-generated-seo-pages",
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    }
  };
}

export default defineConfig({
  plugins: [serveGeneratedSeoPages(), react()],
  server: {
    host: "0.0.0.0",
    port: 5000,
    strictPort: true,
    allowedHosts: true
  }
});
