import Homey from 'homey';

class MyApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('MyApp has been initialized');

    const card = this.homey.flow.getActionCard("open-shutters");
    card.registerRunListener(async () => {
      // log something for now
      this.log("Bubendorff shutters app has been initialised")
    });
  }

}

module.exports = MyApp;
