const redis = require("redis");
const client = redis.createClient({ url: process.env.REDIS_URL });

exports.cacheUser = (key, data) =>
  client.setex(key, 3600, JSON.stringify(data));
exports.getCachedUser = async (key) => {
  return new Promise((resolve, reject) => {
    client.get(key, (err, data) => {
      if (err) reject(err);
      resolve(JSON.parse(data));
    });
  });
};
