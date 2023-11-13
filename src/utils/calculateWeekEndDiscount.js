import MENU from '../constants/menu.js';
import CONSTANTS from '../constants/constants.js';

const calculateWeekEndDiscount = (orderMenusInfo, dayOfWeek) => {
  if (dayOfWeek >= CONSTANTS.week.friday && dayOfWeek <= CONSTANTS.week.saturday)
    return -orderMenusInfo
      .filter(
        orderMenuInfo => MENU.menu[MENU.menuName[orderMenuInfo[0]]]['type'] === MENU.type.main,
      )
      .reduce((acc, cur) => (acc += cur[2] * CONSTANTS.price.discountAmount), 0);
  return false;
};

export default calculateWeekEndDiscount;
