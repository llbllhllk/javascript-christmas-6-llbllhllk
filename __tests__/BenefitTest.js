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
  // 할인 후 예상 결제 금액
  // 이벤트 배지
});
