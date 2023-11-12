import MENU from '../constants/menu.js';

const generateMenuNames = orderMenus => {
  return orderMenus.map(orderMenu => {
    const menu = orderMenu[0];
    return Object.keys(MENU.menuName).find(key => MENU.menuName[key] === menu);
  });
};

export default generateMenuNames;
