const { InputView } = require('../views/IOView');

class GameManager {
  start() {
    this.requestCarName();
  }

  requestCarName() {
    InputView.readCarNames((carNames) => this.handleCarName(carNames));
  }

  handleCarName(carNames) {
    console.log(`생성된 차들은 ${carNames}입니다.`);
  }
}

module.exports = GameManager;
