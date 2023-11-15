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

  test('형식이 예시와 같을 경우 undefined를 반환한다.', () => {
    const value = [
      ['양송이수프', '1'],
      ['타파스', '2'],
      ['바비큐립', '3'],
    ];
    const result = OrderMenuValidator.validateFormat(value);
    expect(result).toBeUndefined();
  });

  test.each([
    [
      ['해산물파스타', '2'],
      ['레드와인', '1초코케이크', '1'],
    ],
    [['해산물파스타', '2'], ['레드와인', '1'], ['초코케이크', '1'], ['']],
    [['해산물파스타2'], ['레드와인', '1초코케이크', '1'], ['']],
  ])('형식이 예시와 다른 경우 예외 처리를 한다.', input => {
    const result = () => OrderMenuValidator.validateFormat(input);
    expect(result).toThrow(ERROR.menu.invalidOrder);
  });

  test('중복 메뉴가 없을 경우 undefined를 반환한다.', () => {
    const value = [
      ['해산물파스타', '1'],
      ['타파스', '2'],
      ['바비큐립', '3'],
    ];
    const result = OrderMenuValidator.validateDuplicatedMenu(value);
    expect(result).toBeUndefined();
  });

  test('중복 메뉴를 입력한 경우 예외 처리를 한다.', () => {
    const value = [
      ['해산물파스타', '1'],
      ['타파스', '2'],
      ['해산물파스타', '3'],
    ];
    const result = () => OrderMenuValidator.validateDuplicatedMenu(value);
    expect(result).toThrow(ERROR.menu.invalidOrder);
  });

  test('메뉴가 모두 음료가 아닐 경우 undefined를 반환한다.', () => {
    const value = [
      ['해산물파스타', '1'],
      ['타파스', '2'],
      ['바비큐립', '3'],
    ];
    const result = OrderMenuValidator.validateAllBeverage(value);
    expect(result).toBeUndefined();
  });

  test('메뉴가 모두 음료일 경우 예외처리를 한다.', () => {
    const value = [
      ['해산물파스타', '1'],
      ['타파스', '2'],
      ['해산물파스타', '3'],
    ];
    const result = () => OrderMenuValidator.validateDuplicatedMenu(value);
    expect(result).toThrow(ERROR.menu.invalidOrder);
  });

  test('메뉴의 총 개수가 20을 넘지 않은 경우 undefined를 반환한다.', () => {
    const value = [
      ['해산물파스타', '1'],
      ['타파스', '2'],
      ['바비큐립', '3'],
    ];
    const result = OrderMenuValidator.validateMenuCountAboveThreshold(value);
    expect(result).toBeUndefined();
  });

  test('메뉴의 총 개수가 20을 넘은 경우 예외처리를 한다.', () => {
    const value = [
      ['해산물파스타', '18'],
      ['타파스', '2'],
      ['바비큐립', '3'],
    ];
    const result = () => OrderMenuValidator.validateMenuCountAboveThreshold(value);
    expect(result).toThrow(ERROR.menu.invalidOrder);
  });

  test('메뉴의 개수가 숫자인 경우 undefined를 반환한다.', () => {
    const value = [
      ['해산물파스타', '1'],
      ['타파스', '2'],
      ['바비큐립', '3'],
    ];
    const result = OrderMenuValidator.validateNaNCount(value);
    expect(result).toBeUndefined();
  });

  test('메뉴의 개수가 숫자가 아닌 경우 예외처리를 한다.', () => {
    const value = [
      ['해산물파스타', '18'],
      ['타파스', 'a'],
      ['바비큐립', '3'],
    ];
    const result = () => OrderMenuValidator.validateNaNCount(value);
    expect(result).toThrow(ERROR.menu.invalidOrder);
  });
});
