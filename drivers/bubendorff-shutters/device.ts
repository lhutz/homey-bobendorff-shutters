import Homey from 'homey';

class BubendorffShutters extends Homey.Device {

  /**
   * onInit is called when the device is initialized.
   */
  async onInit() {
    this.log('Bubendorff Shutters has been initialized');

    this.registerCapabilityListener('windowcoverings_set', async (percentage) => {
      this.log(`window covering set to ${ percentage * 100}%`)
    });

    // TODO: do this via web hooks or something so that when we press the button of the shuttes, Homey knows about this too.
    this.setCapabilityValue('windowcoverings_set', 1)
  }

  /**
   * onAdded is called when the user adds the device, called just after pairing.
   */
  async onAdded() {
    this.log('Bubendorff Shutters has been added');
  }

  /**
   * onSettings is called when the user updates the device's settings.
   * @param {object} event the onSettings event data
   * @param {object} event.oldSettings The old settings object
   * @param {object} event.newSettings The new settings object
   * @param {string[]} event.changedKeys An array of keys changed since the previous version
   * @returns {Promise<string|void>} return a custom message that will be displayed
   */
  async onSettings({
    oldSettings,
    newSettings,
    changedKeys,
  }: {
    oldSettings: { [key: string]: boolean | string | number | undefined | null };
    newSettings: { [key: string]: boolean | string | number | undefined | null };
    changedKeys: string[];
  }): Promise<string | void> {
    this.log("Bubendorff Shutters settings where changed");
  }

  /**
   * onRenamed is called when the user updates the device's name.
   * This method can be used this to synchronise the name to the device.
   * @param {string} name The new name
   */
  async onRenamed(name: string) {
    this.log('Bubendorff Shutters was renamed');
  }

  /**
   * onDeleted is called when the user deleted the device.
   */
  async onDeleted() {
    this.log('Bubendorff Shutters has been deleted');
  }

}

module.exports = BubendorffShutters;
