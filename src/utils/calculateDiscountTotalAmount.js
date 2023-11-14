import calculateDDayDiscount from './calculateDDayDiscount.js';
import calculateSpecialDiscount from './calculateSpecialDiscount.js';
import calculateWeekDayDiscount from './calculateWeekDayDiscount.js';
import calculateWeekEndDiscount from './calculateWeekEndDiscount.js';

const calculateDiscountTotalAmount = (visitDate, orderMenusInfo, dayOfWeek) => {
  return [
    calculateDDayDiscount(visitDate),
    calculateWeekDayDiscount(orderMenusInfo, dayOfWeek),
    calculateWeekEndDiscount(orderMenusInfo, dayOfWeek),
    calculateSpecialDiscount(visitDate, dayOfWeek),
  ]
    .filter(benefitDiscount => benefitDiscount !== false)
    .reduce((acc, cur) => (acc += cur), 0);
};

export default calculateDiscountTotalAmount;
