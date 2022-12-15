const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  CAR_NAME_MESSAGE:
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  TRY_COUNT_MESSAGE: '시도할 회수는 몇회인가요?\n',

  readCarNames(callBack) {
    Console.readLine(InputView.CAR_NAME_MESSAGE, callBack);
  },

  readTryCount(callBack) {
    Console.readLine(InputView.TRY_COUNT_MESSAGE, callBack);
  },
};

module.exports = InputView;
