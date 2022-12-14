const { SEPARATOR } = require('./Constant');

const Convert = {
  fromStringToArray(string) {
    return string.split(SEPARATOR);
  },
};

module.exports = Convert;
