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

  getCarsPosition() {
    return this.#cars.map((car) => car.getCarPosition());
  }

  getWinner() {
    let longest;
    const winner = [];
    this.#ascendingCarsPosition().every(({ name, position }, order) => {
      if (order === 0) longest = position;
      if (position === longest) return winner.push(name);
      return false;
    });

    return winner;
  }

  #ascendingCarsPosition() {
    return this.getCarsPosition().sort((a, b) => b.position - a.position);
  }

  static validationTryCount(tryCount) {
    const numberRegExp = /^[0-9]+$/;
    if (!numberRegExp.test(tryCount)) return false;
    return true;
  }
}

module.exports = RacingcarGame;
