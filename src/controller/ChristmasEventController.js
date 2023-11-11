import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';

class ChristmasEventController {
  constructor() {}

  static async start() {
    const visitDate = await this.#inputVisitDate();
    const orderMenu = await this.#inputOrderMenu();
  }

  static async #inputVisitDate() {
    return InputView.readVisitDate();
  }

  static async #inputOrderMenu() {
    return InputView.readOrderMenu();
  }
}

export default ChristmasEventController;
