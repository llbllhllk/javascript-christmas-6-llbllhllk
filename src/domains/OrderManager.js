import CONSTANTS from '../constants/constants.js';
import MENU from '../constants/menu.js';
import OrderMenuValidator from '../validators/OrderMenuValidator.js';
import VisitDateValidator from '../validators/VisitDateValidator.js';

class OrderManager {
  #visitDate;
  #orderMenus;

  constructor(visitDate, orderMenus) {
    this.#validate(visitDate, orderMenus);
    this.#visitDate = visitDate;
    this.#orderMenus = orderMenus;
  }

  #validate(visitDate, orderMenus) {
    VisitDateValidator.validateVisitDate(visitDate);
    OrderMenuValidator.validateOrderMenu(orderMenus);
  }

  getMenusInfo() {
    const menuNames = this.#setMenuNames();
    const menuPrices = this.#setMenuPrices(menuNames);
    const menuCount = this.#setMenuCount();
    return menuNames.map((element, index) => [element, menuPrices[index], menuCount[index]]);
  }

  getDayOfWeek() {
    return new Date(new Date().getFullYear(), CONSTANTS.month.december, this.#visitDate).getDay();
  }

  #setMenuNames() {
    return this.#orderMenus.map(orderMenu =>
      Object.keys(MENU.menuName).find(key => MENU.menuName[key] === orderMenu[0]),
    );
  }

  #setMenuPrices(menuNames) {
    return menuNames.map(menuName => MENU.menu[MENU.menuName[menuName]].price);
  }

  #setMenuCount() {
    return this.#orderMenus.map(orderMenu => Number(orderMenu[1]));
  }
}

export default OrderManager;
