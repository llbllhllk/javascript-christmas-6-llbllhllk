const type = Object.freeze({
  epitizer: '에피타이저',
  main: '메인',
  dessert: '디저트',
  beverage: '음료',
});

const menuName = Object.freeze({
  mushroomSoup: '양송이수프',
  tapas: '타파스',
  caesarSalad: '시저샐러드',
  tBoneSteak: '티본스테이크',
  bbqRibs: '바비큐립',
  seafoodPasta: '해산물파스타',
  christmasPasta: '크리스마스파스타',
  chocolateCake: '초코케이크',
  iceCream: '아이스크림',
  zeroCola: '제로콜라',
  redWine: '레드와인',
  champagne: '샴페인',
});

const menu = Object.freeze({
  [menuName.mushroomSoup]: { type: type.epitizer, price: 6000 },
  [menuName.tapas]: { type: type.epitizer, price: 5500 },
  [menuName.caesarSalad]: { type: type.epitizer, price: 8000 },
  [menuName.tBoneSteak]: { type: type.main, price: 55000 },
  [menuName.bbqRibs]: { type: type.main, price: 54000 },
  [menuName.seafoodPasta]: { type: type.main, price: 35000 },
  [menuName.christmasPasta]: { type: type.main, price: 25000 },
  [menuName.chocolateCake]: { type: type.dessert, price: 15000 },
  [menuName.iceCream]: { type: type.dessert, price: 5000 },
  [menuName.zeroCola]: { type: type.beverage, price: 3000 },
  [menuName.redWine]: { type: type.beverage, price: 60000 },
  [menuName.champagne]: { type: type.beverage, price: 25000 },
});

const MENU = Object.freeze({
  type,
  menuName,
  menu,
});

export default MENU;
