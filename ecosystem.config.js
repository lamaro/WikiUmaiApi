module.exports = {
    apps: [
      {
        name: 'strapi',
        script: './server.js',
        env: {
          NODE_ENV: 'production',
          DATABASE_HOST: 'localhost', // database endpoint
          DATABASE_PORT: '3306',
          DATABASE_NAME: 'wiki_api', // DB name
          DATABASE_USERNAME: 'wiki_api', // your username for psql
          DATABASE_PASSWORD: '4YCkbXDcGPNLHzLG', // your password for psql
        },
      },
    ],
  };