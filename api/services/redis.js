/* eslint-disable new-cap */
const redis = require('redis');

/* ***************************** REDIS SETUP ******************************** */

const Redis = new redis.createClient({
  url: process.env.REDIS_URL,
});

Redis.on('error', (error) => console.error(error));

module.exports = Redis;
