import OrderManager from '../src/domains/OrderManager.js';
import OrderAmount from '../src/domains/OrderAmount.js';
import Giveaway from '../src/domains/Giveaway.js';
import Benefit from '../src/domains/Benefit.js';

describe('혜택 관련 기능', () => {
  test('총 혜택 금액을 계산하는 기능에서 모든 혜택의 할인 금액을 반환한다.', () => {
    const value = [
      ['해산물파스타', '2'],
      ['레드와인', '1'],
      ['초코케이크', '1'],
    ];
    const expectedValue = -28423;
    const visitDate = 5;
    const orderManager = new OrderManager(visitDate, value);
    const menusInfo = orderManager.getMenusInfo();
    const dayOfWeek = orderManager.getDayOfWeek();
    const orderAmountBeforeDiscount = OrderAmount.calculateAmountBeforeDiscount(menusInfo);
    const discountTotalAmount = OrderAmount.calculateDiscountTotalAmount(
      visitDate,
      menusInfo,
      dayOfWeek,
    );
    const giveawayDiscountAmount =
      Giveaway.calculateGiveawyDiscountAmount(orderAmountBeforeDiscount);
    const result = discountTotalAmount + giveawayDiscountAmount;
    expect(result).toEqual(expectedValue);
  });

  test('총 혜택 금액에 따른 이벤트 배지를 반환한다.', () => {
    const value = [
      ['해산물파스타', '2'],
      ['레드와인', '1'],
      ['초코케이크', '1'],
    ];
    const expectedValue = 'santa';
    const visitDate = 5;
    const orderManager = new OrderManager(visitDate, value);
    const menusInfo = orderManager.getMenusInfo();
    const dayOfWeek = orderManager.getDayOfWeek();
    const orderAmountBeforeDiscount = OrderAmount.calculateAmountBeforeDiscount(menusInfo);
    const discountTotalAmount = OrderAmount.calculateDiscountTotalAmount(
      visitDate,
      menusInfo,
      dayOfWeek,
    );
    const giveawayDiscountAmount =
      Giveaway.calculateGiveawyDiscountAmount(orderAmountBeforeDiscount);
    const benefitTotalAmount = discountTotalAmount + giveawayDiscountAmount;
    const result = Benefit.getEventBadge(benefitTotalAmount);
    expect(result).toEqual(expectedValue);
  });

  test('총 혜택 금액에 따른 이벤트 배지가 없을 경우 undefined를 반환한다. ', () => {
    const value = [
      ['시저샐러드', '1'],
      ['레드와인', '1'],
      ['초코케이크', '1'],
    ];
    const expectedValue = undefined;
    const visitDate = 5;
    const orderManager = new OrderManager(visitDate, value);
    const menusInfo = orderManager.getMenusInfo();
    const dayOfWeek = orderManager.getDayOfWeek();
    const orderAmountBeforeDiscount = OrderAmount.calculateAmountBeforeDiscount(menusInfo);
    const discountTotalAmount = OrderAmount.calculateDiscountTotalAmount(
      visitDate,
      menusInfo,
      dayOfWeek,
    );
    const giveawayDiscountAmount =
      Giveaway.calculateGiveawyDiscountAmount(orderAmountBeforeDiscount);
    const benefitTotalAmount = discountTotalAmount + giveawayDiscountAmount;
    const result = Benefit.getEventBadge(benefitTotalAmount);
    expect(result).toEqual(expectedValue);
  });

  test('할인 후 예상 결제 금액 기능에서 총 주문 금액에서 총 할인 금액을 차감한 금액을 반환한다.', () => {
    const value = [
      ['해산물파스타', '2'],
      ['레드와인', '1'],
      ['초코케이크', '1'],
    ];
    const expectedValue = 141577;
    const visitDate = 5;
    const orderManager = new OrderManager(visitDate, value);
    const menusInfo = orderManager.getMenusInfo();
    const dayOfWeek = orderManager.getDayOfWeek();
    const orderAmountBeforeDiscount = OrderAmount.calculateAmountBeforeDiscount(menusInfo);
    const discountTotalAmount = OrderAmount.calculateDiscountTotalAmount(
      visitDate,
      menusInfo,
      dayOfWeek,
    );
    const result = OrderAmount.calculateOrderAmountAfterDiscount(
      orderAmountBeforeDiscount,
      discountTotalAmount,
    );
    expect(result).toEqual(expectedValue);
  });
});
