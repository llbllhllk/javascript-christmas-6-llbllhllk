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
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 0,
});

const day = Object.freeze({
  minDay: 1,
  maxDay: 31,
  christmasDay: 25,
  initialOffset: 1,
});

const badge = Object.freeze({
  star: '별',
  tree: '트리',
  santa: '산타',
});

const badgeMinPrice = {
  star_threshold: 5000,
  tree_threshold: 10000,
  santa_threshold: 20000,
};

const CONSTANTS = Object.freeze({
  price,
  menu,
  day,
  week,
  month,
  badge,
  badgeMinPrice,
});

export default CONSTANTS;
