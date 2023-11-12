import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';
import MENU from '../constants/menu.js';

class OrderMenuValidator {
  static validateOrderMenu(orderMenus) {
    const menuItems = orderMenus.split(',').map(item => item.split('-'));
    const validators = [this.validateNoMenu, this.validateOrderMenuQuantity];
    validators.forEach(validator => validator(menuItems));
  }

  static validateNoMenu(menuItems) {
    const menus = menuItems.map(menuItem => {
      const menu = menuItem[0];
      return Object.keys(MENU.menuName).find(key => MENU.menuName[key] === menu);
    });
    if (menus.includes(undefined)) throw new Error(ERROR.menu.invalidOrder);
  }

  static validateOrderMenuQuantity(menuItems) {
    menuItems.map(menuItem => {
      const quantity = Number(menuItem[1]);
      if (quantity < CONSTANTS.menu.minQuantity) throw new Error(ERROR.menu.invalidOrder);
    });
  }
}

export default OrderMenuValidator;
