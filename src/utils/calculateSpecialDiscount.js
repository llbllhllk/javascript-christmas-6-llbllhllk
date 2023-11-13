import CONSTANTS from '../constants/constants.js';

const calculateSpecialDiscount = (visitDate, dayOfWeek) => {
  if (dayOfWeek === CONSTANTS.week.sunday || visitDate === CONSTANTS.day.christmasDay)
    return -CONSTANTS.price.specialDiscountAmount;
  return false;
};

export default calculateSpecialDiscount;
