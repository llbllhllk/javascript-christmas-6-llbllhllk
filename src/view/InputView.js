import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import VisitDateValidator from '../validators/VisitDateValidator.js';
import OrderMenuValidator from '../validators/OrderMenuValidator.js';
import reTry from '../utils/reTry.js';

const InputView = {
  async readVisitDate() {
    return reTry(async () => {
      const input = await Console.readLineAsync(MESSAGE.read.visitDate);
      const visitDate = Number(input);
      VisitDateValidator.validateVisitDate(visitDate);
      return Number(visitDate);
    });
  },

  async readOrderMenu() {
    return reTry(async () => {
      const input = await Console.readLineAsync(MESSAGE.read.orderMenu);
      const orderMenus = input
        .split(',')
        .map(menu => menu.trim())
        .map(menu => menu.split('-'))
        .map(menuAndCount => menuAndCount.map(str => str.trim()));
      OrderMenuValidator.validateOrderMenu(orderMenus);
      return orderMenus;
    });
  },
};

export default InputView;
