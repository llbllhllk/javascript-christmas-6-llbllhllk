import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';
import MENU from '../constants/menu.js';

class OrderMenuValidator {
  static validateOrderMenu(orderMenus) {
    const validators = [
      this.validateNoMenu,
      this.validateOrderMenuQuantity,
      this.validateFormat,
      this.validateDuplicatedMenu,
      this.validateAllBeverage,
      this.validateMenuCountAboveThreshold,
      this.validateNaNCount,
    ];
    validators.forEach(validator => validator(orderMenus));
  }

  static validateNoMenu(orderMenus) {
    const menus = orderMenus.map(menuItem => {
      const menu = menuItem[0];
      return Object.keys(MENU.menuName).find(key => MENU.menuName[key] === menu);
    });
    if (menus.includes(undefined)) throw new Error(ERROR.menu.invalidOrder);
  }

  static validateOrderMenuQuantity(orderMenus) {
    orderMenus.map(menuItem => {
      const quantity = Number(menuItem[1]);
      if (quantity < CONSTANTS.menu.minQuantity) throw new Error(ERROR.menu.invalidOrder);
    });
  }

  static validateFormat(orderMenus) {
    orderMenus.forEach(item => {
      if (item.length !== CONSTANTS.menu.formatLength) throw new Error(ERROR.menu.invalidOrder);
    });
  }

  static validateDuplicatedMenu(orderMenus) {
    if (orderMenus.length !== new Set(orderMenus.map(item => item[0])).size)
      throw new Error(ERROR.menu.invalidOrder);
  }

  static validateAllBeverage(orderMenus) {
    const isAllBeverage = orderMenus
      .map(orderMenu => Object.keys(MENU.menuName).find(key => MENU.menuName[key] === orderMenu[0]))
      .every(item => MENU.menu[MENU.menuName[item]]['type'] === MENU.type.beverage);
    if (isAllBeverage) throw new Error(ERROR.menu.invalidOrder);
  }

  static validateMenuCountAboveThreshold(orderMenus) {
    const menuCountSum = orderMenus.reduce((acc, cur) => (acc += Number(cur[1])), 0);
    if (menuCountSum > CONSTANTS.menu.maxQuantity) throw new Error(ERROR.menu.invalidOrder);
  }

  static validateNaNCount(orderMenus) {
    orderMenus.forEach(orderMenu => {
      if (isNaN(Number(orderMenu[1]))) throw new Error(ERROR.menu.invalidOrder);
    });
  }
}

export default OrderMenuValidator;
