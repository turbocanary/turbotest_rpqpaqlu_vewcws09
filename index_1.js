const crypto = require('crypto');
function anotherInsecurePassword() {
  // GOOD: the random suffix is cryptographically secure
  // Generate a 4-byte (32-bit) random number and convert to hex
  var suffix = crypto.randomBytes(4).toString('hex');
  var password = "sssAAAA" + suffix;
  return password;
}