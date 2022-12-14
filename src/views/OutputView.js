const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printResultMessage() {
    Console.print('\n실행 결과');
  },

  printResult(carsPosition) {
    carsPosition.forEach((carPosition) => {
      OutputView.printPosition(carPosition);
    });
    Console.print(' ');
  },

  printPosition({ name, position }) {
    Console.print(`${name} : ${'-'.repeat(position)}`);
  },
};

module.exports = OutputView;
