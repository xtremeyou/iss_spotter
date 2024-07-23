const needle = require('needle')
//use needle to get ip address
//create callback param



const fetchMyIP = function (callback) {
  needle.get('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }
    const ip = body.ip
    callback(null, ip)
  });
}

module.exports = { fetchMyIP }
