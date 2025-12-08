# Firmware

## Betaflight-Firmware

- Lade den [Betaflight Configurator](https://github.com/betaflight/betaflight-configurator/releases) herunter und installiere ihn.

- Starte den **Betaflight Configurator**, um die Firmware zu flashen.
  <img src="/aio15media/image6.png" id="image6">

1. Wähle den Ziel-Port aus
2. Klicke auf **„Update Firmware“**, um den Firmware-Flasher-Tab zu öffnen
3. Wähle das Ziel **„HDZero_AIO15“** und die gewünschte Version (Werkversion: **4.4.2 [01-Jun-2023]**)
4. Klicke auf **„Load Firmware [Online]“**, um die Firmware herunterzuladen
5. Klicke auf **„Flash Firmware“**, um den Flight Controller zu flashen

## BlueJay ESC-Firmware

<img src="/aio15media/image7.png" id="image7">

Die Werk-Firmware lautet: **Z_H_30_48_v0.19.2.HEX**.  
Um eine neue ESC-Firmware zu flashen, gibt es [dieses YouTube-Tutorial](https://www.youtube.com/watch?v=yEDhnBUFQNI).

Nach dem Flashen muss die **Startup Power** jedes ESCs mit [BLHeliSuite 16.7.14.9.0.3](https://github.com/4712/BLHeliSuite/releases/tag/16714903) auf **1.00** eingestellt werden.

Bitte achte darauf, dass beim Flashen eine **gute Wärmeabfuhr** sichergestellt ist und ein **vollgeladener Akku** verwendet wird.

## HDZero-Firmware

- Falls nicht vorhanden, einen [HDZero VTX Programmer](https://www.hd-zero.com/product-page/hdzero-vtx-programmer) kaufen.
- Lade die **HDZero Programmer Application** von [https://www.hd-zero.com/document](https://www.hd-zero.com/document) herunter.

<img src="/aio15media/image8.png" id="image8">

- Stecke den **HDZero VTX Programmer** an den **VTX FW Connector** des AIO15. Verwende ein **USB-C-Kabel**, um Programmer und PC zu verbinden.
- Starte **HDZeroProgrammer.exe** auf einem Windows-PC.

  1. Wähle **AIO15** aus
  2. Klicke auf **„Load Online Firmware“** und wähle die Versionsnummer
  3. Klicke auf **„Flash VTX“** – unten erscheint **„Connecting VTX ...“**

<img src="/aio15media/image9.jpeg" id="image9">
<img src="/aio15media/image10.png" id="image10">

Die Anwendung lädt die Firmware automatisch herunter und flasht sie.
