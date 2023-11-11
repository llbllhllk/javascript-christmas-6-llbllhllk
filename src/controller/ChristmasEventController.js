import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';

class ChristmasEventController {
  constructor() {}

  static async start() {
    const visitDate = await this.#inputVisitDate(); 
  }

  static async #inputVisitDate() {
    return InputView.readVisitDate();
  }
}

export default ChristmasEventController;
