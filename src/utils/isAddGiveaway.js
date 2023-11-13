import CONSTANTS from '../constants/constants.js';

const isAddGiveaway = orderAmountBeforeDiscount => {
  if (orderAmountBeforeDiscount >= CONSTANTS.price.minTotalAmountForGiveaway) return true;
  return false;
};

export default isAddGiveaway;
