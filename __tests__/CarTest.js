const { describe, expect, test } = require('@jest/globals');
const { Random, Console } = require('@woowacourse/mission-utils');
const Car = require('../src/models/Car');

describe.each([['HD'], ['KH'], ['BY']])('자동차 생성 테스트', (carName) => {
  const car = new Car();
  car.create(carName);

  test('자동차 생성 후 getCarPosition 함수를 실행하면 자동차의 이름을 알 수 있다.', () => {
    const expectCarName = car.getCarPosition().name;

    expect(expectCarName).toEqual(carName);
  });

  test('자동차가 생성이 되면 초기 위치는 0이다.', () => {
    const expectPosition = car.getCarPosition().position;

    expect(expectPosition).toEqual(0);
  });
});

describe('자동차 전진 테스트', () => {
  const car = new Car();
  car.create('HD');

  test.each([[0], [1], [2], [3]])(
    '무작위 숫자가 4보다 작으면 전진하지 않는다. 숫자: %d',
    (number) => {
      Random.pickNumberInRange = jest.fn();
      Random.pickNumberInRange.mockReturnValueOnce(number);

      car.movingForward();
      const position = car.getCarPosition().position;

      expect(position).toEqual(0);
    }
  );

  test.each([
    [4, 1],
    [5, 2],
    [6, 3],
    [7, 4],
    [8, 5],
    [9, 6],
  ])(
    '무작위 숫자가 4이상 이면 전진한다. 숫자: %d',
    (number, expectPosition) => {
      Random.pickNumberInRange = jest.fn();
      Random.pickNumberInRange.mockReturnValueOnce(number);

      car.movingForward();
      const position = car.getCarPosition().position;

      expect(position).toEqual(expectPosition);
    }
  );
});

describe('자동차 이름 에러 테스트', () => {
  const printSpy = jest.spyOn(Console, 'print');
  test('자동차의 길이가 5보다 크면 에러 메시지가 출력된다.', () => {
    Car.validtionCarName('HDHDHDD');

    expect(printSpy.mock.calls[0].join('')).toEqual(
      expect.stringContaining('[ERROR]')
    );

    printSpy.mockClear();
  });

  test('자동차의 이름에 공백이 존재하면 에러 메시지가 출력된다.', () => {
    Car.validtionCarName('DH D');

    expect(printSpy.mock.calls[0].join('')).toEqual(
      expect.stringContaining('[ERROR]')
    );

    printSpy.mockClear();
  });
});
