# Firmware Update

The radio comes preloaded with firmware V1.0.0 by default, which can be checked under the Firmware section in the menu. The ELRS firmware version can also be checked in the ELRS menu.

## HDZero Radio Update

Before updating, you must first install the [STM32 driver](https://www.st.com/en/development-tools/stsw-stm32102.html#get-software) and [CH340 driver](https://www.wch-ic.com/downloads/CH341SER_EXE.html) on your computer, disconnect any other STM32 devices, and ensure that Betaflight Configurator is closed.Only Windows®️ Operating System is supported currently.

- Turn on the radio, connect it to your computer using a USB cable
- Select the "Serial(VCP)" in the USB Device option
- Download the HDZero Programmer.zip from the [HDZero Download](https://www.hd-zero.com/document) page
- Use "Load Online Firmware" to fetch firmware from GitHub, then select the desired version; or
- Use "Load Lcal Fimware" to specify a local hdzero_radio.bin
- Click "Flash Radio" to start the updating process

<img src="/radiomedia/hdzero-programmer.png" id="image5">

**Note:** Updating the HDZero Radio firmware will automatically update the Radio System, ELRS TX, and ELRS Backpack simultaneously. For specific ELRS TX and Backpack version details, please refer to the latest Release Notes.

## ELRS Transmitter Update

There are multiple methods for updating ELRS, here we only cover the update via the ExpressLRS web UI and UART flashing method. Additionally, before updating the program using the UART method, you need to install the [CH340 driver](https://www.wch-ic.com/downloads/CH341SER_EXE.html) on your computer. Note: if a PC isn't available, you may try updating via WiFi. Consult ELRS documentation for steps.

<div style="display: flex;gap: 10px;">
<img src="/radiomedia/elrs-web-flasher-1.png" id="image50" width="800">
</div>

- Log in to the ELRS Web Flasher at the URL below:

  - [https://expresslrs.github.io/web-flasher/](https://expresslrs.github.io/web-flasher/)
- Select the needed "Firmware Version", then choose "HDZero - 2.4GHz Transmitter - HDZero Radio 2.4GHz TX", then "NEXT"
- Select your preferred transmitter settings, and choose "Serial UART" as the flashing method, then "NEXT"
- Turn on the Radio, connect the radio and computer by the USB cable
- Select the serial (VCP) in the USB Device option
- Navigate to the "Firmware" menu, select "PROG ELRS TX", and the radio will vibrate once
- "CONNECT" in the ELRS Web Flasher, select the corresponding USB serial, then start "FLASH"
- Wait for the firmware flashing to complete, then Done

<div style="display: flex;gap: 10px;">
<img src="/radiomedia/prog-elrs-tx.png" id="image50" width="400">
</div>

<div style="display: flex;gap: 10px;">
<img src="/radiomedia/elrs-web-flasher-2.png" id="image50" width="800">
</div>

<div style="display: flex;gap: 10px;">
<img src="/radiomedia/elrs-web-flasher-3.png" id="image50" width="800">
</div>

**Note:** The firmware update method for ELRS backpack is the same as described above.

<div style="display: flex;gap: 10px;">
<img src="/radiomedia/elrs-web-flasher-3.png" id="image50" width="800">
</div>
