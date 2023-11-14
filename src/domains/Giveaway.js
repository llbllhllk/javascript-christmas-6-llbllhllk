import CONSTANTS from '../constants/constants.js';

class Giveaway {
  static checkAddGiveaway(orderAmountBeforeDiscount) {
    if (orderAmountBeforeDiscount >= CONSTANTS.price.minTotalAmountForGiveaway) return true;
    return false;
  }
}

export default Giveaway;
