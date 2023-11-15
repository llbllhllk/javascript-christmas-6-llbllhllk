import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import formatPriceWithCommas from '../utils/formatPriceWithCommas.js';
import OrderAmount from '../domains/OrderAmount.js';
import Giveaway from '../domains/Giveaway.js';
import CONSTANTS from '../constants/constants.js';
import Benefit from '../domains/Benefit.js';

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

  printOrderAmountBeforeDiscount(orderAmountBeforeDiscount) {
    Console.print(MESSAGE.print.orderAmountBeforeDiscountResult);
    Console.print(`${formatPriceWithCommas(orderAmountBeforeDiscount)}`);
  },

  printGiveawayMenu(orderAmountBeforeDiscount) {
    Console.print(MESSAGE.print.giveawayMenuResult);
    if (Giveaway.checkAddGiveaway(orderAmountBeforeDiscount))
      return Console.print(MESSAGE.print.giveawayMenuTrueResult);
    return Console.print(MESSAGE.print.noResult);
  },

  printDDayDiscountAmount(visitDate) {
    const dDayDiscountAmount = Benefit.calculateDDayDiscount(visitDate);
    if (dDayDiscountAmount !== false)
      return Console.print(`크리스마스 디데이 할인: ${formatPriceWithCommas(dDayDiscountAmount)}`);
    return false;
  },

  printWeekDayDiscountAmount(orderManager) {
    const weekDayDiscountAmount = Benefit.calculateWeekDayDiscount(
      orderManager.getMenusInfo(),
      orderManager.getDayOfWeek(),
    );
    if (weekDayDiscountAmount !== false && weekDayDiscountAmount !== 0)
      return Console.print(`평일 할인: ${formatPriceWithCommas(weekDayDiscountAmount)}`);
    return false;
  },

  printWeekEndDiscountAmount(orderManager) {
    const weekEndDiscountAmount = Benefit.calculateWeekEndDiscount(
      orderManager.getMenusInfo(),
      orderManager.getDayOfWeek(),
    );
    if (weekEndDiscountAmount !== false && weekEndDiscountAmount !== 0)
      return Console.print(`주말 할인: ${formatPriceWithCommas(weekEndDiscountAmount)}`);
    return false;
  },

  printSpecialDiscountAmount(visitDate, orderManager) {
    const specialDiscountAmount = Benefit.calculateSpecialDiscount(
      visitDate,
      orderManager.getDayOfWeek(),
    );
    if (specialDiscountAmount !== false)
      return Console.print(`특별 할인: ${formatPriceWithCommas(specialDiscountAmount)}`);
    return false;
  },

  printGiveawyDiscountAmout(orderManager) {
    const orderAmountBeforeDiscount = OrderAmount.calculateAmountBeforeDiscount(
      orderManager.getMenusInfo(),
    );
    const giveawayDiscountAmount =
      Giveaway.calculateGiveawyDiscountAmount(orderAmountBeforeDiscount);
    if (giveawayDiscountAmount !== false)
      return Console.print(`증정 이벤트: ${formatPriceWithCommas(giveawayDiscountAmount)}`);
    return false;
  },

  printBenefitHistory(orderManager, visitDate) {
    Console.print(MESSAGE.print.benefitHistoryResult);
    const discountAmounts = [
      OutputView.printDDayDiscountAmount(visitDate),
      OutputView.printWeekDayDiscountAmount(orderManager),
      OutputView.printWeekEndDiscountAmount(orderManager),
      OutputView.printSpecialDiscountAmount(visitDate, orderManager),
      OutputView.printGiveawyDiscountAmout(orderManager),
    ];
    const allFalse = discountAmounts.every(amount => amount === false);
    if (allFalse) Console.print(MESSAGE.print.noResult);
  },

  printBenefitTotalAmount(visitDate, orderManager, orderAmountBeforeDiscount) {
    Console.print(MESSAGE.print.benefitTotalAmountResult);
    const discountTotalAmount = OrderAmount.calculateDiscountTotalAmount(
      visitDate,
      orderManager.getMenusInfo(),
      orderManager.getDayOfWeek(),
    );
    const giveawayDiscountAmount =
      Giveaway.calculateGiveawyDiscountAmount(orderAmountBeforeDiscount);
    const benefitTotalAmount = discountTotalAmount + giveawayDiscountAmount;
    Console.print(formatPriceWithCommas(benefitTotalAmount));
  },

  printEventBadge(visitDate, orderManager, orderAmountBeforeDiscount) {
    Console.print(MESSAGE.print.eventBadgeResult);
    const discountTotalAmount = OrderAmount.calculateDiscountTotalAmount(
      visitDate,
      orderManager.getMenusInfo(),
      orderManager.getDayOfWeek(),
    );
    const giveawayDiscountAmount =
      Giveaway.calculateGiveawyDiscountAmount(orderAmountBeforeDiscount);
    const benefitTotalAmount = discountTotalAmount + giveawayDiscountAmount;
    const eventBadge = Benefit.getEventBadge(benefitTotalAmount);
    if (eventBadge !== undefined) return Console.print(CONSTANTS.badge[eventBadge]);
    return Console.print(MESSAGE.print.noResult);
  },

  printOrderAmountAfterDiscount(visitDate, orderManager, orderAmountBeforeDiscount) {
    Console.print(MESSAGE.print.orderAmountAfterDiscountResult);
    const discountTotalAmount = OrderAmount.calculateDiscountTotalAmount(
      visitDate,
      orderManager.getMenusInfo(),
      orderManager.getDayOfWeek(),
    );
    const orderAmountAfterDiscount = OrderAmount.calculateOrderAmountAfterDiscount(
      orderAmountBeforeDiscount,
      discountTotalAmount,
    );
    Console.print(formatPriceWithCommas(orderAmountAfterDiscount));
  },
};

export default OutputView;
