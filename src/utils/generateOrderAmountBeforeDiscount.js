const generateOrderAmountBeforeDiscount = menuPrices => {
  return menuPrices.reduce((acc, cur) => (acc += cur));
};

export default generateOrderAmountBeforeDiscount;
