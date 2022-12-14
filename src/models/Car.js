const errorHandler = require('../libs/errorHandler');
const { generate } = require('../libs/MovingRandomNumber');
const { CarNameValidator } = require('../libs/Validator');

class Car {
  #name;
  #position = 0;

  constructor(carName) {
    this.create(carName);
  }

  create(carName) {
    this.#name = carName;
  }

  movingForward() {
    const randomNumber = generate();
    if (randomNumber > 3) this.#position += 1;
  }

  getCarPosition() {
    return { name: this.#name, position: this.#position };
  }

  static validtionCarName(carName) {
    try {
      CarNameValidator.validation(carName);
    } catch (error) {
      errorHandler(error);
      return false;
    }
    return true;
  }
}

module.exports = Car;
