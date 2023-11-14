import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import generateMenuNames from '../utils/generateMenuNames.js';
import generateMenuPrices from '../utils/generateMenuPrices.js';
import generateOrderAmountBeforeDiscount from '../utils/generateOrderAmountBeforeDiscount.js';
import formatPriceWithCommas from '../utils/formatPriceWithCommas.js';
import checkAddGiveaway from '../utils/checkAddGiveaway.js';
import calculateDDayDiscount from '../utils/calculateDDayDiscount.js';
import calculateWeekDayDiscount from '../utils/calculateWeekDayDiscount.js';
import calculateSpecialDiscount from '../utils/calculateSpecialDiscount.js';
import calculateWeekEndDiscount from '../utils/calculateWeekEndDiscount.js';
import MENU from '../constants/menu.js';

const OutputView = {
  printNotification(visitDate) {
    Console.print(`12월 ${visitDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`);
  },

  printOrderMenu(orderMenus) {
    Console.print(MESSAGE.print.orderMenuResult);
    orderMenus.forEach(orderMenu => Console.print(`${orderMenu[0]} ${orderMenu[1]}개`));
    Console.print('\n');
  },

  printOrderAmountBeforeDiscount(orderMenusInfo) {
    Console.print(MESSAGE.print.orderAmountBeforeDiscountResult);
    const orderAmountBeforeDiscount = generateOrderAmountBeforeDiscount(orderMenusInfo);
    Console.print(formatPriceWithCommas(orderAmountBeforeDiscount));
    Console.print('\n');
  },

  printGiveawayMenu(orderMenus) {
    Console.print(MESSAGE.print.giveawayMenuResult);
    const menuNames = generateMenuNames(orderMenus);
    const menuPrices = generateMenuPrices(menuNames);
    const orderAmountBeforeDiscount = generateOrderAmountBeforeDiscount(menuPrices);
    if (checkAddGiveaway(orderAmountBeforeDiscount))
      return Console.print(MESSAGE.print.giveawayMenuTrueResult);
    return Console.print(MESSAGE.print.noResult);
  },

  printBenefitHistory(orderAmountBeforeDiscount, orderMenusInfo, visitDate, dayOfWeek) {
    Console.print(MESSAGE.print.benefitHistoryResult);
    OutputView.printDDayDiscountAmount(visitDate);
    OutputView.printWeekDayDiscountAmount(orderMenusInfo, dayOfWeek);
    OutputView.printWeekEndDiscountAmount(orderMenusInfo, dayOfWeek);
    OutputView.printSpecialDiscountAmount(visitDate, dayOfWeek);
    OutputView.printGiveawyDiscountAmout(orderAmountBeforeDiscount);
  },

  printDDayDiscountAmount(visitDate) {
    const dDayDiscountAmount = calculateDDayDiscount(visitDate);
    if (dDayDiscountAmount !== false)
      Console.print(`크리스마스 디데이 할인: ${formatPriceWithCommas(dDayDiscountAmount)}
  `);
  },

  printWeekDayDiscountAmount(orderMenusInfo, dayOfWeek) {
    const weekDayDiscountAmount = calculateWeekDayDiscount(orderMenusInfo, dayOfWeek);
    if (weekDayDiscountAmount !== false)
      Console.print(`평일 할인: ${formatPriceWithCommas(weekDayDiscountAmount)}`);
  },

  printWeekEndDiscountAmount(orderMenusInfo, dayOfWeek) {
    const weekEndDiscountAmount = calculateWeekEndDiscount(orderMenusInfo, dayOfWeek);
    if (weekEndDiscountAmount !== false)
      Console.print(`주말 할인: ${formatPriceWithCommas(weekEndDiscountAmount)}`);
  },

  printSpecialDiscountAmount(visitDate, dayOfWeek) {
    const specialDiscountAmount = calculateSpecialDiscount(visitDate, dayOfWeek);
    if (specialDiscountAmount !== false)
      Console.print(`특별 할인: ${formatPriceWithCommas(specialDiscountAmount)}`);
  },

  printGiveawyDiscountAmout(orderAmountBeforeDiscount) {
    const isAddGiveaway = checkAddGiveaway(orderAmountBeforeDiscount);
    const champagnePrice = formatPriceWithCommas(-MENU.menu[MENU.menuName['champagne']].price);
    if (isAddGiveaway) Console.print(`증정 이벤트: ${champagnePrice}`);
  },
};

export default OutputView;
