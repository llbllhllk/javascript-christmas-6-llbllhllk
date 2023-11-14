import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import generateOrderAmountBeforeDiscount from '../utils/generateOrderAmountBeforeDiscount.js';
import formatPriceWithCommas from '../utils/formatPriceWithCommas.js';
import checkAddGiveaway from '../utils/checkAddGiveaway.js';
import calculateDDayDiscount from '../utils/calculateDDayDiscount.js';
import calculateWeekDayDiscount from '../utils/calculateWeekDayDiscount.js';
import calculateSpecialDiscount from '../utils/calculateSpecialDiscount.js';
import calculateWeekEndDiscount from '../utils/calculateWeekEndDiscount.js';
import calculateGiveawyDiscountAmount from '../utils/calculateGiveawyDiscountAmount.js';
import calculateDiscountTotalAmount from '../utils/calculateDiscountTotalAmount.js';
import generateEventBadge from '../utils/generateEventBadge.js';
import CONSTANTS from '../constants/constants.js';
import calculateOrderAmountAfterDiscount from '../utils/calculateOrderAmountAfterDiscount.js';

const OutputView = {
  printNotification(visitDate) {
    Console.print(`12월 ${visitDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`);
  },

  printOrderMenu(orderMenus) {
    Console.print(MESSAGE.print.orderMenuResult);
    orderMenus.forEach(orderMenu => Console.print(`${orderMenu[0]} ${orderMenu[1]}개`));
  },

  printOrderAmountBeforeDiscount(orderMenusInfo) {
    Console.print(MESSAGE.print.orderAmountBeforeDiscountResult);
    const orderAmountBeforeDiscount = generateOrderAmountBeforeDiscount(orderMenusInfo);
    Console.print(`${formatPriceWithCommas(orderAmountBeforeDiscount)}`);
  },

  printGiveawayMenu(orderMenusInfo) {
    Console.print(MESSAGE.print.giveawayMenuResult);
    const orderAmountBeforeDiscount = generateOrderAmountBeforeDiscount(orderMenusInfo);
    if (checkAddGiveaway(orderAmountBeforeDiscount))
      return Console.print(MESSAGE.print.giveawayMenuTrueResult);
    return Console.print(MESSAGE.print.noResult);
  },

  printDDayDiscountAmount(visitDate) {
    const dDayDiscountAmount = calculateDDayDiscount(visitDate);
    if (dDayDiscountAmount !== false)
      return Console.print(`크리스마스 디데이 할인: ${formatPriceWithCommas(dDayDiscountAmount)}`);
    return false;
  },

  printWeekDayDiscountAmount(orderMenusInfo, dayOfWeek) {
    const weekDayDiscountAmount = calculateWeekDayDiscount(orderMenusInfo, dayOfWeek);
    if (weekDayDiscountAmount !== false && weekDayDiscountAmount !== 0)
      return Console.print(`평일 할인: ${formatPriceWithCommas(weekDayDiscountAmount)}`);
    return false;
  },

  printWeekEndDiscountAmount(orderMenusInfo, dayOfWeek) {
    const weekEndDiscountAmount = calculateWeekEndDiscount(orderMenusInfo, dayOfWeek);
    if (weekEndDiscountAmount !== false && weekEndDiscountAmount !== 0)
      return Console.print(`주말 할인: ${formatPriceWithCommas(weekEndDiscountAmount)}`);
    return false;
  },

  printSpecialDiscountAmount(visitDate, dayOfWeek) {
    const specialDiscountAmount = calculateSpecialDiscount(visitDate, dayOfWeek);
    if (specialDiscountAmount !== false)
      return Console.print(`특별 할인: ${formatPriceWithCommas(specialDiscountAmount)}`);
    return false;
  },

  printGiveawyDiscountAmout(orderAmountBeforeDiscount) {
    const giveawayDiscountAmount = calculateGiveawyDiscountAmount(orderAmountBeforeDiscount);
    if (giveawayDiscountAmount !== false)
      return Console.print(`증정 이벤트: ${formatPriceWithCommas(giveawayDiscountAmount)}`);
    return false;
  },

  printBenefitHistory(orderAmountBeforeDiscount, orderMenusInfo, visitDate, dayOfWeek) {
    Console.print(MESSAGE.print.benefitHistoryResult);
    const discountAmounts = [
      OutputView.printDDayDiscountAmount(visitDate),
      OutputView.printWeekDayDiscountAmount(orderMenusInfo, dayOfWeek),
      OutputView.printWeekEndDiscountAmount(orderMenusInfo, dayOfWeek),
      OutputView.printSpecialDiscountAmount(visitDate, dayOfWeek),
      OutputView.printGiveawyDiscountAmout(orderAmountBeforeDiscount),
    ];
    const allFalse = discountAmounts.every(amount => amount === false);
    if (allFalse) Console.print(MESSAGE.print.noResult);
  },

  printBenefitTotalAmount(visitDate, orderMenusInfo, dayOfWeek, orderAmountBeforeDiscount) {
    Console.print(MESSAGE.print.benefitTotalAmountResult);
    const discountTotalAmount = calculateDiscountTotalAmount(visitDate, orderMenusInfo, dayOfWeek);
    const giveawayDiscountAmount = calculateGiveawyDiscountAmount(orderAmountBeforeDiscount);
    const benefitTotalAmount = discountTotalAmount + giveawayDiscountAmount;
    Console.print(formatPriceWithCommas(benefitTotalAmount));
  },

  printEventBadge(visitDate, orderMenusInfo, dayOfWeek, orderAmountBeforeDiscount) {
    Console.print(MESSAGE.print.eventBadgeResult);
    const discountTotalAmount = calculateDiscountTotalAmount(visitDate, orderMenusInfo, dayOfWeek);
    const giveawayDiscountAmount = calculateGiveawyDiscountAmount(orderAmountBeforeDiscount);
    const benefitTotalAmount = discountTotalAmount + giveawayDiscountAmount;
    const eventBadge = generateEventBadge(benefitTotalAmount);
    if (eventBadge !== undefined) return Console.print(CONSTANTS.badge[eventBadge]);
    return Console.print(MESSAGE.print.noResult);
  },

  printOrderAmountAfterDiscount(visitDate, orderMenusInfo, dayOfWeek, orderAmountBeforeDiscount) {
    Console.print(MESSAGE.print.orderAmountAfterDiscountResult);
    const discountTotalAmount = calculateDiscountTotalAmount(visitDate, orderMenusInfo, dayOfWeek);
    const orderAmountAfterDiscount = calculateOrderAmountAfterDiscount(
      orderAmountBeforeDiscount,
      discountTotalAmount,
    );
    Console.print(formatPriceWithCommas(orderAmountAfterDiscount));
  },
};

export default OutputView;
