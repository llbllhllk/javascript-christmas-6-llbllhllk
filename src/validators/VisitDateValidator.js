import { Console } from '@woowacourse/mission-utils';
import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

class VisitDateValidator {
  static validateVisitDate(day) {
    const validators = [this.#validateOutOfRangeDay];
    validators.forEach(validator => validator(day));
  }

  static #validateOutOfRangeDay(day) {
    if (isNaN(day) || Number(day) < CONSTANTS.day.minDay || Number(day) > CONSTANTS.day.maxDay)
      throw new Error(ERROR.visitDate.OUT_OF_RANGE_DAY);
  }
}

export default VisitDateValidator;
