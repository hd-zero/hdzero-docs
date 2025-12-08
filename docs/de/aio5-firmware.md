# Firmware

## Betaflight-Firmware flashen

- Lade **Betaflight Configurator** herunter und installiere ihn.
- Starte den **Betaflight Configurator**.
- So wird die Firmware geflasht:
  <img src="/aio5media/image12.png" id="image10">

  1. Ziel-Port auswählen
  2. Auf „Update Firmware“ klicken, um den Firmware-Flasher-Tab zu öffnen
  3. Ziel **CRAZYBEEF4SX1280** und Version auswählen, Werkversion ist **4.4.2 [01-Jun-2023]**
  4. Auf „Load Firmware [Online]“ klicken, um die Firmware herunterzuladen
  5. Auf „Flash Firmware“ klicken, um den Flight Controller zu flashen

> „DFU“ ist ein Hardware-naher Modus für Firmware-Updates, Reparaturen und Systemeingriffe.

- DFU-Flashen:  
  _Falls keine Kommunikation mehr mit deinem Board möglich ist, folge diesen Schritten zur Wiederherstellung:_

  1. AIO5 ausschalten
  2. „No reboot sequence“ aktivieren, „Full chip erase“ aktivieren
  3. **BOOT**-Button gedrückt halten und per USB mit dem PC verbinden, dann BOOT loslassen
  4. Alle STM32-Treiber und Zadig installieren, falls erforderlich (siehe Abschnitt [USB Flashing](https://betaflight.com/docs/wiki/guides/current/installing-betaflight) im Betaflight-Handbuch)
  5. Betaflight Configurator schließen, dann neu starten
  6. Auf „Update Firmware“ klicken, um den Firmware-Flasher-Tab zu öffnen
  7. Ziel **CRAZYBEEF4SX1280** und Version auswählen, Werkversion ist **4.4.2 [01-Jun-2023]**
  8. Auf „Load Firmware [Online]“ klicken, um die Firmware herunterzuladen
  9. Auf „Flash Firmware“ klicken, um den Flight Controller zu flashen

## CLI ausführen

Lade die Datei im **Flight Configurator Tab** von [https://www.hd-zero.com/document](https://www.hd-zero.com/document) herunter und entpacke **HDZEROAIO5_RevXYZ.zip** in ein temporäres Verzeichnis, z. B. `c:\123`;  
<img src="/aio5media/image13.png">  
<img src="/aio5media/image14.png">

1. Wechsel zum CLI-Tab
2. Klicke „Load from file“ und
   - wähle die Datei `c:\123\BTFL_CLI_HDZERO AIO5_1R2.txt` für **HDZero AIO5 1R2 (mit BMI270)** aus
   - wähle die Datei `c:\123\BTFL_CLI_HDZERO AIO5_1R3.txt` für **HDZero AIO5 1R3 (mit ICM42688P)** aus

_Hinweis: Überprüfe hier deine HDZero AIO5-Version:_  
<img src="/aio5media/image15.png" id="image13">

3. Auf „Execute“ klicken  
   <img src="/aio5media/image16.png" id="image14">

## BlueJay ESC-Firmware

Die Werkfirmware ist: **O_H_5_48_V0.19.2.HEX**.  
Um eine neue ESC-Firmware zu flashen, ist hier ein [YouTube-Tutorial](https://www.youtube.com/watch?v=yEDhnBUFQNI).  
<img src="/aio5media/image17.png" id="image15">

::: tip
Hinweise:

- Vor dem Flashen der ESC-Firmware muss das Radio ausgeschaltet werden, um die ELRS-Verbindung zu trennen.
- Nach dem Flashen muss die **Startup Power** jedes ESCs auf **1100 (Minimum)** und **1200 (Maximum)** über [https://esc-configurator.com/](https://esc-configurator.com/) eingestellt werden.
- Bitte achte auf ausreichende Wärmeableitung und nutze einen vollgeladenen Akku während des Flashens.  
  :::

## HDZero-Firmware

- Falls nicht vorhanden, [HDZero VTX Programmer](https://www.hd-zero.com/product-page/hdzero-vtx-programmer) kaufen.
- Lade die **HDZero Programmer Application** von [https://www.hd-zero.com/document](https://www.hd-zero.com/document) herunter.

<img src="/aio5media/image18.png" id="image16">

- Stecke den HDZero VTX Programmer in den **VTX FW Connector** des AIO5. Verwende ein USB-C Kabel, um Programmer und PC zu verbinden.
- Starte **HDZeroProgrammer.exe** auf einem Windows-PC.

  1. **AIO5 auswählen**
  2. „Load Online Firmware“ auswählen und Versionsnummer bestimmen
  3. Auf „Flash VTX“ klicken – unten erscheint „Connecting VTX ...“

<img src="/aio5media/image19.jpeg" id="image17"><img src="/aio5media/image20.png" id="image18">

Die Anwendung lädt die Firmware automatisch herunter und flasht sie.
