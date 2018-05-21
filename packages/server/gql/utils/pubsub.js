const { RedisPubSub } = require('graphql-redis-subscriptions');
const Redis = require('ioredis');

const options = {
	host: process.env.REDIS_HOST,
	port: process.env.REDIS_PORT,
	retry_strategy: (options) => Math.max(options.attempt * 100, 3000)
};

module.exports = new RedisPubSub({
	publisher: new Redis(options),
	subscriber: new Redis(options)
});
