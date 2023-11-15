import Benefit from './Benefit.js';

class OrderAmount {
  static calculateAmountBeforeDiscount(menusInfo) {
    return menusInfo.reduce((acc, cur) => (acc += cur[1] * cur[2]), 0);
  }

  static calculateDiscountTotalAmount(visitDate, orderMenusInfo, dayOfWeek) {
    return [
      Benefit.calculateDDayDiscount(visitDate),
      Benefit.calculateWeekDayDiscount(orderMenusInfo, dayOfWeek),
      Benefit.calculateWeekEndDiscount(orderMenusInfo, dayOfWeek),
      Benefit.calculateSpecialDiscount(visitDate, dayOfWeek),
    ]
      .filter(benefitDiscount => benefitDiscount !== false)
      .reduce((acc, cur) => (acc += cur), 0);
  }

  static calculateOrderAmountAfterDiscount(orderAmountBeforeDiscount, discountTotalAmount) {
    return orderAmountBeforeDiscount + discountTotalAmount;
  }
}

export default OrderAmount;
