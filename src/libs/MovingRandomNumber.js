const { Random } = require('@woowacourse/mission-utils');

const MovingRandomNumber = {
  RANDOM_LOWER_INCLUSIVE: 0,
  RANDOM_UPPER_INCLUSIVE: 9,
  generate() {
    return Random.pickNumberInRange(
      MovingRandomNumber.RANDOM_LOWER_INCLUSIVE,
      MovingRandomNumber.RANDOM_UPPER_INCLUSIVE
    );
  },
};

module.exports = MovingRandomNumber;
