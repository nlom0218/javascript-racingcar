const CarNameValidator = {
  MAX_LENGTH_ERROR: '[ERROR] 자동차 이름은 5자 이하이어야 합니다.',
  MIN_LENGTH_ERROR: '[ERROR] 자동차 이름은 1자 이상이어야 합니다.',
  BLANK_ERROR: '[ERROR] 자동차 이름에 공백이 존재합니다.',

  validation(carName) {
    CarNameValidator.isCorrectLength(carName);
    CarNameValidator.isBlank(carName);
  },

  isCorrectLength(carName) {
    if (carName.length > 5) throw new Error(CarNameValidator.MAX_LENGTH_ERROR);

    if (carName.length === 0)
      throw new Error(CarNameValidator.MIN_LENGTH_ERROR);
  },

  isBlank(carName) {
    if (carName.includes(' ')) throw new Error(CarNameValidator.BLANK_ERROR);
  },
};

module.exports = CarNameValidator;
