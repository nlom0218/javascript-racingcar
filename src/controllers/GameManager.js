const Car = require('../models/Car');
const RacingcarGame = require('../models/RacingcarGame');
const Convert = require('../libs/Convert');
const { InputView, OutputView, quit } = require('../views/IOView');

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

    this.#racingcarGame.setTryCount(tryCount);
    OutputView.printResultMessage();
    this.movingCarForward();
  }

  movingCarForward() {
    this.#racingcarGame.movingCarForward();
    this.resultMovingCarForward();
  }

  resultMovingCarForward() {
    OutputView.printResult(this.#racingcarGame.getCarsPosition());
    if (this.#racingcarGame.isEnd()) return this.end();
    this.movingCarForward();
  }

  end() {
    OutputView.printWinner(this.#racingcarGame.getWinner());
    quit();
  }
}

module.exports = GameManager;
