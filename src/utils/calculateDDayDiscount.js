import CONSTANTS from '../constants/constants.js';

const calculateDDayDiscount = visitDate => {
  if (visitDate <= CONSTANTS.day.christmasDay)
    return -(
      CONSTANTS.price.dDayDiscountStartAmount +
      (visitDate - CONSTANTS.day.initialOffset) * CONSTANTS.price.dDayMultiplier
    );

  return false;
};

export default calculateDDayDiscount;
