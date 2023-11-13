const generateMenuCount = orderMenus => {
  return orderMenus.map(orderMenu => Number(orderMenu[1]));
};

export default generateMenuCount;
