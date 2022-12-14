const Car = require('../models/Car');
const RacingcarGame = require('../models/RacingcarGame');
const { InputView } = require('../views/IOView');

class GameManager {
  #RacingcarGame = new RacingcarGame();
  #cars = [];

  start() {
    this.requestCarName();
  }

  requestCarName() {
    InputView.readCarNames((carNames) => this.handleCarName(carNames));
  }

  handleCarName(carNames) {
    this.createCars(carNames);
    this.requestTryCount();
  }

  createCars(carNames) {
    carNames.split(',').forEach((carName) => {
      const isValid = Car.validtionCarName(carName);
      if (!isValid) return this.requestCarName();
      this.#cars.push(new Car(carName));
    });
  }

  requestTryCount() {
    InputView.readTryCount((tryCount) => this.handleTryCount(tryCount));
  }

  handleTryCount(tryCount) {
    const isValid = RacingcarGame.validationTryCount(tryCount);
    if (!isValid) return this.requestTryCount();
  }
}

module.exports = GameManager;
