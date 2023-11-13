const price = Object.freeze({
  minTotalAmountForGiveaway: 120000,
  dDayDiscountStartAmount: 1000,
  dDayMultiplier: 100,
});

const menu = Object.freeze({
  minQuantity: 1,
  formatLength: 2,
});

const day = Object.freeze({
  minDay: 1,
  maxDay: 31,
  christmasDay: 25,
  initialOffset: 1,
});

const CONSTANTS = Object.freeze({
  price,
  menu,
  day,
});

export default CONSTANTS;
