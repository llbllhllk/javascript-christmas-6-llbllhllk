import calculateDDayDiscount from './calculateDDayDiscount.js';
import calculateGiveawyDiscountAmount from './calculateGiveawyDiscountAmount.js';
import calculateSpecialDiscount from './calculateSpecialDiscount.js';
import calculateWeekDayDiscount from './calculateWeekDayDiscount.js';
import calculateWeekEndDiscount from './calculateWeekEndDiscount.js';

const calculateBenefitTotalAmount = (
  visitDate,
  orderMenusInfo,
  dayOfWeek,
  orderAmountBeforeDiscount,
) => {
  const benefitDiscounts = [
    calculateDDayDiscount(visitDate),
    calculateWeekDayDiscount(orderMenusInfo, dayOfWeek),
    calculateWeekEndDiscount(orderMenusInfo, dayOfWeek),
    calculateSpecialDiscount(visitDate, dayOfWeek),
    calculateGiveawyDiscountAmount(orderAmountBeforeDiscount),
  ];
  return benefitDiscounts
    .filter(benefitDiscount => benefitDiscount !== false)
    .reduce((acc, cur) => (acc += cur), 0);
};

export default calculateBenefitTotalAmount;
