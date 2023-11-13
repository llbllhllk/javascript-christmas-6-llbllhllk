import calculateDDayDiscount from '../src/utils/calculateDDayDiscount.js';
import calculateSpecialDiscount from '../src/utils/calculateSpecialDiscount.js';
import calculateWeekDayDiscount from '../src/utils/calculateWeekDayDiscount.js';
import generateMenuNames from '../src/utils/generateMenuNames.js';

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

  test('평일 할인 기능에서 평일 방문 날에 디저트당 할인 가격을 반환한다.', () => {
    const value = [
      ['해산물파스타', '2'],
      ['아이스크림', '1'],
      ['초코케이크', '1'],
    ];
    const expectedValue = -4046;
    const menuNames = generateMenuNames(value);
    const visitDate = 5;
    const result = calculateWeekDayDiscount(menuNames, visitDate);
    expect(result).toEqual(expectedValue);
  });

  test('평일 할인 기능에서 평일 방문 날이 아닌 경우 false를 반환한다.', () => {
    const value = [
      ['해산물파스타', '2'],
      ['아이스크림', '1'],
      ['초코케이크', '1'],
    ];
    const expectedValue = false;
    const menuNames = generateMenuNames(value);
    const visitDate = 2;
    const result = calculateWeekDayDiscount(menuNames, visitDate);
    expect(result).toEqual(expectedValue);
  });

  test.each([3, 10, 17, 24, 25, 31])(
    '특별 할인 기능에서 별이 있는 날에 할인 가격을 반환한다.',
    input => {
      const expectedValue = -1000;
      const result = calculateSpecialDiscount(input);
      expect(result).toEqual(expectedValue);
    },
  );

  test.each([4, 23, 12, 9, 6, 22])('특별 할인 기능에서 별이 없는 날에 false 반환한다.', input => {
    const expectedValue = false;
    const result = calculateSpecialDiscount(input);
    expect(result).toEqual(expectedValue);
  });
});
