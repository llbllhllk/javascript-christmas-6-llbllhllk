import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import VisitDateValidator from '../validators/VisitDateValidator.js';
import OrderMenuValidator from '../validators/OrderMenuValidator.js';

const InputView = {
  async readVisitDate() {
    const visitDate = await Console.readLineAsync(MESSAGE.read.visitDate);
    VisitDateValidator.validateVisitDate(visitDate);
    return Number(visitDate);
  },

  async readOrderMenu() {
    const orderMenus = await Console.readLineAsync(MESSAGE.read.orderMenu);
    OrderMenuValidator.validateOrderMenu(orderMenus);
    return orderMenus.split(',').map(item => item.split('-'));
  },
};

export default InputView;
