const redis = require('redis');
const subscriber = redis.createClient();

subscriber.on('message', (channel, message) => {
  console.log('Message : ' + message + ' received on Channel : ' + channel);
});

// this guy subscribing to the same channel that
// the publisher is publishing on 
subscriber.subscribe('notify-user');
