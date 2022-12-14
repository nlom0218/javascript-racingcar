const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  readCarNames(callBack) {
    Console.readLine(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      callBack
    );
  },

  readTryCount(callBack) {
    Console.readLine('시도할 회수는 몇회인가요?\n', callBack);
  },
};

module.exports = InputView;
