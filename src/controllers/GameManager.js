const Car = require('../models/Car');
const RacingcarGame = require('../models/RacingcarGame');
const Convert = require('../libs/Convert');
const { InputView } = require('../views/IOView');

class GameManager {
  #racingcarGame = new RacingcarGame();

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
    carNames = Convert.fromStringToArray(carNames);

    carNames.forEach((carName) => {
      const isValid = Car.validtionCarName(carName);
      if (!isValid) return this.requestCarName();
    });

    this.#racingcarGame.createCars(carNames);
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
