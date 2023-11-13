import CONSTANTS from '../constants/constants.js';
import getDayOfWeek from './getDayOfWeek.js';

const calculateSpecialDiscount = visitDate => {
  const dayOfWeek = getDayOfWeek(visitDate); 
  if (dayOfWeek === CONSTANTS.week.sunday || visitDate === CONSTANTS.day.christmasDay)
    return -CONSTANTS.price.specialDiscountAmount;
  return false;
};

export default calculateSpecialDiscount;
