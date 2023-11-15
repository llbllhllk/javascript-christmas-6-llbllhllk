import CONSTANTS from '../constants/constants.js';
import MENU from '../constants/menu.js';

class Benefit {
  static calculateDDayDiscount(visitDate) {
    if (visitDate <= CONSTANTS.day.christmasDay)
      return -(
        CONSTANTS.price.dDayDiscountStartAmount +
        (visitDate - CONSTANTS.day.initialOffset) * CONSTANTS.price.dDayMultiplier
      );
    return false;
  }

  static calculateWeekDayDiscount(orderMenusInfo, dayOfWeek) {
    if (dayOfWeek >= CONSTANTS.week.sunday && dayOfWeek <= CONSTANTS.week.thursday)
      return this.#calculateWeeksDiscount(orderMenusInfo, MENU.type.dessert);
    return false;
  }

  static calculateWeekEndDiscount(orderMenusInfo, dayOfWeek) {
    if (dayOfWeek >= CONSTANTS.week.friday && dayOfWeek <= CONSTANTS.week.saturday)
      return this.#calculateWeeksDiscount(orderMenusInfo, MENU.type.main);
    return false;
  }

  static calculateSpecialDiscount(visitDate, dayOfWeek) {
    if (dayOfWeek === CONSTANTS.week.sunday || visitDate === CONSTANTS.day.christmasDay)
      return -CONSTANTS.price.specialDiscountAmount;
    return false;
  }

  static #calculateWeeksDiscount(orderMenusInfo, curType) {
    return -orderMenusInfo
      .filter(orderMenuInfo => MENU.menu[MENU.menuName[orderMenuInfo[0]]].type === curType)
      .reduce((acc, cur) => acc + cur[2] * CONSTANTS.price.discountAmount, 0);
  }

  static getEventBadge(benefitTotalAmount) {
    const { starThreshold, treeThreshold, santaThreshold } = CONSTANTS.badgeMinPrice;
    const positiveBenefitTotalAmount = Math.abs(benefitTotalAmount);
    if (positiveBenefitTotalAmount >= starThreshold && positiveBenefitTotalAmount < treeThreshold)
      return 'star';
    if (positiveBenefitTotalAmount >= treeThreshold && positiveBenefitTotalAmount < santaThreshold)
      return 'tree';
    if (positiveBenefitTotalAmount >= santaThreshold) return 'santa';
    return undefined;
  }
}

export default Benefit;
