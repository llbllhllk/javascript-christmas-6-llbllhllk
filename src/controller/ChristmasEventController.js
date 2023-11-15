import OutputView from '../view/OutputView.js';
import OrderProcessor from '../domains/OrderProcessor.js';

class ChristmasEventController {
  static async start() {
    OutputView.printGreeting();
    const processedOrder = await OrderProcessor.processOrder();
    this.#printOutput(processedOrder);
  }

  static #printOutput(processedOrder) {
    const { visitDate, orderMenus, orderAmount, giveaway, benefit } = processedOrder;
    OutputView.printNotification(visitDate);
    OutputView.printOrderMenu(orderMenus);
    OutputView.printOrderAmountBeforeDiscount(orderAmount.beforeDiscount);
    OutputView.printGiveawayMenu(giveaway.isAddGiveaway);
    this.#printBenefitHistory(benefit, giveaway);
    OutputView.printBenefitTotalAmount(orderAmount.totalDiscount, giveaway.giveawayDiscount);
    OutputView.printOrderAmountAfterDiscount(orderAmount.afterDiscount);
    OutputView.printEventBadge(benefit.eventBadge);
  }

  static #printBenefitHistory(benefit, giveaway) {
    OutputView.printBenefitHistory(
      benefit.dDay,
      benefit.weekDay,
      benefit.weekEnd,
      benefit.special,
      giveaway.giveawayDiscount,
    );
  }
}

export default ChristmasEventController;
