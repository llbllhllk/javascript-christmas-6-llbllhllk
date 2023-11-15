import InputView from '../view/InputView.js';
import Benefit from './Benefit.js';
import Giveaway from './Giveaway.js';
import OrderAmount from './OrderAmount.js';
import OrderManager from './OrderManager.js';

class OrderProcessor {
  static async processOrder() {
    const { visitDate, orderMenus } = await this.#inputOrder();
    const orderManager = this.#createOrderManager(visitDate, orderMenus);
    const orderAmount = this.#createOrderAmount(visitDate, orderManager);
    const giveaway = this.#createGiveaway(orderAmount);
    const benefit = this.#createBenefit(visitDate, orderManager, orderAmount, giveaway);
    return { visitDate, orderMenus, orderManager, orderAmount, giveaway, benefit };
  }

  static async #inputOrder() {
    return {
      visitDate: await InputView.readVisitDate(),
      orderMenus: await InputView.readOrderMenu(),
    };
  }

  static #createOrderManager(visitDate, orderMenus) {
    const orderManager = new OrderManager(visitDate, orderMenus);
    const menusInfo = orderManager.getMenusInfo();
    const dayOfWeek = orderManager.getDayOfWeek();
    return { menusInfo, dayOfWeek };
  }

  static #createOrderAmount(visitDate, orderManager) {
    const { menusInfo, dayOfWeek } = orderManager;
    const beforeDiscount = OrderAmount.calculateAmountBeforeDiscount(menusInfo);
    const totalDiscount = OrderAmount.calculateDiscountTotalAmount(visitDate, menusInfo, dayOfWeek);
    const afterDiscount = OrderAmount.calculateOrderAmountAfterDiscount(
      beforeDiscount,
      totalDiscount,
    );
    return { beforeDiscount, totalDiscount, afterDiscount };
  }

  static #createGiveaway(orderAmount) {
    const { beforeDiscount } = orderAmount;
    const isAddGiveaway = Giveaway.checkAddGiveaway(beforeDiscount);
    const giveawayDiscount = Giveaway.calculateGiveawyDiscountAmount(beforeDiscount);
    return { isAddGiveaway, giveawayDiscount };
  }

  static #createBenefit(visitDate, orderManager, orderAmount, giveaway) {
    const { menusInfo, dayOfWeek } = orderManager;
    const { totalDiscount } = orderAmount;
    const { giveawayDiscount } = giveaway;
    const dDay = Benefit.calculateDDayDiscount(visitDate);
    const weekDay = Benefit.calculateWeekDayDiscount(menusInfo, dayOfWeek);
    const weekEnd = Benefit.calculateWeekEndDiscount(menusInfo, dayOfWeek);
    const special = Benefit.calculateSpecialDiscount(visitDate, dayOfWeek);
    const eventBadge = Benefit.getEventBadge(totalDiscount + giveawayDiscount);
    return { dDay, weekDay, weekEnd, special, eventBadge };
  }
}

export default OrderProcessor;
