# VTX Firmware Update Guide
## HDZero VTX Programmer

<img src="/media/image24.png" id="image21">It is highly recommended to use [HDZero VTX Programmer](https://www.hd-zero.com/product-page/hdzero-vtx-programmer) to update VTX. 

For Windows system:
1. Download the HDZeroProgrammer.zip from [HDZero Download](https://www.hd-zero.com/document).    
2. Extract HDZeroProgrammer.exe from the zip achieve to C:\HDZero

For Mac system:
Great thanks to Gunther Votteler for developing the Mac utility to for the HDZero Programmer. Follow the directions here:
https://github.com/gvotteler/hdzero-programmer-tool-mac


## Update VTX Firmware with HDZero Programmer

Launch C:\HDZero\ HDZeroProgrammer.exe. All compatible HDZero VTX models eligible for firmware updates will automatically appear in the list shown below.

<img src="/media/image25.png" id="image22">

1. Select the VTX type that you want to update
2. “Load Online Firmware” will fetch firmware from GitHub, and select the one you want to use, or
3. “Load Local firmware” to specify a local HDZERO_TX.bin,
4. “Flash VTX” to start the updating process.

## Download VTX Firmware

If you’re behind a firewall that restricts access to GitHub, you’ll need to manually download the VTX firmware and perform a local flashing process.

The firmware can be downloaded from VTX Firmware sector of [HDZero Download](https://www.hd-zero.com/document). The revision number is formatted HDZEROVTX_RevYYYYMMDD.zip where “YYYYMMDD” denotes its release date.

<img src="/media/image26.png" id="image23">

HDZEROVTX_RevYYYYMMDD.zip file includes firmware for all compatible HDZero VTX and AIO models listed below. Inside each ZIP archive, you’ll find a HDZERO_TX.bin file, which contains the specific firmware for that VTX type.

<img src="/media/image27.png" id="image24">

## Update VTX Firmware with HDZero Goggle or HDZero Receiver

### Steps to update VTX firmware with HDZero Goggle

The HDZero goggle can flash firmware to a HDZero video transmitter via its FW port. Here are the steps:

1. Copy HDZERO_TX.bin to root directory of a SD card that is formatted as FAT32

2. Power on the goggle

3. Connect the VTX and HDZero goggle with the included programming cable

4. Go to Main menu | Firmware |Update VTX, the display will show the status of the flashing process

5. Disconnect the VTX

6. This VTX is now flashed with the latest firmware

### Steps to update VTX firmware with HDZero Receiver

1. Format SD card (Choose FAT32 and Allocation Unit size to 4096 bytes);

2. Power off VRX if it is on;

3. Unzip HDZERO_TX.bin from the corresponding VTX zip file onto SD-card, and insert SD to the VRX module;

4. Connect cable with module and VTX;

5. Power on VRX module;

6. If “Wait to Connect VTX…” or “Check cable …”, make sure (4) is secured;

7. If “Firmware update failed”, Repeat steps from (1);

8. If “Firmware update successful”, VTX is updated;

9. The HDZERO_TX.bin file is removed from the SD card automatically.

::: tip
Note: Putting an empty file named as “DONOTREMOVE.txt” file on SD card root directory will prevent HDZERO_TX.bin from being removed. It is useful when updating multiple VTXes.
:::

## Unlock RF Power Limit

HDZero Freestyle V1/V2 VTX is compliant with FCC 47 CFR 97.215(c). It is limited to 25mW/200mW out of the box, but it is capable of up to 1W if you have the required HAM radio license to use this power output. Download the special firmware from Utilities section on [HDZero Download](https://www.hd-zero.com/document) to enable higher RF output modes.

Here are the steps:

1. Download firmware Unlock_FreestyleVTX.zip.

2. Unzip it to the root directory of SD Card.

3. Flash this firmware to the VTX.

4. Power on the VTX with main battery power, BLUE LED will flash 3 times after it is done. This step unlocks VTX.

5. Power the VTX off.

6. Unzip normal VTX firmware to the root directory of SD Card.

7. Flash this firmware to the VTX.

8. The higher RF output options will now be available.

::: tip
Notes:

1. Follow the above step strictly. DO NOT skip the step 4.
2. Once the VTX is unlocked, there is no need to unlock it again when there is newer firmware available.
:::

## Unlock Low Band

The VTX low band option needs to be unlocked before it can be used. Make sure your region allows low band before unlocking.

Here are the steps:

1. Download Unlock_Lowband.zip from www.hd-zero.com/document

2. Unzip and flash as a firmware update to your VTX.

3. Power on the VTX with main battery power. The BLUE LED should flash 5 times and then goes out, to indicate that the unlock has completed.

4. Flash the latest release firmware to your VTX. When you switch channels in the VTX menu you will see additional channels from L1 to L8.

::: tip
Note: Follow the above step strictly. DO NOT skip the step 3.
:::
