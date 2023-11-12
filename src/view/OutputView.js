import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import generateMenuNames from '../utils/generateMenuNames.js';
import generateMenuPrices from '../utils/generateMenuPrices.js';
import generateOrderAmountBeforeDiscount from '../utils/generateOrderAmountBeforeDiscount.js';
import formatPriceWithCommas from '../utils/formatPriceWithCommas.js';
import isAddGiveaway from '../utils/isAddGiveaway.js';

const OutputView = {
  printNotification(visitDate) {
    Console.print(`12월 ${visitDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`);
  },

  printOrderMenu(orderMenus) {
    Console.print(MESSAGE.print.orderMenuResult);
    orderMenus.forEach(orderMenu => Console.print(`${orderMenu[0]} ${orderMenu[1]}개`));
    Console.print('\n');
  },

  printOrderAmountBeforeDiscount(orderMenus) {
    Console.print(MESSAGE.print.orderAmountBeforeDiscountResult);
    const menuNames = generateMenuNames(orderMenus);
    const menuPrices = generateMenuPrices(menuNames);
    const orderAmountBeforeDiscount = generateOrderAmountBeforeDiscount(menuPrices);
    Console.print(formatPriceWithCommas(orderAmountBeforeDiscount));
    Console.print('\n');
  },

  printGiveawayMenu(orderMenus) {
    Console.print(MESSAGE.print.giveawayMenuResult);
    const menuNames = generateMenuNames(orderMenus);
    const menuPrices = generateMenuPrices(menuNames);
    const orderAmountBeforeDiscount = generateOrderAmountBeforeDiscount(menuPrices);
    if (isAddGiveaway(orderAmountBeforeDiscount))
      return Console.print(MESSAGE.print.giveawayMenuTrueResult);
    return Console.print(MESSAGE.print.noResult);
  },
};

export default OutputView;
