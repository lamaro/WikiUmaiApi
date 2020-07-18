module.exports = ({ env }) => ({
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "mysql",
          host: env("DATABASE_HOST", "127.0.0.1"),
          port: env.int("DATABASE_PORT", 3306),
          database: env("wikiumai_strapi_db", "wikiumai_strapi_db"),
          username: env("wikiumai_umai", "wikiumai_umai"),
          password: env("{v*NnVt7H-Tj", "{v*NnVt7H-Tj"),
        },
        options: {
          ssl: false,
        },
      },
    },
  });