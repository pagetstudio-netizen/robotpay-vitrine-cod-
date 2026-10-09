import { copyFileSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { paymentMarkets, paymentOperators, operatorSlugByMethod } from "../src/data/paymentMarkets.js";
import { getSeoPath } from "../src/data/seoRoutes.js";
import { seoCopy } from "./seo-copy.mjs";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(rootDir, "public");
const siteUrl = "https://robotpay.online";
const locales = ["fr", "en"];
const featureSlugs = [
  "multi-currency-account",
  "merchant-integration",
  "payment-security",
  "game-api"
];

const contactChannels = [
  {
    key: "account",
    href: "https://t.me/geeorbotpay",
    value: "t.me/geeorbotpay"
  },
  {
    key: "sales",
    href: "https://t.me/Atfchalvt",
    value: "t.me/Atfchalvt"
  },
  {
    key: "whatsapp",
    href: "https://wa.me/639609010279",
    value: "+63 960 901 0279"
  },
  {
    key: "general",
    href: "mailto:Hello@robotpay.com",
    value: "Hello@robotpay.com"
  }
];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function absoluteUrl(route) {
  return new URL(route, siteUrl).toString();
}

function outputFile(route) {
  const cleanRoute = route.replace(/^\/+|\/+$/g, "");
  return path.join(publicDir, cleanRoute, "index.html");
}

function localizedMethod(locale, method) {
  return seoCopy[locale].paymentMethodLabels[method] || method;
}

function marketsForOperator(operator) {
  return paymentMarkets.filter((country) =>
    country.methods.some((method) => operator.methodNames.includes(method))
  );
}

function navLink(locale, page, label) {
  return `<a href="${getSeoPath(locale, page)}">${escapeHtml(label)}</a>`;
}

function contactLink(locale, label) {
  return `<a class="seo-button" href="${getSeoPath(locale, "contact")}">${escapeHtml(label)}</a>`;
}

function getRoutes(type, slug) {
  return {
    fr: getSeoPath("fr", type, slug),
    en: getSeoPath("en", type, slug)
  };
}

function pageMetadata(locale, type, entity) {
  const copy = seoCopy[locale];

  if (type === "home") return copy.home;
  if (type === "about") return copy.about;
  if (type === "contact") return copy.contact;
  if (type === "services") return copy.servicesHub;
  if (type === "countries") return copy.countries;
  if (type === "operators") return copy.operators;

  if (type === "country") {
    const name = entity.name[locale];
    return {
      title: locale === "fr"
        ? `${name} : paiements et réseaux locaux | RobotPay`
        : `${name}: local payment methods and networks | RobotPay`,
      description: locale === "fr"
        ? `Consultez les moyens de paiement répertoriés par RobotPay sur le marché ${name}, dont ${entity.methods.slice(0, 3).join(", ")}.`
        : `Review payment methods listed by RobotPay in ${name}, including ${entity.methods.slice(0, 3).join(", ")}.`,
      intro: copy.detail.countryIntro(name)
    };
  }

  if (type === "operator") {
    return {
      title: locale === "fr"
        ? `${entity.name} : pays répertoriés par RobotPay`
        : `${entity.name}: countries listed by RobotPay`,
      description: locale === "fr"
        ? `${entity.name} figure dans le répertoire RobotPay. Consultez les marchés associés et contactez l’équipe pour confirmer les détails.`
        : `${entity.name} appears in the RobotPay directory. View associated markets and contact the team to confirm details.`,
      intro: copy.detail.operatorIntro(entity.name)
    };
  }

  if (type === "feature") return copy.features[entity];
  return null;
}

function pageHeading(locale, type, entity) {
  if (type === "home") return seoCopy[locale].home.title;
  if (type === "about") return seoCopy[locale].about.title;
  if (type === "contact") return seoCopy[locale].contact.title;
  if (type === "services") return seoCopy[locale].servicesHub.title;
  if (type === "countries") return seoCopy[locale].countries.title;
  if (type === "operators") return seoCopy[locale].operators.title;
  if (type === "country") {
    return locale === "fr"
      ? `Moyens de paiement répertoriés au ${entity.name.fr}`
      : `Payment methods listed in ${entity.name.en}`;
  }
  if (type === "operator") {
    return locale === "fr"
      ? `Pays où ${entity.name} est répertorié`
      : `Countries where ${entity.name} is listed`;
  }
  return seoCopy[locale].features[entity].title;
}

function routePage(locale, type, slug) {
  if (type === "country") {
    return paymentMarkets.find((country) => country.slug === slug);
  }
  if (type === "operator") {
    return paymentOperators.find((operator) => operator.slug === slug);
  }
  if (type === "feature") {
    return seoCopy[locale].features[slug] ? slug : null;
  }
  return true;
}

function pageLinks(locale) {
  const copy = seoCopy[locale];
  return [
    ["home", copy.nav.home],
    ["about", copy.nav.about],
    ["services", copy.nav.services],
    ["countries", copy.nav.countries],
    ["operators", copy.nav.operators],
    ["contact", copy.nav.contact]
  ];
}

function renderBreadcrumbs(locale, type, entity) {
  const copy = seoCopy[locale];
  const items = [];
  const add = (label, href) => items.push({ label, href });
  add(copy.nav.home, getSeoPath(locale, "home"));

  if (type === "about") {
    add(copy.nav.about, getSeoPath(locale, "about"));
  } else if (type === "contact") {
    add(copy.nav.contact, getSeoPath(locale, "contact"));
  } else if (type === "services") {
    add(copy.nav.services, getSeoPath(locale, "services"));
  } else if (type === "countries") {
    add(copy.nav.countries, getSeoPath(locale, "countries"));
  } else if (type === "operators") {
    add(copy.nav.operators, getSeoPath(locale, "operators"));
  } else if (type === "country") {
    add(copy.nav.countries, getSeoPath(locale, "countries"));
    add(entity.name[locale], getSeoPath(locale, "country", entity.slug));
  } else if (type === "operator") {
    add(copy.nav.operators, getSeoPath(locale, "operators"));
    add(entity.name, getSeoPath(locale, "operator", entity.slug));
  } else if (type === "feature") {
    add(copy.nav.services, getSeoPath(locale, "about"));
    add(seoCopy[locale].features[entity].title, getSeoPath(locale, "feature", entity));
  }

  if (type === "home") return "";
  return `<nav class="seo-breadcrumbs" aria-label="${escapeHtml(copy.breadcrumb)}"><ol>${items.map((item, index) =>
    `<li>${index === items.length - 1 ? `<span aria-current="page">${escapeHtml(item.label)}</span>` : `<a href="${item.href}">${escapeHtml(item.label)}</a>`}</li>`
  ).join("")}</ol></nav>`;
}

function renderCountryCards(locale) {
  const copy = seoCopy[locale];
  return `<div class="seo-grid">${paymentMarkets.map((country) => `
    <article class="seo-card seo-country-card">
      <img src="/flags/${country.flagCode}.svg" width="40" height="27" alt="" loading="lazy">
      <div>
        <h2><a href="${getSeoPath(locale, "country", country.slug)}">${escapeHtml(country.name[locale])}</a></h2>
        <p>${escapeHtml(copy.labels.countryCode)}: ${escapeHtml(country.code)}</p>
        <p>${country.methods.map((method) => escapeHtml(localizedMethod(locale, method))).join(" · ")}</p>
      </div>
    </article>`).join("")}</div>`;
}

function renderOperatorCards(locale) {
  return `<div class="seo-grid">${paymentOperators.map((operator) => {
    const markets = marketsForOperator(operator);
    return `
      <article class="seo-card">
        <p class="seo-eyebrow">${escapeHtml(seoCopy[locale].labels.network)}</p>
        <h2><a href="${getSeoPath(locale, "operator", operator.slug)}">${escapeHtml(operator.name)}</a></h2>
        <p>${markets.map((market) => escapeHtml(market.name[locale])).join(", ")}</p>
      </article>`;
  }).join("")}</div>`;
}

function renderContactPage(locale) {
  const copy = seoCopy[locale].contact;
  return `
    <section class="seo-intro">
      <p class="seo-eyebrow">RobotPay</p>
      <h1>${escapeHtml(copy.title)}</h1>
      <p>${escapeHtml(copy.intro)}</p>
    </section>
    <section class="seo-grid" aria-label="${escapeHtml(copy.title)}">
      ${contactChannels.map((channel) => `
        <article class="seo-card">
          <h2>${escapeHtml(copy[channel.key])}</h2>
          <p><a href="${channel.href}"${channel.href.startsWith("https://") ? ' target="_blank" rel="noopener noreferrer"' : ""}>${escapeHtml(channel.value)}</a></p>
        </article>`).join("")}
    </section>
    <p class="seo-note">${escapeHtml(copy.closing)}</p>`;
}

function renderAboutPage(locale) {
  const copy = seoCopy[locale].about;
  return `
    <section class="seo-intro">
      <p class="seo-eyebrow">RobotPay</p>
      <h1>${escapeHtml(copy.title)}</h1>
      <p>${escapeHtml(copy.intro)}</p>
    </section>
    <section class="seo-section">
      <h2>${escapeHtml(copy.heading)}</h2>
      <p>${escapeHtml(copy.paragraph)}</p>
    </section>
    <section class="seo-section">
      <h2>${escapeHtml(copy.servicesHeading)}</h2>
      <ul class="seo-feature-list">${copy.services.map(([title, description, slug]) =>
        `<li><h3>${slug ? `<a href="${getSeoPath(locale, "feature", slug)}">${escapeHtml(title)}</a>` : escapeHtml(title)}</h3><p>${escapeHtml(description)}</p></li>`
      ).join("")}</ul>
    </section>
    <p class="seo-note">${escapeHtml(copy.closing)}</p>
    ${contactLink(locale, seoCopy[locale].labels.contactCta)}`;
}

function renderCountryPage(locale, country) {
  const copy = seoCopy[locale];
  const linkedMethods = country.methods.map((method) => {
    const operatorSlug = operatorSlugByMethod[method];
    const label = escapeHtml(localizedMethod(locale, method));
    const href = operatorSlug ? getSeoPath(locale, "operator", operatorSlug) : "";
    return `<li>${href ? `<a href="${href}">${label}</a>` : label}</li>`;
  }).join("");

  return `
    <section class="seo-intro">
      <p class="seo-eyebrow">${escapeHtml(copy.labels.availability)}</p>
      <h1>${escapeHtml(pageHeading(locale, "country", country))}</h1>
      <p>${escapeHtml(copy.detail.countryIntro(country.name[locale]))}</p>
    </section>
    <section class="seo-card seo-data-card">
      <h2>${escapeHtml(copy.labels.countryCode)}</h2>
      <p class="seo-value">${escapeHtml(country.code)}</p>
    </section>
    <section class="seo-section">
      <h2>${escapeHtml(copy.labels.methods)}</h2>
      <ul class="seo-pill-list">${linkedMethods}</ul>
    </section>
    <p class="seo-note">${escapeHtml(copy.detail.directoryNote)}</p>
    <div class="seo-actions">
      ${contactLink(locale, copy.labels.contactCta)}
      <a class="seo-secondary-link" href="${getSeoPath(locale, "countries")}">${escapeHtml(copy.labels.allMarkets)}</a>
    </div>`;
}

function renderOperatorPage(locale, operator) {
  const copy = seoCopy[locale];
  const markets = marketsForOperator(operator);
  const countryRows = markets.map((country) => {
    const methods = country.methods
      .filter((method) => operator.methodNames.includes(method))
      .map((method) => localizedMethod(locale, method))
      .join(", ");
    return `<li class="seo-card">
      <h2><a href="${getSeoPath(locale, "country", country.slug)}">${escapeHtml(country.name[locale])}</a></h2>
      <p>${escapeHtml(copy.labels.countryCode)}: ${escapeHtml(country.code)}</p>
      <p>${escapeHtml(copy.labels.methods)}: ${escapeHtml(methods)}</p>
    </li>`;
  }).join("");

  return `
    <section class="seo-intro">
      <p class="seo-eyebrow">${escapeHtml(copy.labels.network)}</p>
      <h1>${escapeHtml(pageHeading(locale, "operator", operator))}</h1>
      <p>${escapeHtml(copy.detail.operatorIntro(operator.name))}</p>
    </section>
    <section class="seo-section">
      <h2>${escapeHtml(copy.labels.markets)}</h2>
      <ul class="seo-grid seo-market-list">${countryRows}</ul>
    </section>
    <p class="seo-note">${escapeHtml(copy.detail.directoryNote)}</p>
    <div class="seo-actions">
      ${contactLink(locale, copy.labels.contactCta)}
      <a class="seo-secondary-link" href="${getSeoPath(locale, "operators")}">${escapeHtml(copy.labels.allOperators)}</a>
    </div>`;
}

function renderFeaturePage(locale, slug) {
  const feature = seoCopy[locale].features[slug];
  const gameApiImages = slug === "game-api" ? `
    <div class="seo-game-gallery">
      <figure class="seo-card">
        <img src="/seo-images/game-api/game-catalog.jpg" alt="${escapeHtml(feature.catalogAlt)}" loading="lazy">
        <figcaption>${escapeHtml(feature.catalogAlt)}</figcaption>
      </figure>
      <figure class="seo-card">
        <img src="/seo-images/game-api/game-tiles.jpg" alt="${escapeHtml(feature.gamesAlt)}" loading="lazy">
        <figcaption>${escapeHtml(feature.gamesAlt)}</figcaption>
      </figure>
    </div>` : "";
  return `
    <section class="seo-intro">
      <p class="seo-eyebrow">${escapeHtml(seoCopy[locale].nav.services)}</p>
      <h1>${escapeHtml(feature.title)}</h1>
      <p>${escapeHtml(feature.intro)}</p>
    </section>
    <section class="seo-section">
      <h2>${escapeHtml(feature.heading)}</h2>
      <ol class="seo-step-list">${feature.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
    </section>
    ${gameApiImages}
    ${contactLink(locale, seoCopy[locale].labels.contactCta)}`;
}

function renderHomePage(locale) {
  const copy = seoCopy[locale];
  const features = Object.entries(copy.features).map(([slug, feature]) => `
    <article class="seo-card">
      <h2><a href="${getSeoPath(locale, "feature", slug)}">${escapeHtml(feature.title)}</a></h2>
      <p>${escapeHtml(feature.description)}</p>
    </article>`).join("");

  return `
    <section class="seo-home-hero">
      <p class="seo-eyebrow">RobotPay · ${escapeHtml(copy.labels.network)}</p>
      <h1>${escapeHtml(copy.home.title)}</h1>
      <p>${escapeHtml(copy.home.intro)}</p>
      <div class="seo-actions">
        <a class="seo-button" href="${getSeoPath(locale, "countries")}">${escapeHtml(copy.labels.allMarkets)}</a>
        ${contactLink(locale, copy.labels.contactCta)}
      </div>
    </section>
    <section class="seo-section">
      <h2>${escapeHtml(copy.home.heading)}</h2>
      <p>${escapeHtml(copy.home.paragraph)}</p>
      <div class="seo-grid">
        <article class="seo-card"><h3>${navLink(locale, "about", copy.home.aboutLink)}</h3><p>${escapeHtml(copy.about.description)}</p></article>
        <article class="seo-card"><h3>${navLink(locale, "countries", copy.nav.countries)}</h3><p>${escapeHtml(copy.countries.description)}</p></article>
        <article class="seo-card"><h3>${navLink(locale, "operators", copy.nav.operators)}</h3><p>${escapeHtml(copy.operators.description)}</p></article>
      </div>
    </section>
    <section class="seo-section" id="services">
      <h2>${escapeHtml(copy.nav.services)}</h2>
      <div class="seo-grid">${features}</div>
    </section>`;
}

function renderServicesPage(locale) {
  const copy = seoCopy[locale];
  const features = Object.entries(copy.features).map(([slug, feature]) => `
    <article class="seo-card">
      <h2><a href="${getSeoPath(locale, "feature", slug)}">${escapeHtml(feature.title)}</a></h2>
      <p>${escapeHtml(feature.description)}</p>
    </article>`).join("");

  return `
    <section class="seo-intro">
      <p class="seo-eyebrow">${escapeHtml(copy.nav.services)}</p>
      <h1>${escapeHtml(copy.servicesHub.title)}</h1>
      <p>${escapeHtml(copy.servicesHub.intro)}</p>
    </section>
    <div class="seo-grid">${features}</div>
    <div class="seo-actions">${contactLink(locale, copy.labels.contactCta)}</div>`;
}

function renderPageBody(locale, type, slug) {
  if (type === "home") return renderHomePage(locale);
  if (type === "about") return renderAboutPage(locale);
  if (type === "contact") return renderContactPage(locale);
  if (type === "services") return renderServicesPage(locale);
  if (type === "countries") {
    return `
      <section class="seo-intro">
        <p class="seo-eyebrow">${escapeHtml(seoCopy[locale].labels.availability)}</p>
        <h1>${escapeHtml(seoCopy[locale].countries.title)}</h1>
        <p>${escapeHtml(seoCopy[locale].countries.intro)}</p>
      </section>
      ${renderCountryCards(locale)}`;
  }
  if (type === "operators") {
    return `
      <section class="seo-intro">
        <p class="seo-eyebrow">${escapeHtml(seoCopy[locale].labels.network)}</p>
        <h1>${escapeHtml(seoCopy[locale].operators.title)}</h1>
        <p>${escapeHtml(seoCopy[locale].operators.intro)}</p>
      </section>
      ${renderOperatorCards(locale)}`;
  }
  if (type === "country") {
    return renderCountryPage(locale, paymentMarkets.find((country) => country.slug === slug));
  }
  if (type === "operator") {
    return renderOperatorPage(locale, paymentOperators.find((operator) => operator.slug === slug));
  }
  return renderFeaturePage(locale, slug);
}

function schemaForPage(locale, type, title, description, canonical, breadcrumbItems) {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "RobotPay",
      url: siteUrl,
      email: "Hello@robotpay.com",
      contactPoint: contactChannels.map((channel) => ({
        "@type": "ContactPoint",
        contactType: seoCopy[locale].contact[channel.key],
        url: channel.href.startsWith("https://") ? channel.href : undefined,
        email: channel.href.startsWith("mailto:") ? channel.value : undefined,
        telephone: channel.href.startsWith("https://wa.me/") ? "+639609010279" : undefined
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": type === "contact" ? "ContactPage" : type === "about" ? "AboutPage" : "WebPage",
      name: title,
      description,
      url: canonical,
      inLanguage: seoCopy[locale].htmlLang,
      isPartOf: { "@type": "WebSite", name: "RobotPay", url: siteUrl }
    }
  ];

  if (breadcrumbItems.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: absoluteUrl(item.href)
      }))
    });
  }

  return schemas.map((schema) =>
    `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`
  ).join("\n");
}

function buildBreadcrumbItems(locale, type, entity) {
  const copy = seoCopy[locale];
  const items = [{ label: copy.nav.home, href: getSeoPath(locale, "home") }];
  const add = (label, page, slug) => items.push({
    label,
    href: getSeoPath(locale, page, slug)
  });

  if (type === "about") add(copy.nav.about, "about");
  if (type === "contact") add(copy.nav.contact, "contact");
  if (type === "services") add(copy.nav.services, "services");
  if (type === "countries") add(copy.nav.countries, "countries");
  if (type === "operators") add(copy.nav.operators, "operators");
  if (type === "country") {
    add(copy.nav.countries, "countries");
    add(entity.name[locale], "country", entity.slug);
  }
  if (type === "operator") {
    add(copy.nav.operators, "operators");
    add(entity.name, "operator", entity.slug);
  }
  if (type === "feature") {
    add(copy.nav.services, "services");
    add(copy.features[entity].title, "feature", entity);
  }
  return type === "home" ? [] : items;
}

function renderHtmlPage(locale, type, slug) {
  const copy = seoCopy[locale];
  const entity = routePage(locale, type, slug);
  if (!entity) return null;

  const data = pageMetadata(locale, type, entity);
  const title = data.title;
  const description = data.description;
  const route = getSeoPath(locale, type, slug);
  const paths = getRoutes(type, slug);
  const canonical = absoluteUrl(route);
  const breadcrumbItems = buildBreadcrumbItems(locale, type, entity === true ? null : entity);
  const breadcrumb = renderBreadcrumbs(locale, type, entity === true ? null : entity);
  const alternateLocale = locale === "fr" ? "en" : "fr";
  const alternateRoute = paths[alternateLocale];
  const nav = pageLinks(locale).map(([page, label]) => navLink(locale, page, label)).join("");
  const body = renderPageBody(locale, type, slug);

  const html = `<!doctype html>
<html lang="${copy.htmlLang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="robots" content="index,follow">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="fr" href="${absoluteUrl(paths.fr)}">
  <link rel="alternate" hreflang="en" href="${absoluteUrl(paths.en)}">
  <link rel="alternate" hreflang="x-default" href="${absoluteUrl(paths.en)}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/seo-pages.css">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="RobotPay">
  <meta property="og:locale" content="${copy.ogLocale}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="https://res.cloudinary.com/fa719lho/image/upload/v1787668181/robotpay-logo_iaa0dj.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  ${schemaForPage(locale, type, title, description, canonical, breadcrumbItems)}
</head>
<body>
  <a class="seo-skip-link" href="#main-content">${locale === "fr" ? "Aller au contenu" : "Skip to content"}</a>
  <header class="seo-header">
    <a class="seo-brand" href="${getSeoPath(locale, "home")}" aria-label="RobotPay">
      <img src="https://res.cloudinary.com/fa719lho/image/upload/v1787668181/robotpay-logo_iaa0dj.jpg" width="42" height="42" alt="">
      <span>Robot<strong>Pay</strong></span>
    </a>
    <nav aria-label="${locale === "fr" ? "Navigation principale" : "Main navigation"}">${nav}</nav>
    <a class="seo-language" href="${alternateRoute}" lang="${alternateLocale}">${copy.alternateLanguageName}</a>
  </header>
  <main class="seo-main" id="main-content">
    ${breadcrumb}
    ${body}
  </main>
  <footer class="seo-footer">
    <div>
      <a class="seo-brand" href="${getSeoPath(locale, "home")}"><span>Robot<strong>Pay</strong></span></a>
      <p>${escapeHtml(copy.about.intro)}</p>
    </div>
    <nav aria-label="${locale === "fr" ? "Liens du site" : "Site links"}">
      ${nav}
    </nav>
    <p><a href="mailto:Hello@robotpay.com">Hello@robotpay.com</a></p>
  </footer>
</body>
</html>`;

  return { html, route, title, description };
}

function generatePages() {
  const pages = [];
  const pageTypes = ["home", "about", "contact", "services", "countries", "operators"];

  for (const locale of locales) {
    for (const type of pageTypes) {
      pages.push({ locale, type, slug: undefined });
    }
    for (const country of paymentMarkets) {
      pages.push({ locale, type: "country", slug: country.slug });
    }
    for (const operator of paymentOperators) {
      pages.push({ locale, type: "operator", slug: operator.slug });
    }
    for (const slug of featureSlugs) {
      pages.push({ locale, type: "feature", slug });
    }
  }

  for (const page of pages) {
    const rendered = renderHtmlPage(page.locale, page.type, page.slug);
    if (!rendered) continue;
    if (page.locale === "fr" && page.type === "home") continue;

    const target = outputFile(rendered.route);
    mkdirSync(path.dirname(target), { recursive: true });
    writeFileSync(target, rendered.html, "utf8");
  }

  const flagDir = path.join(publicDir, "flags");
  mkdirSync(flagDir, { recursive: true });
  for (const country of paymentMarkets) {
    copyFileSync(
      path.join(rootDir, "src", "assets", "flags", `${country.flagCode}.svg`),
      path.join(flagDir, `${country.flagCode}.svg`)
    );
  }
  const gameImageDir = path.join(publicDir, "seo-images", "game-api");
  mkdirSync(gameImageDir, { recursive: true });
  for (const imageName of ["game-catalog.jpg", "game-tiles.jpg"]) {
    copyFileSync(
      path.join(rootDir, "src", "assets", "game-api", imageName),
      path.join(gameImageDir, imageName)
    );
  }

  const allRoutes = new Set([
    "/",
    ...pages.map((page) => getSeoPath(page.locale, page.type, page.slug))
  ]);
  const lastmod = new Date().toISOString().slice(0, 10);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...allRoutes].map((route) =>
    `  <url><loc>${escapeHtml(absoluteUrl(route))}</loc><lastmod>${lastmod}</lastmod></url>`
  ).join("\n")}\n</urlset>\n`;

  writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap, "utf8");
  writeFileSync(
    path.join(publicDir, "robots.txt"),
    `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
    "utf8"
  );

  console.log(`Generated ${pages.length} localized SEO routes (${allRoutes.size} sitemap URLs).`);
}

generatePages();
