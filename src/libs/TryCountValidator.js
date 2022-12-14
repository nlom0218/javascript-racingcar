const TryCountValidator = {
  validation(tryCount) {
    TryCountValidator.isNumber(tryCount);
  },

  isNumber(tryCount) {
    const numberRegExp = /^[0-9]+$/;
    if (!numberRegExp.test(tryCount))
      throw new Error('[ERROR] 시도 횟수는 숫자여야 합니다.');
  },
};

module.exports = TryCountValidator;
