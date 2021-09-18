const { createSecureHeaders } = require("next-secure-headers");

module.exports = {
  env: {
    DB_URI:
      "mongodb+srv://watan:3sRnwfWfVPDxczpt@cluster0.orqjo.mongodb.net/nextEcommerce?retryWrites=true&w=majority",
    BASE_URl: "http://localhost:3000",
    ACCESS_JWT_SECRET: "Inhale-Exhale-and-Repeat-After-Me!",
    REFRESH_JWT_SECRET: "Inhale-Exhale-and-Repeat-After-Me!",
    ACCESS_JWT_EXPIRES_IN: "10m",
    REFRESH_JWT_EXPIRES_IN: "90d",
    JWT_COOKIE_EXPIRES_IN: "10",
    EMAIL_USERNAME: "e.store.online.iq@gmail.com",
    EMAIL_PASSWORD: "estore123",
  },
  images: {
    domains: ["via.placeholder.com", "picsum.photos", "res.cloudinary.com"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: createSecureHeaders({
          forceHTTPSRedirect: [
            true,
            { maxAge: 60 * 60 * 24 * 4, includeSubDomains: true },
          ],
          referrerPolicy: "same-origin",
        }),
      },
    ];
  },
};
