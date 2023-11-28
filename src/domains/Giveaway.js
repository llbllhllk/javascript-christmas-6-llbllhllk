import CONSTANTS from '../constants/constants.js';
import MENU from '../constants/menu.js';

class Giveaway {
  static checkAddGiveaway(orderAmountBeforeDiscount) {
    if (orderAmountBeforeDiscount >= CONSTANTS.price.minTotalAmountForGiveaway) return true;
    return false;
  }

  static calculateGiveawyDiscountAmount(orderAmountBeforeDiscount) {
    const isAddGiveaway = this.checkAddGiveaway(orderAmountBeforeDiscount);
    if (isAddGiveaway) return -MENU.menu[MENU.menuName.champagne].price;
    return false;
  }
}

export default Giveaway;
