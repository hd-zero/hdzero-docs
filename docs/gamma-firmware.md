# Firmware

## Flash Betaflight firmware

* Download and install the [Betaflight Configurator](https://github.com/betaflight/betaflight-configurator/releases/tag/10.10.0).
* Launch the Betaflight Configurator
* To flash firmware:

<div style="display: flex; align-items: center; justify-content: space-around; margin: 40px">
<img src="/gammamedia/image4.png">
</div>

1. Select the target port
2. Click "**Update Firmware**" to enter Firmware Flasher tab
3. Select target "**HDZERO_GAMMA**" and version, The factory version is 4.5.3[23-Nov-2025]
4. Click "**Load Firmware [Online]** " to download the firmware
5. Click "**Flash Firmware**" to Flash the Flight controller

* DFU flash:

  *If you have lost communication with your board follow these steps to restore communication:*

1. Power off Gamma
2. Enable ‘**No reboot sequence**’, enable ‘**Full chip erase**’
3. Hold BOOT button and Power on via USB into PC, then release BOOT button
4. Install all STM32 drivers and Zadig if required (see [USB Flashing](https://betaflight.com/docs/wiki/guides/current/installing-betaflight) section of Betaflight manual)
5. Close Betaflight configurator, Restart Betaflight configurator
6. Click "**Update Firmware**" to enter Firmware Flasher tab
7. Select target "**HDZERO_GAMMA**" and version, The factory version is 4.5.3[23-Nov-2025]
8. Click "**Load Firmware [Online]**" to download the firmware
9. Click "**Flash Firmware**" to Flash the Flight controller

## Flash ELRS firmware

The HDZero Gamma factory ELRS firmware version is Released3.5.1, If you need to update the firmware, please refer to the ELRS update tutorials ([Typical Updating Steps](https://www.expresslrs.org/quick-start/receivers/updating/)), and the Device Category and Device target are as follow:

***Device Category: HDZero 2.4GHz***

***Device target: HDZero 2.4GHz AIO RX***

<div style="display: flex; align-items: center; justify-content: space-around; margin: 40px">
<img src="/gammamedia/image5.png">
</div>

## Flash ESC Firmware(AM32)

1. Remove all propellers from the drone that Gamma AIO is correctly installed
2. Power on the drone, and connect the Gamma to PC via USB
3. Open the AM32 Configurator: [http://am32.ca](http://am32.ca)
4. Click Port Select and Connect, then Read
5. Adjust parameters as needed, then Save

If needed, click [**Flash firmware**] to update the ESC firmware.

<div style="display: flex; align-items: center; justify-content: space-around; margin: 40px">
<img src="/gammamedia/image6.png">
</div>
