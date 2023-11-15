import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import OrderManager from '../domains/OrderManager.js';
import OrderAmount from '../domains/OrderAmount.js';
import Benefit from '../domains/Benefit.js';

class ChristmasEventController {
  constructor() {}

  static async start() {
    OutputView.printGreeting();
    const visitDate = await InputView.readVisitDate();
    const orderMenus = await InputView.readOrderMenu();
    const orderManager = new OrderManager(visitDate, orderMenus);
    const orderAmountBeforeDiscount = OrderAmount.calculateAmountBeforeDiscount(
      orderManager.getMenusInfo(),
    );
    OutputView.printNotification(visitDate);
    OutputView.printOrderMenu(orderMenus);
    OutputView.printOrderAmountBeforeDiscount(orderAmountBeforeDiscount);
    OutputView.printGiveawayMenu(orderAmountBeforeDiscount);
    OutputView.printBenefitHistory(orderManager, visitDate);
    OutputView.printBenefitTotalAmount(visitDate, orderManager, orderAmountBeforeDiscount);
    OutputView.printOrderAmountAfterDiscount(visitDate, orderManager, orderAmountBeforeDiscount);
    OutputView.printEventBadge(visitDate, orderManager, orderAmountBeforeDiscount);
  }
}

export default ChristmasEventController;
