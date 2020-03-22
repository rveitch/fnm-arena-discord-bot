const request = require('request');

request({
  uri: 'https://graph.facebook.com/v2.9/',
  method: 'POST',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36'
  },
  formData: formData,
}, function(error, response, body) {
  var fbStatus = JSON.parse(response.body);
  console.log(response.body);
});
