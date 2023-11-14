import checkAddGiveaway from './checkAddGiveaway.js';
import MENU from '../constants/menu.js';

const calculateGiveawyDiscountAmount = orderAmountBeforeDiscount => {
  const isAddGiveaway = checkAddGiveaway(orderAmountBeforeDiscount);
  if (isAddGiveaway) return -MENU.menu[MENU.menuName['champagne']].price;
  return false;
};

export default calculateGiveawyDiscountAmount;
