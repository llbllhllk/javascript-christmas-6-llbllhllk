import ChristmasEventController from './controller/ChristmasEventController.js';

class App {
  async run() {
    await ChristmasEventController.start();
  }
}

export default App;
