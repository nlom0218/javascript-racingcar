class RacingcarGame {
  #tryCount;

  setTryCount(tryCount) {
    this.#tryCount = Number(tryCount);
  }

  static validationTryCount(tryCount) {
    const numberRegExp = /^[0-9]+$/;
    if (!numberRegExp.test(tryCount)) return false;
    return true;
  }
}

module.exports = RacingcarGame;
