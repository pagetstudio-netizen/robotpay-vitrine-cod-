const routes = {
  fr: {
    home: "/",
    about: "/a-propos/",
    contact: "/contact/",
    services: "/services/",
    countries: "/pays/",
    operators: "/operateurs/",
    country: (slug) => `/pays/${slug}/`,
    operator: (slug) => `/operateurs/${slug}/`,
    feature: (slug) => `/services/${slug}/`
  },
  en: {
    home: "/en/",
    about: "/en/about/",
    contact: "/en/contact/",
    services: "/en/features/",
    countries: "/en/countries/",
    operators: "/en/operators/",
    country: (slug) => `/en/countries/${slug}/`,
    operator: (slug) => `/en/operators/${slug}/`,
    feature: (slug) => `/en/features/${slug}/`
  }
};

export function getSeoPath(language, page, slug) {
  const locale = language === "fr" ? "fr" : "en";
  const path = routes[locale][page];

  if (!path) {
    throw new Error(`Unknown SEO route: ${page}`);
  }

  return typeof path === "function" ? path(slug) : path;
}
