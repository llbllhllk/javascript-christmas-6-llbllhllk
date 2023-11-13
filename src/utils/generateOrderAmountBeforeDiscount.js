const generateOrderAmountBeforeDiscount = orderMenusInfo => {
  return orderMenusInfo.reduce((acc, cur) => (acc += cur[1] * cur[2]), 0);
};

export default generateOrderAmountBeforeDiscount;
