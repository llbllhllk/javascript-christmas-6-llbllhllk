const price = Object.freeze({
  minTotalAmountForGiveaway: 120000,
  dDayDiscountStartAmount: 1000,
  dDayMultiplier: 100,
  discountAmount: 2023,
  specialDiscountAmount: 1000,
});

const menu = Object.freeze({
  minQuantity: 1,
  formatLength: 2,
});

const month = Object.freeze({
  december: 11,
});

const week = Object.freeze({
  monday: 1,
  thursday: 4,
  sunday: 0,
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
  week,
  month,
});

export default CONSTANTS;
