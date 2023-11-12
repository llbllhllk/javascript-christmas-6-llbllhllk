const number = Object.freeze({
  minTotalAmountForGiveaway: 120000,
});

const menu = Object.freeze({
  minQuantity: 1,
  formatLength: 2,
});

const day = Object.freeze({
  minDay: 1,
  maxDay: 31,
});

const CONSTANTS = Object.freeze({
  number,
  menu,
  day,
});

export default CONSTANTS;
