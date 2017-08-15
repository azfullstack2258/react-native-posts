const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    server: {
      port: 4000,
    },
  },
  test: {
    server: {
      port: 4000,
    },
  },
  production: {
    server: {
      port: 4000,
    },
  },
};

module.exports = config[env];
