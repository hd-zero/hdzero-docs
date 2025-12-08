# Firmware

## Betaflight-Firmware flashen

- Lade den [Betaflight Configurator](https://github.com/betaflight/betaflight-configurator/releases/tag/10.10.0) herunter und installiere ihn.

- Starte den Betaflight Configurator

- Zum Flashen der Firmware: 

    <img src="/halomedia/image23.jpg" id="image23">

    1) Wähle den Ziel-Port aus

    2) Klicke auf "Update Firmware", um in den Firmware-Flasher-Tab zu gelangen

    3) Wähle das Ziel "HAZERO_HALO" und die Version aus. Die Werksversion ist 4.5.1 [27-Jun-2024]

    4) Klicke auf "Load Firmware [Online]", um die Firmware herunterzuladen

    5) Klicke auf "Flash Firmware", um den Flight Controller zu flashen

- DFU-Flash:

    *Wenn du die Verbindung zu deinem Board verloren hast, folge diesen Schritten, um die Kommunikation wiederherzustellen:*

    1)    Schalte den HALO FC aus

    2)    Aktiviere „No reboot sequence“, aktiviere „Full chip erase“

    3)    Halte die BOOT-Taste des FC gedrückt und schließe ihn per USB-C an den PC an, dann lasse die BOOT-Taste los

    4)    Installiere alle STM32-Treiber und Zadig, falls erforderlich (siehe Abschnitt im Betaflight-Handbuch)

    5)    Schließe den Betaflight Configurator, starte ihn neu

    6)    Klicke auf "Update Firmware", um in den Firmware-Flasher-Tab zu gelangen

    7)    Wähle das Ziel "HAZERO_HALO" und die Version aus. Die Werksversion ist 4.5.1 [27-Jun-2024]

    8)    Klicke auf "Load Firmware [Online]", um die Firmware herunterzuladen

    9)    Klicke auf "Flash Firmware", um den Flight Controller zu flashen

## CLI ausführen

- Die Online-Firmware für HDZero HALO enthält bereits das erforderliche CLI, vordefinierte CLI-Dateien sind bei Bedarf wie folgt verfügbar:

Lade die Datei im Flight Configurator Tab unter https://www.hd-zero.com/document herunter und entpacke HDZEROHALO_RevXYZ.zip in ein temporäres Verzeichnis, z.B. c:\123

<img src="/halomedia/image24.png" id="image24">

1)  Wechsle zum CLI-Tab im Betaflight Configurator

2)  Klicke auf „Load from file“ und wähle die Datei c:\123\HDZERO_HALO.txt für HDZero HALO aus

3)  Klicke auf „Execute“

<img src="/halomedia/image25.png" id="image25">

- Die VTX-Tabelle ist nicht in der Online-Firmware für HDZero HALO enthalten, kann aber auf verschiedene Arten hinzugefügt werden:

1)  Wenn du ein HDZero VTX mit HDZero HALO verwendest,

wird die VTX-Tabelle über MSP bereitgestellt, und die VTX-Firmware muss Version 1.7.0 oder neuer sein, oder

2)  Die CLI-Datei HDZERO_HALO.txt stellt sie bereit, oder

3)  Verwende das Betaflight Configurator Preset, suche nach

HDZero VTXs, um dieses Preset zu finden

<img src="/halomedia/image26.png" id="image26">

<img src="/halomedia/image27.png" id="image27">

## ELRS-Firmware flashen

Die werkseitige ELRS-Firmware-Version des HDZero Halo ist Released 3.5.1. Wenn du die Firmware aktualisieren möchtest, folge bitte den ELRS-Update-Anleitungen ([Typische Update-Schritte](https://www.expresslrs.org/quick-start/receivers/updating/)), und die Gerätekategorie sowie das Zielgerät sind wie folgt:

Gerätekategorie: HDZero

Zielgerät: HDZero Halo FC 2.4G Gemini RX

<img src="/halomedia/image28.jpg" id="image28"><div class="page"></div>

## Schaltbares 9V BEC

- Starte den Betaflight Configurator

- Wechsle zum CLI-Tab

- Gib im CLI Folgendes ein:
```shell
resource PINIO 1 E03

set pinio_config = 1

set pinio_box = 40

save
```
- Wechsle zum Tab „Modes“

- Füge einen Bereich für den USER1-Modus hinzu

- Nun kannst du das 9V BEC per Fernsteuerung schalten

<img src="/halomedia/image29.jpeg" id="image29">

<img src="/halomedia/image30.jpeg" id="image30">