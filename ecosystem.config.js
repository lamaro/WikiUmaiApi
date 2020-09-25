module.exports = {
    apps: [
      {
        name: 'strapi',
        cwd: '/home/revision/WikiUmaiApi/',
        script: 'npm',
        args: 'start',
        env: {
          NODE_ENV: 'production',
          DATABASE_HOST: 'localhost', // database endpoint
          DATABASE_PORT: '3306',
          DATABASE_NAME: 'wiki_api', // DB name
          DATABASE_USERNAME: 'wikiumai_umai', // your username for psql
          DATABASE_PASSWORD: '{v*NnVt7H-Tj', // your password for psql
        },
      },
    ],
  };