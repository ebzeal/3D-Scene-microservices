const path = require('path');

const basePath = path.join(__dirname, '/packages');

module.exports = {
  apps : [
    // API GATEWAY
    {
      name: 'Gateway',
      script: basePath + '/gateway/in.js',
      watch: true,
      env: {
        PORT: 5000,
      }
    },
  ]
};
