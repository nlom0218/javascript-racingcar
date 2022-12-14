const CarNameValidator = {
  validation(carName) {
    CarNameValidator.isCorrectLength(carName);
    CarNameValidator.isBlank(carName);
  },

  isCorrectLength(carName) {
    if (carName.length > 5)
      throw new Error('[ERROR] 자동차 이름은 5자 이하이어야 합니다.');

    if (carName.length === 0)
      throw new Error('[ERROR] 자동차 이름은 1자 이상이어야 합니다.');
  },

  isBlank(carName) {
    if (carName.includes(' '))
      throw new Error('[ERROR] 자동차 이름에 공백이 존재합니다.');
  },
};

module.exports = CarNameValidator;
