export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: ["https://front-strapi.netlify.app/"], // Twoja domena Netlify
      methods: ["GET", "POST", "PUT", "DELETE"], // Dozwolone metody HTTP
      headers: "*", // Dozwolone nagłówki
    },
  },

  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
