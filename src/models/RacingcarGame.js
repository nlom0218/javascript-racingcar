const Car = require('./Car');

class RacingcarGame {
  #cars = [];
  #tryCount;

  createCars(carsName) {
    carsName.forEach((carName) => {
      this.#cars.push(new Car(carName));
    });
  }

  setTryCount(tryCount) {
    this.#tryCount = Number(tryCount);
  }

  movingCarForward() {
    this.#tryCount -= 1;
    this.#cars.forEach((car) => {
      car.movingForward();
    });
  }

  isEnd() {
    return this.#tryCount === 0;
  }

  static validationTryCount(tryCount) {
    const numberRegExp = /^[0-9]+$/;
    if (!numberRegExp.test(tryCount)) return false;
    return true;
  }
}

module.exports = RacingcarGame;
