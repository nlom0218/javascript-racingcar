const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { Console } = require('@woowacourse/mission-utils');

const IOView = {
  InputView,
  OutputView,

  quit() {
    Console.close();
  },
};

module.exports = IOView;
