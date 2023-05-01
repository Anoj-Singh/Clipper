const mongoose = require("mongoose");

module.exports = function () {
  return new Promise((resolve, reject) => {
    if (mongoose.connection.readyState === 1) {
      return resolve();
    }
    mongoose.connect(
      `MONGODB_URI_GOES_HERE`
    );

    mongoose.connection.on("connected", () => {
      resolve();
    });

    mongoose.connection.on("error", (err) => {
      reject();
    });
  });
};
