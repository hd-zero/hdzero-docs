# Mit TX-Sender binden

_Es gibt zwei Möglichkeiten, den HDZero AIO15 zum Verbinden zu konfigurieren:_

1. Verbinde den **HDZero AIO15** per Micro-USB mit dem PC. Öffne **Betaflight** und verbinde dich mit dem AIO15.  
   Navigiere zum Tab **Receiver** und klicke auf **Bind**, um den Bind-Modus zu starten; oder

2. Schalte den **HDZero AIO15** aus.  
   Führe anschließend einen **dreifachen Power-Cycle** durch:
   - Strom einschalten → die **ELRS-LED** leuchtet auf
   - Innerhalb von 2 Sekunden ausschalten
   - Dies 2 weitere Male wiederholen

Sobald sich der RX im Bind-Modus befindet, stecke das **ELRS-TX-Modul** in deinen **OpenTX-Sender** ein, wähle den **External RF Mode** und stelle ihn auf das **CRSF-Protokoll**.  
Du findest das **ELRS-Menü** im Funksystem (achte darauf, dass die Datei `ELRS.LUA` zuvor in den Tools-Ordner der SD-Karte kopiert wurde).
Öffne das ELRS-Menü und drücke **[Bind]**. Die **RX-LED** am Flight Controller leuchtet dauerhaft, wenn das Binden erfolgreich war.

::: tip
HINWEIS: Stelle sicher, dass du das **passende ELRS-Preset für deine Link-Rate** verwendest, da es sonst zu unkontrollierten Bewegungen in Kurven kommen kann.
:::

## ELRS-LED-Status:

- **Dauerlicht** bedeutet erfolgreiches Binden oder Verbindung hergestellt
- **Doppelblinken** bedeutet Bind-Modus
- **Langsames Blinken** bedeutet keine Verbindung mit dem TX-Modul
