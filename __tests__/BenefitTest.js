import getDayOfWeek from '../src/utils/getDayOfWeek.js';
import generateMenuCount from '../src/utils/generateMenuCount.js';
import generateMenuNames from '../src/utils/generateMenuNames.js';
import generateMenuPrices from '../src/utils/generateMenuPrices.js';
import generateMenusInfo from '../src/utils/generateMenusInfo.js';
import generateOrderAmountBeforeDiscount from '../src/utils/generateOrderAmountBeforeDiscount.js';
import calculateBenefitTotalAmount from '../src/utils/calculateBenefitTotalAmount';
import generateEventBadge from '../src/utils/generateEventBadge';
import calculateOrderAmountAfterDiscount from '../src/utils/calculateOrderAmountAfterDiscount.js';

describe('혜택 관련 기능', () => {
  test('총 혜택 금액을 계산하는 기능에서 모든 혜택의 할인 금액을 반환한다.', () => {
    const value = [
      ['해산물파스타', '2'],
      ['레드와인', '1'],
      ['초코케이크', '1'],
    ];
    const expectedValue = -28423;
    const visitDate = 5;
    const dayOfWeek = getDayOfWeek(visitDate);
    const menuNames = generateMenuNames(value);
    const menuPrices = generateMenuPrices(menuNames);
    const menuCount = generateMenuCount(value);
    const orderMenusInfo = generateMenusInfo(menuNames, menuPrices, menuCount);
    const orderAmountBeforeDiscount = generateOrderAmountBeforeDiscount(orderMenusInfo);
    const result = calculateBenefitTotalAmount(
      visitDate,
      orderMenusInfo,
      dayOfWeek,
      orderAmountBeforeDiscount,
    );
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
    const dayOfWeek = getDayOfWeek(visitDate);
    const menuNames = generateMenuNames(value);
    const menuPrices = generateMenuPrices(menuNames);
    const menuCount = generateMenuCount(value);
    const orderMenusInfo = generateMenusInfo(menuNames, menuPrices, menuCount);
    const orderAmountBeforeDiscount = generateOrderAmountBeforeDiscount(orderMenusInfo);
    const benefitTotalAmount = calculateBenefitTotalAmount(
      visitDate,
      orderMenusInfo,
      dayOfWeek,
      orderAmountBeforeDiscount,
    );
    const result = generateEventBadge(benefitTotalAmount);
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
    const dayOfWeek = getDayOfWeek(visitDate);
    const menuNames = generateMenuNames(value);
    const menuPrices = generateMenuPrices(menuNames);
    const menuCount = generateMenuCount(value);
    const orderMenusInfo = generateMenusInfo(menuNames, menuPrices, menuCount);
    const orderAmountBeforeDiscount = generateOrderAmountBeforeDiscount(orderMenusInfo);
    const benefitTotalAmount = calculateBenefitTotalAmount(
      visitDate,
      orderMenusInfo,
      dayOfWeek,
      orderAmountBeforeDiscount,
    );
    const result = generateEventBadge(benefitTotalAmount);
    expect(result).toEqual(expectedValue);
  });

  test('할인 후 예상 결제 금액 기능에서 총 주문 금액에서 총 할인 금액을 차감한 금액을 반환한다.', () => {
    const value = [
      ['해산물파스타', '2'],
      ['레드와인', '1'],
      ['초코케이크', '1'],
    ];
    const expectedValue = 116577;
    const visitDate = 5;
    const dayOfWeek = getDayOfWeek(visitDate);
    const menuNames = generateMenuNames(value);
    const menuPrices = generateMenuPrices(menuNames);
    const menuCount = generateMenuCount(value);
    const orderMenusInfo = generateMenusInfo(menuNames, menuPrices, menuCount);
    const orderAmountBeforeDiscount = generateOrderAmountBeforeDiscount(orderMenusInfo);
    const benefitTotalAmount = calculateBenefitTotalAmount(
      visitDate,
      orderMenusInfo,
      dayOfWeek,
      orderAmountBeforeDiscount,
    );
    const result = calculateOrderAmountAfterDiscount(orderAmountBeforeDiscount, benefitTotalAmount);
    expect(result).toEqual(expectedValue);
  });
});
