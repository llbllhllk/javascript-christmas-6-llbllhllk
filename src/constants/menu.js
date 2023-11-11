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
  [type.epitizer]: {
    [menuName.mushroomSoup]: 6000,
    [menuName.tapas]: 5500,
    [menuName.caesarSalad]: 8000,
  },
  [type.main]: {
    [menuName.tBoneSteak]: 55000,
    [menuName.bbqRibs]: 54000,
    [menuName.seafoodPasta]: 35000,
    [menuName.christmasPasta]: 25000,
  },
  [type.dessert]: {
    [menuName.chocolateCake]: 15000,
    [menuName.iceCream]: 5000,
  },
  [type.beverage]: {
    [menuName.zeroCola]: 3000,
    [menuName.redWine]: 60000,
    [menuName.champagne]: 25000,
  },
});

const MENU = Object.freeze({
  type,
  menuName,
  menu,
});

export default MENU;
