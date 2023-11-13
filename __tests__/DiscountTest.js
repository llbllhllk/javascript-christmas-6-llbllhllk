import calculateDDayDiscount from '../src/utils/calculateDDayDiscount.js';

describe('할인 혜택 기능 ', () => {
  test('방문 예정 날짜를 통해 크리스마스 디데이 할인 금액을 계산하여 할인금액을 반환한다.', () => {
    const value = 25;
    const expectedValue = -3400;
    const result = calculateDDayDiscount(value);
    expect(result).toEqual(expectedValue);
  });

  test('크리스마스 디데이 할인 기능에서 방문 예정 날짜가 25일을 넘으면 false를 반환한다.', () => {
    const value = 26;
    const expectedValue = false;
    const result = calculateDDayDiscount(value);
    expect(result).toEqual(expectedValue);
  });
});
