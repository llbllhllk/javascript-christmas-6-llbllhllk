import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import VisitDateValidator from '../validators/VisitDateValidator.js';
import OrderMenuValidator from '../validators/OrderMenuValidator.js';

const InputView = {
  async readVisitDate() {
    while (true) {
      try {
        const visitDate = await Console.readLineAsync(MESSAGE.read.visitDate);
        // VisitDateValidator.validateVisitDate(visitDate);
        return Number(visitDate);
      } catch ({ message }) {
        Console.print(message);
      }
    }
  },

  async readOrderMenu() {
    while (true) {
      try {
        const orderMenus = await Console.readLineAsync(MESSAGE.read.orderMenu);
        // OrderMenuValidator.validateOrderMenu(orderMenus);
        return orderMenus
          .split(',')
          .map(menu => menu.trim())
          .map(menu => menu.split('-'))
          .map(menuAndCount => menuAndCount.map(str => str.trim()));
      } catch ({ message }) {
        Console.print(message);
      }
    }
  },
};

export default InputView;
