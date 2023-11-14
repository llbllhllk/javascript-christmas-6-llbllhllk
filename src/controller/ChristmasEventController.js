import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import generateMenuNames from '../utils/generateMenuNames.js';
import generateMenuPrices from '../utils/generateMenuPrices.js';
import generateMenuCount from '../utils/generateMenuCount.js';
import generateMenusInfo from '../utils/generateMenusInfo.js';
import getDayOfWeek from '../utils/getDayOfWeek.js';
import generateOrderAmountBeforeDiscount from '../utils/generateOrderAmountBeforeDiscount.js';

class ChristmasEventController {
  constructor() {}

  static async start() {
    const visitDate = await this.#inputVisitDate();
    const orderMenus = await this.#inputOrderMenu();

    const dayOfWeek = getDayOfWeek(visitDate);
    const menuNames = generateMenuNames(orderMenus);
    const menuPrices = generateMenuPrices(menuNames);
    const menuCount = generateMenuCount(orderMenus);
    const orderMenusInfo = generateMenusInfo(menuNames, menuPrices, menuCount);
    const orderAmountBeforeDiscount = generateOrderAmountBeforeDiscount(orderMenusInfo);

    OutputView.printNotification(visitDate);
    OutputView.printOrderMenu(orderMenus);
    OutputView.printOrderAmountBeforeDiscount(orderMenusInfo);
    OutputView.printGiveawayMenu(orderMenusInfo);
    OutputView.printBenefitHistory(orderAmountBeforeDiscount, orderMenusInfo, visitDate, dayOfWeek);
  }

  static async #inputVisitDate() {
    return InputView.readVisitDate();
  }

  static async #inputOrderMenu() {
    return InputView.readOrderMenu();
  }
}

export default ChristmasEventController;
