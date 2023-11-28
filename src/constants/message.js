const read = {
  visitDate: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  orderMenu:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
};

const print = {
  greeting: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  orderMenuResult: '<주문 메뉴>',
  orderAmountBeforeDiscountResult: '\n<할인 전 총주문 금액>',
  giveawayMenuResult: '\n<증정 메뉴>',
  benefitHistoryResult: '\n<혜택 내역>',
  benefitTotalAmountResult: '\n<총혜택 금액>',
  eventBadgeResult: '\n<12월 이벤트 배지>',
  orderAmountAfterDiscountResult: '\n<할인 후 예상 결제 금액>',
  giveawayMenuTrueResult: '샴페인 1개',
  noResult: '없음',
};

const MESSAGE = Object.freeze({
  read,
  print,
});

export default MESSAGE;
