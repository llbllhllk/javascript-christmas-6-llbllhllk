import ERROR from '../constants/error.js';
import MENU from '../constants/menu.js';

class OrderMenuValidator {
  static validateOrderMenu(orderMenus) {
    const menuItems = orderMenus.split(',').map(item => item.split('-'));
    const validators = [this.#validateNoMenu];
    validators.forEach(validator => validator(menuItems));
  }

  static #validateNoMenu(menuItems) {
    const menus = menuItems.map(menuItem => {
      const menu = menuItem[0];
      return Object.keys(MENU.menuName).find(key => MENU.menuName[key] === menu);
    });
    if (menus.includes(undefined)) throw new Error(ERROR.menu.NO_MENU);
  }
}

export default OrderMenuValidator;
