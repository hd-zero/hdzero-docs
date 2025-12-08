# Allgemeine Hinweise
## VTX-Firmware aktualisieren

Bitte aktualisiere die VTX-Firmware auf die neueste Version, um Kompatibilität mit den neuesten Kameras, Flight-Controller-Software und Videoempfängern sicherzustellen. Es ist nicht erforderlich, dass die VTX-Firmwareversion mit der des Videoempfängers übereinstimmt, aber es wird empfohlen. Siehe [Firmware-Update-Anleitung](vtx-firmware-update.md) unten.

## Achtung: UFL-Steckverbinder sind empfindlich

Alle HDZero VTX verwenden einen U.FL-Stecker wegen der kompakten Bauweise und des geringen Gewichts. Mechanisch ist dieser Stecker jedoch nicht sehr robust. Behandle ihn, als wäre er aus Glas. Hinweise zur Montage und Demontage einer Antenne:

- Verwende die beiliegende Messing- oder Kunststoff-Halteklammer bei VTX, die diese enthalten

- Wird keine Halteklammer verwendet, führe das Kabel vom UFL-Stecker niemals direkt seitlich von der Platine weg. Führe das Antennenkabel stattdessen zur Mitte der Platine und sichere es als Zugentlastung auf eine der folgenden Arten:

  * Temperaturbeständiger Kleber wie E6000

    - Vermeide Kleber auf heißen Bauteilen der Platine.

    - Trage Kleber vorzugsweise an der Seite auf, an der das Kabel die Oberseite der Platine verlässt.

  * Kaptonband, um das Kabel auf der VTX-Oberfläche zu fixieren

  * Kabelbinder an einem nahegelegenen Abstandshalter (achte darauf, das Koaxialkabel nicht zu quetschen)

- Wenn du nicht maximale HF-Leistung oder minimales Gewicht benötigst, verwende für größere Builds ein UFL->SMA-Pigtail. So kann der SMA-Stecker am Fluggerät befestigt werden, um Bewegungen des Antennenkabels zu verhindern. Hinweis: Eine häufige Fehlerquelle bei SMA-Steckern ist die Crimpstelle des Koaxialkabels am SMA-Stecker; wenn diese Stelle bricht und locker ist, leidet die HF-Leistung erheblich.

- Beim Entfernen der Antenne darauf achten, keine einseitige Belastung auszuüben. Am besten mit einer Pinzette am Hals des Steckers greifen und gerade nach oben (nicht hebeln) von der Platine abziehen, damit die Kraft gleichmäßig auf die Stützbeine des U.FL-Buchse verteilt wird. Es gibt spezielle Werkzeuge zum Entfernen/Einsetzen von UFL-Steckern, die Schäden vermeiden helfen.

Weitere Informationen findest du unter:

https://www.facebook.com/groups/hdzero/permalink/448657693828864/

## VTX-Stromversorgung: BEC

Die Verwendung eines Battery Eliminator Circuit (BEC) wird dringend empfohlen, um Spannungsspitzen zu vermeiden, die den VTX beschädigen können. Zwar kann der VTX direkt von der Batterie (VBAT) betrieben werden, ein BEC sorgt jedoch für eine stabilere Versorgung und schützt vor Über- und Unterspannung.

Wähle einen BEC, dessen Spannung im Bereich des VTX liegt und der genügend Strom liefern kann. Egal ob BEC im Flight Controller integriert oder separat: Prüfe Spannung und Stromstärke und vergleiche sie mit den Anforderungen deines VTX.

Alle FCs mit integriertem BEC für DJI VTX sollten auch für HDZero VTX funktionieren.

Zusammengefasst:

- Prüfe die FC-Spezifikationen, ob du den VTX über das BEC des FC betreiben kannst;

- Falls nicht, verwende ein geeignetes externes BEC;

- Falls nicht, ist der Betrieb an VBAT die letzte Wahl wegen der rauen Spannungsumgebung im Fluggerät.

- Alle HDZero VTX außer Freestyle V2 unterstützen kein 6S VBAT.

## Hinweise zur Montage

Es ist sehr wichtig, Abstand zwischen VTX und ESC/FC-Platinen zu halten:

- Der HF-Teil des VTX ist anfällig für Störungen durch ESC/Motoren;

- Das HF-Signal kann von Platinen- oder Carbonflächen reflektiert und in den Leistungsverstärker des VTX zurückgeführt werden. Dies verschlechtert die Signalqualität und kann den Verstärker beschädigen.

Beachte daher folgende Hinweise zur Montage:

- **Kein Klebeband zur Befestigung des VTX am Rahmen verwenden** (außer Freestyle V2)

- Wird der VTX oben im Stack montiert, mindestens 5mm Abstand zu den oberen Carbonplatten halten.

- Vermeide die Montage in der Mitte des Stacks.

- Wird der VTX unten im Stack montiert, muss er auf dem Kopf stehen (U.FL-Buchse nach unten) und mindestens 5mm Abstand zu den unteren Carbonplatten haben.

## OSD/MSP Einrichtung

### 1. Voraussetzung

Betaflight >= 4.4.0

Inav >= 4.1

KISS ULTRA >= 2.0.1-B35

FlightOne >= 10.1.1.5576 | 10.1 Alpha 29

### 2. Firmware von VTX und VRX aktualisieren

Lade die neueste Firmware herunter: www.hd-zero.com/document

### 3. VTX UART an einen freien UART des FC anschließen/löten

Siehe [Installationsdiagramm](vtx-installation.md) oben

### 4. Flight Controller Konfiguration (Betaflight)

1. FC mit USB-Kabel am PC anschließen

2. Betaflight Configurator starten

3. Zum Port-Tab wechseln

4. VTX (MSP + Displayport) auf dem UART aktivieren, an dem der VTX angeschlossen ist

5. Speichern und Neustarten

::: tip
Hinweis: Soft Serial UART wird für VTX (MSP + Displayport) nicht unterstützt.
:::

Beispiel: UART5 im Bild unten wird für VTX (MSP + Displayport) verwendet.<img src="/media/image8.png" id="image6">

### 5. Flight Controller Konfiguration (Betaflight) fortsetzen

1. Zum Konfigurations-Tab wechseln

2. OSD-Funktion aktivieren

3. SPEICHERN

<img src="/media/image9.png" id="image7">

4. Zum OSD-Tab wechseln und die gewünschten Elemente konfigurieren

5. SPEICHERN

## VTX-Tabellen

Die HDZero VTX-Tabellen sind in die VTX-Firmware integriert. Sie werden beim Einschalten automatisch konfiguriert, eine manuelle Konfiguration ist nicht nötig.

## SmartAudio (Nicht unterstützt)

HDZero VTX unterstützt kein SmartAudio mehr. Verwende stattdessen MSP OSD.

## Stick-Befehle

<img src="/media/image10.png" id="image8"><div class="page"></div>

## VTX-Menü verwenden

Alle HDZero VTX bieten folgende Einstellungen zur Verwaltung der HF-Leistung. Diese können über das VTX-Menü geändert werden.

<img src="/media/image11.jpeg" id="image9">

### KANAL:

Alle VTX unterstützen die Kanäle R1-R8, E1, F1, F2 und F4. Nach Freischaltung des Low Band stehen zusätzlich L1-L8 zur Verfügung.

### LEISTUNG:

Die gewünschte HF-Leistung ist zwischen 25mW, 200mW (und 500mW oder MAX bei bestimmten VTX) wählbar. Die tatsächliche Leistung hängt von folgenden Einstellungen und dem FC-Status ab.

### PIT_MODE:  (Auf „AUS“ stellen, wenn du die Funktion nicht kennst)

- AUS: Die HF-Leistung entspricht der POWER-Einstellung.

- P1MW: Die HF-Leistung beträgt 0,1mW (um andere Piloten nicht zu stören). Bei aktiviertem Motor wird die Leistung automatisch auf POWER erhöht.

- 0MW: Es wird keine HF-Leistung abgegeben. Bei aktiviertem Motor wird die Leistung automatisch auf POWER erhöht.

::: tip
Hinweis: Nach dem ersten Scharfschalten wechselt der VTX erst nach einem VBAT-Reset wieder in den Pit-Mode.
:::

### LP_MODE:  (Auf „AUS“ stellen, wenn du die Funktion nicht kennst)

- AUS: Die HF-Leistung entspricht der POWER-Einstellung.

- EIN: Wenn PIT_MODE AUS und Motor deaktiviert ist, wird die HF-Leistung auf 25mW begrenzt, unabhängig von der POWER-Einstellung. Bei aktiviertem Motor wird die Leistung auf POWER gesetzt.

- 1ST: Wenn PIT_MODE AUS, wird die HF-Leistung beim Einschalten auf 25mW begrenzt, bei aktiviertem Motor auf POWER gesetzt.

::: tip
Hinweis: Nach dem ersten Scharfschalten wechselt der VTX erst nach einem VBAT-Reset wieder in den LP-Mode.
:::

### OFFSET_25MW: (Auf „0“ stellen, wenn du die Funktion nicht kennst)

Feinabstimmung der HF-Leistung auf exakt 25mW. Bereich [-10:10], Schrittweite ca. 0,1dB.

### TEAM_RACE: (Auf „AUS“ stellen, wenn du die Funktion nicht kennst)

- AUS: Die HF-Leistung nach dem Einschalten wird durch andere Einstellungen bestimmt.

- MODE1: VTX bleibt nach dem Einschalten auf 0mW und verlässt diesen Modus unter folgenden Bedingungen: 1. Motor scharf. 2. Verlassen des 0mW-Modus per Stick-Befehl. 3. VTX-Leistung über FC-UART auf einen Wert ungleich 0mW setzen. Bei unterbrochener UART-Kommunikation schaltet der VTX die HF-Leistung ab, bis die Kommunikation wiederhergestellt und der VTX neu gestartet wird.

- MODE2: Wie MODE1, aber das Verlassen des 0mW-Modus ist nur durch Motor scharf oder Stick-Befehl möglich.

### SHORTCUTS: 

Zwei verschiedene Stick-Befehle zum Wechseln oder Verlassen von 0mW. Siehe [Stick-Bewegungsdiagramm](#stick-command-gestures) (OPT_A und OPT_B) für Details.

::: tip
Hinweise:

- Der HDZero VTX wird auch im P1mW-Modus heiß. Es ist besser, den VTX auf 0mW zu lassen, wenn er längere Zeit nicht genutzt wird. Im 0mW-Modus gibt es kein Live-Video, aber nach dem Scharfschalten ist das Bild sofort wieder da.

- Mit Stick-Befehlen kann der 0mW-Modus ein- und ausgeschaltet werden.
:::

### Typische Einstellung für Rennen oder Training

- Kanal: Auf zugewiesene Nummer stellen
- Leistung: 25mW
- PIT_MODE: AUS
- LP_MODE: AUS
- OFFSET_25MW: 0
- TEAM_RACE: AUS
- SHORTCUT: OPT_A

  - Während du auf das ARM-Kommando des Rennleiters wartest, Stick-Befehl (OPT-A  /  \) nutzen, um in 0mW zu wechseln (VTX wird nicht heiß, kein Video in der Brille)
  - Kurz vor dem ARM-Kommando Stick-Befehl (OPT-A  \ /) nutzen, um 0mW zu verlassen (Video sofort in der Brille)
### Typische Einstellung für Team-Rennen

- Kanal: Auf zugewiesene Nummer stellen
- Leistung: 25mW
- PIT_MODE: AUS
- LP_MODE: AUS
- OFFSET_25MW: 0
- TEAM_RACE: MODE1
- SHORTCUT: OPT_A

  - Beim Start ist der VTX auf 0mW. Er beginnt zu senden, wenn der Motor scharf ist oder Stick-Befehl (OPT-A \ /) ausgeführt wird
  - Nach einem Absturz kann der VTX weiter senden und das Signal des Teamkollegen stören. Dann:
    - Motor deaktivieren und Stick-Befehl (OPT-A  /  \) nutzen, um in 0mW zu wechseln (funktioniert nur, wenn der FC noch läuft)
    - Bei Kommunikationsverlust mit dem FC schaltet der VTX nach einigen Sekunden automatisch auf 0mW
