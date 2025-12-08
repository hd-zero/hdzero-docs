# HDZero BoxPro Bedienung

Dieser Abschnitt beschreibt die allgemeine Bedienung der HDZero BoxPro.

## Bedienelemente

- Steuerkreuz

- Enter-Taste

- Funktions-Taste

<img src="/boxmedia/image9.png" id="image4">

## Videoansicht und Menüansicht

<img src="/boxmedia/image10.png" id="image5">

<div class="page"></div>

### Videoquelle

Die HDZero BoxPro kann Videos von einer der folgenden 4 Quellen anzeigen:

- Integrierter HDZero Digitalempfänger

- Integrierter Analogempfänger

- AV-Eingang

- HDMI-Eingang

### HDZero Digitalempfänger

Die Option „Jetzt scannen“ im Hauptmenü durchsucht folgende Kanäle nach einem HDZero-Videosignal:

- R1-R8, E1, F1, F2 und F4 Kanäle, oder

- L1-L8, wenn Lowband ausgewählt ist

„Jetzt scannen“ führt Folgendes aus:

- Scannt die oben genannten Kanäle,

- Sperrt auf den Kanal, wenn nur ein gültiges Signal gefunden wird, oder

- Lässt dich zwischen den Kanälen wählen, wenn zwei oder mehr gefunden werden, oder

- Setzt das Scannen nach 5 Sekunden fort, wenn kein Signal erkannt wird, oder

- Wartet auf langen Druck der Enter-Taste, um ins Hauptmenü zurückzukehren

::: tip
Hinweis 1: Um Lowband zu aktivieren, stelle Quelle -> HDZero Band auf **Lowband**. Hier sind die Mittenfrequenzen für L1-L8.

<table id="table4">
<tr>
<td>Low Band Kanal</td>
<td>L1</td>
<td>L2</td>
<td>L3</td>
<td>L4</td>
<td>L5</td>
<td>L6</td>
<td>L7</td>
<td>L8</td>
</tr>
<tr>
<td>Frequenz (MHz)</td>
<td>5362</td>
<td>5399</td>
<td>5436</td>
<td>5473</td>
<td>5510</td>
<td>5547</td>
<td>5584</td>
<td>5621</td>
</tr>
</table>
:::

::: tip
Hinweis 2: Die HDZero bietet die niedrigste und festeste Latenz mit der HDZero Nano 90 Kamera. Diese unterstützt ausschließlich 540p60. Ist sie auf 540p60 eingestellt, muss die Brille unter Quelle > HDZero BW auf Narrow gestellt werden.

Alle anderen Modi benötigen Quelle > HDZero BW auf Wide.
:::

## Analogempfänger

Die HDZero BoxPro nimmt analoges Videosignal entweder über den AV-Eingang oder den integrierten analogen RF-Empfänger entgegen.

Die BoxPro verwendet einen neuartigen Ansatz zur Verarbeitung des analogen Signals, was zu verbesserter Bildqualität führt:

- Ein Videodecoder mit adaptivem Kammfilter trennt Y/C vom Composite-Video

- Ein Deinterlacer wandelt Halbbilder in Vollbilder um, statt Zeilen zu verdoppeln

- Ein Upscaler zeichnet das Video auf und zeigt es an

<img src="/boxmedia/image11.png" id="image6">

ABB. 4. Signalverarbeitungspfad für analogen Eingang

## Auto Scan

Die BoxPro kann beim Einschalten automatisch in den gewünschten Modus starten.

HDZero:      Hauptmenü → Auto Scan  → Auto Scan = EIN | Letzter

                                        Standard = HDZero

Analog:       Hauptmenü → Auto Scan  → Standard = Analog

Letzter:      Hauptmenü → Auto Scan  → Standard = Letzter<br><br>

## Lüftersteuerung

Oben auf der Brille befindet sich ein Lüfter. Er kühlt das Innere und verhindert das Beschlagen des Bildschirms.

Die Lüftergeschwindigkeit kann auf Stufe 1-5 eingestellt werden, von minimal bis maximal.

Es gibt zwei Steuerungsmodi für die Seitenlüfter:

- Automatikmodus: Die Firmware regelt die Geschwindigkeit automatisch

- Manueller Modus: Du kannst die Geschwindigkeit für jeden Lüfter manuell einstellen

Unabhängig vom Modus läuft der obere Lüfter auf maximaler Geschwindigkeit, wenn der Temperatursensor eine zu hohe Temperatur meldet.

Die Lüftergeschwindigkeit kann durch langes Drücken der Funktions-Taste geändert werden. Die Änderung wird im OSD angezeigt, um die Luftmenge schnell anzupassen.

## Bildeinstellungen

Die BoxPro verfügt über einen Bildprozessor zur Feinabstimmung des Videos vor der Aufnahme und Anzeige. Dazu gehören:

- Helligkeit

- Sättigung

- Kontrast

- LCD-Helligkeit

::: tip
Hinweis: „Helligkeit“ bezieht sich auf die Bildhelligkeit, die vom Videoprozessor verarbeitet wird, während „LCD-Helligkeit“ die Hintergrundbeleuchtung des LCD-Displays betrifft.
:::

## LCD-Auto-Aus

Wenn die BoxPro keine Bewegung oder Tasteneingabe für eine programmierte Zeit (1/3/5/7 Minuten) erkennt, wird das LCD als Warnung abgedunkelt und nach einer weiteren Minute sowohl das Display als auch der HDZero-Empfänger mit einem kurzen Piepton ausgeschaltet. Die Anzeige und der Empfänger werden wieder aktiviert, wenn Bewegung oder eine Taste erkannt wird. Diese Funktion kann durch Einstellung auf „Nie“ deaktiviert werden.

Es wird empfohlen, die LCD-Auto-Aus-Funktion oder „Go Sleep“ im Hauptmenü zu nutzen, um das LCD bei Nichtgebrauch auszuschalten.

## DVR

Die BoxPro integriert einen DVR für den HDZero-Empfänger, analogen Eingang (RF oder AV) und HDMI-Eingang. Folgende DVR-Optionen stehen zur Verfügung:

- Automatische Aufnahme: Startet, wenn ein gültiges HDZero-RF-Signal erkannt wird, und stoppt, wenn das Signal verloren geht.

- Manuelle Aufnahme: Start/Stop nur durch Drücken der Funktions-Taste.

- MP4- oder TS-Format: MP4 wird von vielen Videoprogrammen besser unterstützt, kann aber bei Stromverlust beschädigt werden. TS speichert den Stream sofort und ist unempfindlich gegen Stromausfall.

- H264/H265: Bei 90fps-Aufnahmen wird H264 verwendet (1280x720x90), sonst H265.

- Audio: Es kann Audio aufgenommen werden von:

    1. Eingebautem Mikrofon

    2. Line-In (externer Mikrofoneingang)

    3. AV-In

TABELLE 3: DVR-Auflösung

<table id="table5">
<tr>
<td></td>
<td>Eingangsquelle</td>
<td>Auflösung</td>
<td>Encoder</td>
</tr>
<tr>
<td>1</td>
<td>HDZero 60fps Kamera</td>
<td>1280x720x60fps</td>
<td>H.265</td>
</tr>
<tr>
<td>2</td>
<td>HDZero 90fps Kamera</td>
<td>1280x720x90fps</td>
<td>H.264</td>
</tr>
<tr>
<td>3</td>
<td>NTSC</td>
<td>1280x720x59.97fps</td>
<td>H.265</td>
</tr>
<tr>
<td>4</td>
<td>PAL</td>
<td>1280x720x50fps</td>
<td>H.265</td>
</tr>
<tr>
<td>5</td>
<td>HDMI in</td>
<td>1280x720 (50,60, 90fps)<br>1920x1080 (50, 60fps)</td>
<td>H.264</td>
</tr>
</table>

::: warning

**Das Dateisystem der SD-Karte kann beschädigt werden, wenn die Brille während des Schreibens plötzlich ausgeschaltet wird.**

  Die BoxPro läuft unter Linux und hat keinen großen Kondensator für Notabschaltung. Der DVR funktioniert nicht, wenn das Dateisystem beschädigt ist. Tipps, um Stromausfall während der Aufnahme zu vermeiden:

- Automatikmodus: Nach der Landung des Quads entweder

    - Lange „Enter“-Taste drücken, um ins Menü zu wechseln, dann Brille ausschalten, oder

    - Quad zuerst ausschalten, 10 Sekunden warten, dann Brille ausschalten

- Manueller Modus: Vor dem Ausschalten Aufnahme mit „Func“-Taste stoppen

- „Scan and Fix“ wählen, falls Windows/Mac Probleme mit der SD-Karte meldet

:::

## DVR für HDMI-Eingang

So funktioniert der DVR bei HDMI-Quelle:

- BoxPro startet automatisch die Aufnahme und:

- Startet neu, wenn sich die HDMI-Auflösung ändert

- Startet neu, wenn die Aufnahmezeit 10 Minuten erreicht

- Stoppt, wenn HDMI-Quelle verloren geht

- Stoppt, wenn weniger als 100MB Speicher frei sind oder SD-Karte entfernt wird

::: tip
Hinweis: Bei HDMI-Quelle gibt es kein Brillen-OSD, auch kein Aufnahme-Icon, Batteriestatus etc.
:::

## Wiedergabe

Die BoxPro kann DVR-Aufnahmen abspielen.

- Die neuesten Aufnahmen werden zuerst gelistet. Mit Steuerkreuz hoch/runter auswählen und klicken zum Abspielen

- In der Steuerleiste mit Steuerkreuz vor/zurück (je 5 Sekunden), klicken für Pause/Wiedergabe

- Langes Drücken der Enter-Taste verlässt die Steuerleiste, nochmal lang drücken verlässt den Player

::: tip
Hinweis: Dateien unter 5MB werden ignoriert.
:::

## OSD

Die Brille unterstützt OSD vom Flight Controller (FC OSD) und eigenes Status-OSD (Goggle OSD). Im Menü „Record Options“ kann gewählt werden, ob beide OSD mit aufgezeichnet werden.

Das Goggle OSD kann durch Drücken der Enter-Taste im Videomodus ein-/ausgeblendet werden. Die Positionen der OSD-Elemente lassen sich unter OSD | OSD-Elemente anpassen ändern.

Die Brille hat eingebaute OSD-Schriftarten für BetaFlight, Arduino und iNav. Die passende Schriftart wird automatisch geladen. Eigene FC-OSD können als Bitmap unter SD-Karte/resource/OSD/FC abgelegt werden.

::: tip
Hinweis: Bei HDMI-Quelle gibt es kein Brillen-OSD, auch kein Aufnahme-Icon, Batteriestatus etc.
:::

## Kanalwahl

Mit Steuerkreuz hoch/runter kann im Videomodus der Kanal für den HDZero-Empfänger eingestellt werden. Dies kann deaktiviert werden, indem eine Datei „no_dial.txt“ ins Hauptverzeichnis der SD-Karte gelegt wird.

## WiFi-Modul (Optional)

Die BoxPro unterstützt WiFi-Video-Streaming auf Smartphone, PC oder Laptop, falls das WiFi/ESP32-Modul verbaut ist. Mehrere Geräte können gleichzeitig verbinden.

Die Steuerung erfolgt komplett über die WiFi-Modul-Seite im Menü. Dort kann die Brille als Host (Access Point) oder Client (Netzwerk beitreten) konfiguriert werden.

Die Seite bietet „Basis“- und „Erweitert“-Felder.

#### Basis-Felder:

- Aktivieren – Schaltet das WiFi-Modul ein/aus

- Modus – Host (Access Point) oder Client (Netzwerk beitreten)

- SSID – Netzwerkname für Host/Client

- Passwort – Passwort für Host/Client (mind. 8 Zeichen)

- Einstellungen übernehmen – Speichert und konfiguriert das Modul mit den geänderten Einstellungen

<img src="/boxmedia/image12.png" id="image7">

#### Erweiterte Felder:

- DHCP – Nur im Client-Modus relevant

- Adresse – IP-Adresse (für Host und Client)

- Netzmaske – Subnetzmaske (für Host und Client)

- Gateway – Gateway-IP (für Host und Client)

- DNS – DNS-Server-IP

- RF-Kanal – Nur im Host-Modus, wählbarer Funkkanal

<img src="/boxmedia/image13.png" id="image8">

#### System-Felder:

- Root-PW – Root-Passwort für die Brille ändern (gilt für SSH/SCP)

- SSH – SSH-Zugriff aktivieren/deaktivieren (standardmäßig deaktiviert)

<img src="/boxmedia/image14.png" id="image9">

Nach Änderungen in „Basis“ oder „Erweitert“ muss auf der „Basis“-Seite „Einstellungen übernehmen“ gewählt werden.

Um einen Videostream per WLAN herzustellen:

1. Die „Basis“-Seite zeigt die nötigen Infos:

    a. Host-Modus – SSID und Passwort zum Verbinden mit dem WLAN der Brille

    b. Client-Modus – Siehe Anleitung deines WLAN-Routers

2. VLC-App (oder andere RTSP-fähige App) installieren

3. In der App „Netzwerkstream öffnen“ wählen und die RTSP-URL aus der Fußnote der „Basis“-Seite eingeben. Standard-IP, falls nicht geändert:

    > rtsp://192.168.2.122:8554/hdzero
::: tip
Hinweis: Die Video-Latenz hängt von Netzwerk, App und Betriebssystem ab.
:::

## ESP32/Backpack-Modul (Optional)

Die BoxPro unterstützt ein integriertes ESP32-Backpack für:

- Kanalwahl für HDZero/Analog je nach Quelle

- Drahtloses Headtracking

- Start/Stop DVR per Funkschalter

### Backpack-Firmware aktualisieren

- Ordner „ELRS“ im Hauptverzeichnis der SD-Karte anlegen

- Mit **ExpressLRS Configurator** Firmware für die Brille bauen:

    1. Zum Backpack-Menü wechseln

    2. Gleiche Release-Version wie beim Radio-Backpack wählen

    3. Ziel: HDZero Goggles -> Built-in ESP32 Backpack

    4. Gleicher Bind-Phrase wie beim Radio-Backpack, sonst manuell binden

    5. Firmware bauen, die folgenden 4 Dateien ins ELRS-Ordner auf SD-Karte kopieren:

        √ boot_app0.bin

        √ bootloader.bin

        √ firmware.bin

        √ partitions.bin

- SD-Karte in die Brille stecken

- Firmware flashen: Firmware -> Update ESP32

<img src="/boxmedia/image15.png" id="image10">         <img src="/boxmedia/image16.png" id="image11">

### BoxPro und Radio binden

Bitte ELRS TX des Radios auf gleiche Version wie Backpack flashen. Siehe ELRS [Tx Backpack Setup](https://www.expresslrs.org/hardware/backpack/backpack-tx-setup/).

Falls Bind-Phrase unterschiedlich, muss beim ersten Mal manuell gebunden werden.

1. BoxPro:  ELRS -> Backpack = an

2. BoxPro:  ELRS -> Bind

3. Radio:  ExpressLRS Lua -> Bind

Nach wenigen Sekunden zeigt die Brille Erfolg an.

### DVR per Funkschalter starten/stoppen

Die Brille unterstützt Start/Stop der Aufnahme per Funkschalter. Einrichtung:

1. BoxPro:  Record Option -> Record Mode = Manuell

2. Radio:  ExpressLRS Lua -> Backpack -> DVR Rec = AUXn↑ | AUXn↓, wobei n der AUX-Kanal des Schalters ist

## Echtzeituhr (RTC)

Die BoxPro ist mit einer Echtzeituhr ausgestattet. Die Erstkonfiguration erfolgt über die Clock-Seite, die sowohl System- als auch Hardware-Uhr setzt. Beim Start wird die zuletzt gesetzte Zeit verwendet.

<img src="/boxmedia/image17.png" id="image12">

Die eingebaute Batterie kann irgendwann leer sein und durch eine CR1220 ersetzt werden. Danach muss die Uhr neu gestellt werden.

**Hinweis: Das Öffnen der Brille zum Batteriewechsel erfolgt auf eigene Gefahr!**
