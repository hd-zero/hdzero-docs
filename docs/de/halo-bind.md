# Binden mit ELRS TX-Fernsteuerung

Es gibt zwei Möglichkeiten, den Halo FC zum Binden zu konfigurieren:

1. Verbinde den HDZero Halo FC per USB-C mit dem PC. Öffne Betaflight und verbinde dich mit dem FC. Navigiere zum Tab „Empfänger“ und klicke auf „Bind“, um den Bindemodus zu starten; oder

2. Schalte den Halo FC aus.

    Schalte den Halo FC dreimal hintereinander ein und aus.

    - Versorge den Halo FC mit Strom

    - Die ELRS-LED leuchtet auf.

    - Schalte ihn innerhalb von 2 Sekunden wieder aus.

    - Wiederhole dies noch 2 Mal.

Sobald sich der RX im Bindemodus befindet, stecke das ELRS TX-Modul in deinen OpenTX-Fernsteuersender, wähle den externen RF-Modus und stelle das Protokoll auf CRSF ein. Du findest das ELRS-Menü im Systemmenü des Senders (stelle sicher, dass die ELRS.LUA-Datei zuvor auf die SD-Karte im Ordner „tools“ kopiert wurde). Öffne das ELRS-Menü und drücke [Bind]. Die RX-LED am Flight Controller leuchtet dauerhaft, wenn das Binden erfolgreich war.

::: tip
HINWEIS: Stelle sicher, dass du das passende ELRS-Preset für deine Linkrate verwendest. Andernfalls kann es zu unkontrollierten Bewegungen in Kurven kommen.
:::

Die grüne ELRS-LED am Halo FC zeigt den Status an:

- **Dauerhaft an** bedeutet Bindung erfolgreich oder Verbindung hergestellt;

- **Doppelblinken** bedeutet Bindemodus aktiv;

- **Langsames Blinken** bedeutet, dass keine Verbindung zum TX-Modul besteht
