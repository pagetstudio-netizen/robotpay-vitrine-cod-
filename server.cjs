const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const distPath = path.join(__dirname, "dist");

app.use((req, res, next) => {
  const pathname = req.path.replace(/\/+$/, "") || "/";
  let destination = null;
  const countryMatch = pathname.match(/^\/countries\/([^/]+)$/);
  const operatorMatch = pathname.match(/^\/operators\/([^/]+)$/);
  const featureMatch = pathname.match(/^\/features\/([^/]+)$/);

  if (pathname === "/about") destination = "/a-propos/";
  else if (pathname === "/countries") destination = "/pays/";
  else if (pathname === "/operators") destination = "/operateurs/";
  else if (pathname === "/contact" && !req.path.endsWith("/")) destination = "/contact/";
  else if (countryMatch) destination = `/pays/${countryMatch[1]}/`;
  else if (operatorMatch) destination = `/operateurs/${operatorMatch[1]}/`;
  else if (featureMatch) destination = `/services/${featureMatch[1]}/`;

  if (!destination) return next();

  const queryIndex = req.originalUrl.indexOf("?");
  const query = queryIndex >= 0 ? req.originalUrl.slice(queryIndex) : "";
  return res.redirect(301, `${destination}${query}`);
});

app.use(express.static(distPath));

app.use((req, res) => {
  res.status(404).type("text/plain").send("Page not found");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`RobotPay running on port ${PORT}`);
});
