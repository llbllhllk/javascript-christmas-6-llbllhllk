import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import generateOrderAmountBeforeDiscount from '../utils/generateOrderAmountBeforeDiscount.js';

class ChristmasEventController {
  constructor() {}

  static async start() {
    const visitDate = await this.#inputVisitDate();
    const orderMenus = await this.#inputOrderMenu();

    OutputView.printNotification(visitDate);
    OutputView.printOrderMenu(orderMenus);
    OutputView.printOrderAmountBeforeDiscount(orderMenus);
    OutputView.printGiveawayMenu(orderMenus);
    OutputView.printBenefitHistory(orderMenus, visitDate);
  }

  static async #inputVisitDate() {
    return InputView.readVisitDate();
  }

  static async #inputOrderMenu() {
    return InputView.readOrderMenu();
  }
}

export default ChristmasEventController;
