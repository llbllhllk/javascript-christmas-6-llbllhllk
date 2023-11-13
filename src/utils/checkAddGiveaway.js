import CONSTANTS from '../constants/constants.js';

const checkAddGiveaway = orderAmountBeforeDiscount => {
  if (orderAmountBeforeDiscount >= CONSTANTS.price.minTotalAmountForGiveaway) return true;
  return false;
};

export default checkAddGiveaway;
