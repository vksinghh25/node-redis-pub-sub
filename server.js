const express = require('express');
const redis = require('redis');

const publisher = redis.createClient();

const app = express();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

app.get('/', (request, response) => {

  const user = {
    id: getRandomInt(10000),
    name: 'vksinghh'
  };

  // the name of the channel on which you are publishing is 'notify-user'
  publisher.publish('notify-user', JSON.stringify(user));
  response.send("Message Published : " + JSON.stringify(user));
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
