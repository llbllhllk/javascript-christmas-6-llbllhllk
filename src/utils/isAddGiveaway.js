import CONSTANTS from '../constants/constants.js';

const isAddGiveaway = orderAmountBeforeDiscount => {
  if (orderAmountBeforeDiscount >= CONSTANTS.number.minTotalAmountForGiveaway) return true;
  return false;
};

export default isAddGiveaway;
