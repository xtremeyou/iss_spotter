const { nextISSTimesForMyLocation } = require("./iss_promised")


const printPassTimes = function (flyOverTimes) {
  for (const pass of flyOverTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then((flyOverTimes) => {
    printPassTimes(flyOverTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

