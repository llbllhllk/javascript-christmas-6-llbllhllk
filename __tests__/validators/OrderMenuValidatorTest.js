import ERROR from '../../src/constants/error.js';
import OrderMenuValidator from '../../src/validators/OrderMenuValidator.js';

describe('주문 메뉴와 개수 입력 예외 상황 테스트', () => {
  test('메뉴판에 있는 메뉴인 경우 undefined를 반환한다.', () => {
    const value = [
      ['양송이수프', '1'],
      ['타파스', '2'],
      ['바비큐립', '3'],
    ];
    const result = OrderMenuValidator.validateNoMenu(value);
    expect(result).toBeUndefined();
  });

  test('메뉴판에 있는 메뉴가 아닌 경우 예외 처리를 한다.', () => {
    const value = [
      ['피자', '1'],
      ['크림파스타', '2'],
      ['데리버거', '3'],
    ];
    const result = () => {
      OrderMenuValidator.validateNoMenu(value);
    };
    expect(result).toThrow(ERROR.menu.invalidOrder);
  });

  test('주문 메뉴의 개수가 1이상인 경우 undefined를 반환한다.', () => {
    const value = [
      ['양송이수프', '1'],
      ['타파스', '2'],
      ['바비큐립', '3'],
    ];
    const result = OrderMenuValidator.validateOrderMenuQuantity(value);
    expect(result).toBeUndefined();
  });

  test('주문 메뉴의 개수가 1미만인 경우 예외 처리를 한다.', () => {
    // given
    const value = [
      ['양송이수프', '1'],
      ['타파스', '0'],
      ['바비큐립', '3'],
    ];
    const result = () => {
      OrderMenuValidator.validateOrderMenuQuantity(value);
    };
    expect(result).toThrow(ERROR.menu.invalidOrder);
  });
});
