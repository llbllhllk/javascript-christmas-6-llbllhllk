import generateMenuNames from '../src/utils/generateMenuNames.js';
import generateMenuPrices from '../src/utils/generateMenuPrices.js';
import generateOrderAmountBeforeDiscount from '../src/utils/generateOrderAmountBeforeDiscount.js';

describe('주문 금액 기능', () => {
  test('주문 메뉴에 따른 총 주문 금액이 맞으면 금액을 반환한다.', () => {
    const value = [
      ['해산물파스타', '2'],
      ['레드와인', '1'],
      ['초코케이크', '1'],
    ];
    const expectedValue = 110000;

    const menuNames = generateMenuNames(value);
    const menuPrices = generateMenuPrices(menuNames);
    const result = generateOrderAmountBeforeDiscount(menuPrices);
    expect(result).toEqual(expectedValue);
  });
});
