import MENU from '../constants/menu.js';

const generateMenuPrices = menuNames => {
  return menuNames.map(menuName => MENU.menu[MENU.menuName[menuName]].price);
};

export default generateMenuPrices;
