const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  EXECUTION_RESULT_MESSAGE: '\n실행 결과',
  FINAL_WINNER_MESSAGE: '최종 우승자 : ',
  FORWARD: '-',
  FINAL_WINNER_SEPARATOR: ', ',

  printResultMessage() {
    Console.print(OutputView.EXECUTION_RESULT_MESSAGE);
  },

  printResult(carsPosition) {
    carsPosition.forEach((carPosition) => {
      OutputView.printPosition(carPosition);
    });
    Console.print(' ');
  },

  printPosition({ name, position }) {
    Console.print(`${name} : ${OutputView.FORWARD.repeat(position)}`);
  },

  printWinner(winner) {
    Console.print(
      OutputView.FINAL_WINNER_MESSAGE +
        winner.join(OutputView.FINAL_WINNER_SEPARATOR)
    );
  },
};

module.exports = OutputView;
