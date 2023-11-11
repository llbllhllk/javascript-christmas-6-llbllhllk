import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import VisitDateValidator from '../validators/VisitDateValidator.js';

const InputView = {
  async readVisitDate() {
    const visitDate = await Console.readLineAsync(MESSAGE.read.visitDate);
    VisitDateValidator.validateVisitDate(visitDate);
    return visitDate;
  },

  async readOrderMenu() {
    return Console.readLineAsync(MESSAGE.read.orderMenu);
  },
};

export default InputView;
