import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

class VisitDateValidator {
  static validateVisitDate(visitDate) {
    const validators = [this.validateOutOfRangeDay];
    validators.forEach(validator => validator(visitDate));
  }

  static validateOutOfRangeDay(visitDate) {
    if (
      Number.isNaN(visitDate) ||
      Number(visitDate) < CONSTANTS.day.minDay ||
      Number(visitDate) > CONSTANTS.day.maxDay
    )
      throw new Error(ERROR.visitDate.outOfRangeDay);
  }
}

export default VisitDateValidator;
