module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'mysql',
          host: '127.0.0.1',
          port: process.env.DATABASE_PORT,
          database: process.env.DATABASE_NAME,
          username: process.env.DATABASE_USERNAME,
          password: process.env.DATABASE_PASSWORD
        },
        options: {
          useNullAsDefault: true,
        },
      },
    },
  });
  