import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import formatPriceWithCommas from '../utils/formatPriceWithCommas.js';
import CONSTANTS from '../constants/constants.js';

const OutputView = {
  printGreeting() {
    Console.print(MESSAGE.print.greeting);
  },

  printNotification(visitDate) {
    Console.print(`12월 ${visitDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`);
  },

  printOrderMenu(orderMenus) {
    Console.print(MESSAGE.print.orderMenuResult);
    orderMenus.forEach(orderMenu => Console.print(`${orderMenu[0]} ${orderMenu[1]}개`));
  },

  printOrderAmountBeforeDiscount(beforeDiscount) {
    Console.print(MESSAGE.print.orderAmountBeforeDiscountResult);
    Console.print(`${formatPriceWithCommas(beforeDiscount)}`);
  },

  printGiveawayMenu(isAddGiveaway) {
    Console.print(MESSAGE.print.giveawayMenuResult);
    if (isAddGiveaway) return Console.print(MESSAGE.print.giveawayMenuTrueResult);
    return Console.print(MESSAGE.print.noResult);
  },

  printDDayDiscountAmount(dDayDiscount) {
    if (dDayDiscount !== false)
      return Console.print(`크리스마스 디데이 할인: ${formatPriceWithCommas(dDayDiscount)}`);
    return false;
  },

  printWeekDayDiscountAmount(weekDayDiscount) {
    if (weekDayDiscount !== false && weekDayDiscount !== 0)
      return Console.print(`평일 할인: ${formatPriceWithCommas(weekDayDiscount)}`);
    return false;
  },

  printWeekEndDiscountAmount(weekEndDiscount) {
    if (weekEndDiscount !== false && weekEndDiscount !== 0)
      return Console.print(`주말 할인: ${formatPriceWithCommas(weekEndDiscount)}`);
    return false;
  },

  printSpecialDiscountAmount(specialDiscount) {
    if (specialDiscount !== false)
      return Console.print(`특별 할인: ${formatPriceWithCommas(specialDiscount)}`);
    return false;
  },

  printGiveawyDiscountAmout(giveawayDiscount) {
    if (giveawayDiscount !== false)
      return Console.print(`증정 이벤트: ${formatPriceWithCommas(giveawayDiscount)}`);
    return false;
  },

  printBenefitHistory(dDay, weekDay, weekEnd, special, giveawayDiscount) {
    Console.print(MESSAGE.print.benefitHistoryResult);
    const discountAmounts = [
      OutputView.printDDayDiscountAmount(dDay),
      OutputView.printWeekDayDiscountAmount(weekDay),
      OutputView.printWeekEndDiscountAmount(weekEnd),
      OutputView.printSpecialDiscountAmount(special),
      OutputView.printGiveawyDiscountAmout(giveawayDiscount),
    ];
    const allFalse = discountAmounts.every(amount => amount === false);
    if (allFalse) Console.print(MESSAGE.print.noResult);
  },

  printBenefitTotalAmount(totalDiscount, giveawayDiscount) {
    Console.print(MESSAGE.print.benefitTotalAmountResult);
    const benefitTotalAmount = totalDiscount + giveawayDiscount;
    Console.print(formatPriceWithCommas(benefitTotalAmount));
  },

  printEventBadge(eventBadge) {
    Console.print(MESSAGE.print.eventBadgeResult);
    if (eventBadge !== undefined) return Console.print(CONSTANTS.badge[eventBadge]);
    return Console.print(MESSAGE.print.noResult);
  },

  printOrderAmountAfterDiscount(afterDiscount) {
    Console.print(MESSAGE.print.orderAmountAfterDiscountResult);
    Console.print(formatPriceWithCommas(afterDiscount));
  },
};

export default OutputView;
