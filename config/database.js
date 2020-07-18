module.exports = ({ env }) => ({
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "mysql",
          host: env("DATABASE_HOST", "127.0.0.1"),
          port: env.int("DATABASE_PORT", 5432),
          database: env("wikiumai_strapi_db", "strapi"),
          username: env("wikiumai_umai", ""),
          password: env("{v*NnVt7H-Tj", ""),
        },
        options: {
          ssl: false,
        },
      },
    },
  });