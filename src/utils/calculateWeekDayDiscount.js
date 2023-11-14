import CONSTANTS from '../constants/constants.js';
import MENU from '../constants/menu.js';

const calculateWeekDayDiscount = (orderMenusInfo, dayOfWeek) => {
  if (dayOfWeek >= CONSTANTS.week.sunday && dayOfWeek <= CONSTANTS.week.thursday)
    return -orderMenusInfo
      .filter(
        orderMenuInfo => MENU.menu[MENU.menuName[orderMenuInfo[0]]]['type'] === MENU.type.dessert,
      )
      .reduce((acc, cur) => (acc += cur[2] * CONSTANTS.price.discountAmount), 0);
  return false;
};

export default calculateWeekDayDiscount;
