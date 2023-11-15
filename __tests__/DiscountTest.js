import Benefit from '../src/domains/Benefit.js';
import Giveaway from '../src/domains/Giveaway.js';
import OrderManager from '../src/domains/OrderManager.js';

describe('할인 혜택 기능 ', () => {
  test('방문 예정 날짜를 통해 크리스마스 디데이 할인 금액을 계산하여 할인금액을 반환한다.', () => {
    const value = 25;
    const expectedValue = -3400;
    const result = Benefit.calculateDDayDiscount(value);
    expect(result).toEqual(expectedValue);
  });

  test('크리스마스 디데이 할인 기능에서 방문 예정 날짜가 25일을 넘으면 false를 반환한다.', () => {
    const value = 26;
    const expectedValue = false;
    const result = Benefit.calculateDDayDiscount(value);
    expect(result).toEqual(expectedValue);
  });

  test('평일 할인 기능에서 평일 방문 날에 디저트당 할인 가격을 반환한다.', () => {
    const value = [
      ['해산물파스타', '2'],
      ['아이스크림', '1'],
      ['초코케이크', '1'],
    ];
    const expectedValue = -4046;
    const visitDate = 4;
    const orderManager = new OrderManager(visitDate, value);
    const menusInfo = orderManager.getMenusInfo();
    const dayOfWeek = orderManager.getDayOfWeek();
    const result = Benefit.calculateWeekDayDiscount(menusInfo, dayOfWeek);
    expect(result).toEqual(expectedValue);
  });

  test('평일 할인 기능에서 평일 방문 날이 아닌 경우 false를 반환한다.', () => {
    const value = [
      ['해산물파스타', '2'],
      ['아이스크림', '1'],
      ['초코케이크', '1'],
    ];
    const expectedValue = false;
    const visitDate = 8;
    const orderManager = new OrderManager(visitDate, value);
    const menusInfo = orderManager.getMenusInfo();
    const dayOfWeek = orderManager.getDayOfWeek();
    const result = Benefit.calculateWeekDayDiscount(menusInfo, dayOfWeek);
    expect(result).toEqual(expectedValue);
  });

  test('주말 할인 기능에서 주말 방문 날에 디저트당 할인 가격을 반환한다.', () => {
    const value = [
      ['해산물파스타', '2'],
    ['아이스크림', '1'],
      ['초코케이크', '1'],
    ];
    const expectedValue = -4046;
    const visitDate = 8;
    const orderManager = new OrderManager(visitDate, value);
    const menusInfo = orderManager.getMenusInfo();
    const dayOfWeek = orderManager.getDayOfWeek();
    const result = Benefit.calculateWeekEndDiscount(menusInfo, dayOfWeek);
    expect(result).toEqual(expectedValue);
  });

  test('주말 할인 기능에서 주말 방문 날이 아닌 경우 false를 반환한다.', () => {
    const value = [
      ['해산물파스타', '2'],
      ['아이스크림', '1'],
      ['초코케이크', '1'],
    ];
    const expectedValue = false;
    const visitDate = 4;
    const orderManager = new OrderManager(visitDate, value);
    const menusInfo = orderManager.getMenusInfo();
    const dayOfWeek = orderManager.getDayOfWeek();
    const result = Benefit.calculateWeekEndDiscount(menusInfo, dayOfWeek);
    expect(result).toEqual(expectedValue);
  });

  test('특별 할인 기능에서 별이 있는 날에 할인 가격을 반환한다.', () => {
    const value = [
      ['해산물파스타', '2'],
      ['아이스크림', '1'],
      ['초코케이크', '1'],
    ];
    const visitDate = 3;
    const orderManager = new OrderManager(visitDate, value);
    const dayOfWeek = orderManager.getDayOfWeek();
    const expectedValue = -1000;
    const result = Benefit.calculateSpecialDiscount(visitDate, dayOfWeek);
    expect(result).toEqual(expectedValue);
  });

  test('특별 할인 기능에서 별이 없는 날에 false 반환한다.', () => {
    const value = [
      ['해산물파스타', '2'],
      ['아이스크림', '1'],
      ['초코케이크', '1'],
    ];
    const visitDate = 26;
    const orderManager = new OrderManager(visitDate, value);
    const dayOfWeek = orderManager.getDayOfWeek();
    const expectedValue = false;
    const result = Benefit.calculateSpecialDiscount(visitDate, dayOfWeek);
    expect(result).toEqual(expectedValue);
  });

  test('증정 이벤트 할인 기능에서 총 주문 금액이 12만원 이상이면 할인 금액을 반환한다.', () => {
    const value = 130000;
    const expectedValue = -25000;
    const result = Giveaway.calculateGiveawyDiscountAmount(value);
    expect(result).toEqual(expectedValue);
  });

  test('증정 이벤트 할인 기능에서 총 주문 금액이 12만원 이상이 아니면 false 반환한다.', () => {
    const value = 90000;
    const expectedValue = false;
    const result = Giveaway.calculateGiveawyDiscountAmount(value);
    expect(result).toEqual(expectedValue);
  });
});
