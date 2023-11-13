import generateMenuNames from '../src/utils/generateMenuNames.js';
import generateMenuPrices from '../src/utils/generateMenuPrices.js';
import generateMenuCount from '../src/utils/generateMenuCount.js';
import generateMenusInfo from '../src/utils/generateMenusInfo.js';
import generateOrderAmountBeforeDiscount from '../src/utils/generateOrderAmountBeforeDiscount.js';
import checkAddGiveaway from '../src/utils/checkAddGiveaway.js';

describe('주문 기능', () => {
  test('주문 메뉴에 따른 총 주문 금액이 맞으면 금액을 반환한다.', () => {
    const value = [
      ['해산물파스타', '2'],
      ['레드와인', '1'],
      ['초코케이크', '1'],
    ];
    const expectedValue = 145000;
    const menuNames = generateMenuNames(value);
    const menuPrices = generateMenuPrices(menuNames);
    const menuCount = generateMenuCount(value);
    const orderMenusInfo = generateMenusInfo(menuNames, menuPrices, menuCount);
    const result = generateOrderAmountBeforeDiscount(orderMenusInfo);
    expect(result).toEqual(expectedValue);
  });

  test('총 주문 금액에 따른 증정 메뉴가 있으면 true를 반환한다.', () => {
    const value = 120000;
    const expectedValue = true;
    const result = checkAddGiveaway(value);
    expect(result).toEqual(expectedValue);
  });

  test('총 주문 금액에 따른 증정 메뉴가 없으면 false를 반환한다.', () => {
    const value = 80000;
    const expectedValue = false;
    const result = checkAddGiveaway(value);
    expect(result).toEqual(expectedValue);
  });
});
