const Car = require('../models/Car');
const { InputView } = require('../views/IOView');

class GameManager {
  #cars = [];

  start() {
    this.requestCarName();
  }

  requestCarName() {
    InputView.readCarNames((carNames) => this.handleCarName(carNames));
  }

  handleCarName(carNames) {
    this.createCars(carNames);
  }

  createCars(carNames) {
    carNames.split(',').forEach((carName) => {
      const isValid = Car.validtionCar(carName);
      if (!isValid) return this.requestCarName();
      this.#cars.push(new Car(carName));
    });
  }
}

module.exports = GameManager;
