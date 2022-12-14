class Car {
  #name;
  #position = 0;

  constructor(carName) {
    this.create(carName);
  }

  create(carName) {
    this.#name = carName;
  }

  static validtionCarName(carName) {
    if (carName.length > 5) return false;
    return true;
  }
}

module.exports = Car;
