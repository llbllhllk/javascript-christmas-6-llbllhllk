import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class ChristmasEventController {
  constructor() {}

  static async start() {
    const visitDate = await this.#inputVisitDate();
    const orderMenu = await this.#inputOrderMenu();

    OutputView.printMenu(visitDate);
  }

  static async #inputVisitDate() {
    return InputView.readVisitDate();
  }

  static async #inputOrderMenu() {
    return InputView.readOrderMenu();
  }
}

export default ChristmasEventController;
