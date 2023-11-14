class OrderAmount {
  static calculateAmountBeforeDiscount(menusInfo) {
    return menusInfo.reduce((acc, cur) => (acc += cur[1] * cur[2]), 0);
  }
}

export default OrderAmount;
