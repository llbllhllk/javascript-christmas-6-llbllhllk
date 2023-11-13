const generateMenusInfo = (menuNames, menuPrices, menuCount) => {
  return menuNames.map((element, index) => [element, menuPrices[index], menuCount[index]]);
};

export default generateMenusInfo;
