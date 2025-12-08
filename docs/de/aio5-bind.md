# Mit TX-Sender verbinden

_Es gibt zwei Möglichkeiten, den Empfänger zu verbinden, wie unten gezeigt:_

1. Button-Bindung

Versetze den Empfänger mit einer dieser Methoden in den Bind-Modus:

- „Bind“-Button im Betaflight Configurator, Empfänger-Seite (falls nicht vorhanden, Betaflight-Firmware updaten).
- Über die CLI: `bind rx` eingeben und einmal Enter drücken.
- Über die CLI: `set expresslrs uid = 0` eingeben, einmal Enter drücken, anschließend speichern `save` und neustarten.

Sobald sich der SPI-Empfänger im Bind-Modus befindet (die ELRS-LED beginnt schneller zu blinken), stecke das ELRS-TX-Modul in deinen OpenTX-Sender ein, wähle den **External RF**-Modus und stelle ihn auf **CRSF-Protokoll** ein. Du findest das ELRS-Menü im Funksystem (achte darauf, dass die Datei `ELRS.LUA` vorher auf die SD-Karte in den Tools-Ordner kopiert wurde). Öffne das ELRS-Menü und drücke [Bind]. Die RX-LED am Flight Controller leuchtet dauerhaft, wenn das Binden erfolgreich war.

2. Bind-Phrase

Ab **Betaflight 4.4** (mit Betaflight Configurator Version 10.9.0 oder neuer) kann deine ExpressLRS-Bind-Phrase direkt im Empfänger-Tab im Betaflight Configurator eingestellt werden.

<img src="/aio5media/image11.png" id="image1">

Richtige Konfiguration des Betaflight-Empfänger-Tabs für ExpressLRS-SPI-Empfänger:  
Empfänger-Modus
(1) sollte auf **SPI RX** gesetzt sein. SPI-Bus-Empfänger-Provider (2) sollte auf **EXPRESSLRS** gestellt werden. Gib deine Bind-Phrase in das Feld (3) ein und sie wird in UID-Bytes (4) umgewandelt und in deiner Betaflight-Konfiguration gespeichert. An dieser Stelle kannst du auch **Telemetry (5)** aktivieren, falls gewünscht, und sicherstellen, dass **RSSI_ADC (6)** und **RSSI Channel (7)** wie gezeigt deaktiviert sind.

::: warning
SPI-ELRS-Empfänger unterstützen NICHT die Modi D (D250, D500), F (F500, F1000) und Full Res (100Hz Full Res, 333Hz Full Res) (Paket-Raten) und können sich daher nicht mit einem TX-Modul in diesen Modi binden oder synchronisieren.

**Folgende Paket-Raten funktionieren: 50Hz, 150Hz, 250Hz, 500Hz.**
:::

## ELRS-LED-Status

- Dauerlicht bedeutet erfolgreiches Binden oder Verbindung hergestellt
- Schnelles Blinken (500 ms) bedeutet Bind-Modus
- Langsames Blinken (1 s) bedeutet keine Verbindung mit dem TX-Modul
