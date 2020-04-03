const Redis = require('../services/redis');

module.exports = {
  storeSubmission(key, value) {
    Redis.set(key, value, Redis.print);
  },
};
