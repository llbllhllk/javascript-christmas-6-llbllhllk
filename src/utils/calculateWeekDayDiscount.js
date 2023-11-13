import CONSTANTS from '../constants/constants.js';
import MENU from '../constants/menu.js';
import getDayOfWeek from './getDayOfWeek.js';

const calculateWeekDayDiscount = (menuNames, visitDate) => {
  const dayOfWeek = getDayOfWeek(visitDate);
  if (dayOfWeek >= CONSTANTS.week.monday && dayOfWeek <= CONSTANTS.week.thursday) {
    return (
      -menuNames.filter(
        menuName => MENU.menu[MENU.menuName[menuName]]['type'] === MENU.type.dessert,
      ).length * CONSTANTS.price.discountAmount
    );
  }
  return false;
};

export default calculateWeekDayDiscount;
