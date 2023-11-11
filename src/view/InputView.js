import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  async readVisitDate() {
    return Console.readLineAsync(MESSAGE.read.visitDate);
  },
};

export default InputView;
