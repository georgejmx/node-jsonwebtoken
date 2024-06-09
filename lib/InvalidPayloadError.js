const JsonWebTokenError = require("./JsonWebTokenError");

const InvalidPayloadError = function (message, date) {
  JsonWebTokenError.call(this, message);
  this.name = "InvalidFormatError";
  this.date = date;
};

InvalidPayloadError.prototype = Object.create(JsonWebTokenError.prototype);
InvalidPayloadError.prototype.constructor = InvalidPayloadError;

module.exports = InvalidPayloadError;
