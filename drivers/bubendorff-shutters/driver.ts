import Homey from 'homey';

class MyDriver extends Homey.Driver {

  /**
   * onInit is called when the driver is initialized.
   */
  async onInit() {
    this.log('Bubendorff Shutter\' Driver has been initialized');
  }

  /**
   * onPairListDevices is called when a user is adding a device and the 'list_devices' view is called.
   * This should return an array with the data of devices that are available for pairing.
   */
  async onPairListDevices() {
    // TODO Login

    // TODO search for devices and return them
    return [
      {
        name: 'A Fake Bubendorff Shutter',
        data: {
          id: 'fake-bubendorff',
        }
      },
    ];
  }

}

module.exports = MyDriver;
