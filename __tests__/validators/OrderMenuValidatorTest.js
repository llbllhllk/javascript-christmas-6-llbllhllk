import ERROR from '../../src/constants/error.js';
import OrderMenuValidator from '../../src/validators/OrderMenuValidator.js';

describe('주문 메뉴와 개수 입력 예외 상황 테스트', () => {
  test.each([
    ['피자', '1'],
    ['크림파스타', '2'],
    ['데리버거', '3'],
  ])('메뉴판에 있는 메뉴가 아닌 경우 예외 처리를 한다.', input => {
    expect(() => OrderMenuValidator.validateOrderMenu(input)).toThrow(ERROR.menu.NO_MENU);
  });
});
