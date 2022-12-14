const TryCountValidator = {
  TYPE_ERROR: '[ERROR] 시도 횟수는 숫자여야 합니다.',

  validation(tryCount) {
    TryCountValidator.isNumber(tryCount);
  },

  isNumber(tryCount) {
    const numberRegExp = /^[0-9]+$/;
    if (!numberRegExp.test(tryCount))
      throw new Error(TryCountValidator.TYPE_ERROR);
  },
};

module.exports = TryCountValidator;
