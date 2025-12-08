# HDZero Goggle Bedienung

Dieser Abschnitt beschreibt die allgemeine Bedienung der HDZero Goggle.

## Bedienelemente

- Drehrad

- Enter-Taste

- Func-Taste 

<img src="/gogglesmedia/image10.png" id="image5">

## Videoansicht und Menüansicht

<img src="/gogglesmedia/image11.png" id="image6">

## Videoquelle

Die HDZero Goggle kann Video von 5 Quellen anzeigen:

- Integrierter HDZero Digitalempfänger

- Integrierter Analogempfänger (nur Goggle 2)

- AV-Eingang

- Erweiterungsmodul-Eingang (z.B. mit analogem Videomodul)

- HDMI-Eingang

## HDZero Digitalempfänger

Die Option „Jetzt scannen“ im Hauptmenü durchsucht folgende Kanäle nach einem HDZero-Videosignal:

- R1-R8, E1, F1, F2 und F4 Kanäle, oder

- L1-L8, wenn Low Band ausgewählt ist

„Jetzt scannen“ führt Folgendes aus:

- Scannt die oben genannten Kanäle,

- Sperrt auf den Kanal, wenn nur ein gültiges Signal gefunden wird, oder

- Lässt dich zwischen Kanälen wählen, wenn zwei oder mehr gefunden werden, oder

- Setzt das Scannen nach 5 Sekunden fort, wenn kein Signal erkannt wird, oder

- Wartet auf langen Druck der Enter-Taste, um ins Hauptmenü zurückzukehren

::: tip
Hinweise:

 1. Um Low Band zu aktivieren: (1) VTX-Seite: Im VTX-Menü auf Lowband stellen, (2) Goggle-Seite: Quelle -> HDZero Band auf Lowband stellen. Hier die Mittenfrequenzen für L1-L8:

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

2. Nur die Nano 90 Kamera unterstützt 540p60-Modus. Bei 540p60 muss die Goggle unter Quelle > HDZero BW auf Narrow stehen. Alle anderen Modi benötigen Wide.
:::
## Analogeingang

Die HDZero Goggle nimmt analoges Videosignal entgegen von (1) der AV-Buchse, (2) dem externen Erweiterungsmodul (nicht enthalten, erhältlich im [HDZero Shop](http://www.hd-zero.com/shop)) oder (3) dem integrierten Analogempfänger bei Goggle 2. Die Verarbeitung ist identisch, aber das Erweiterungsmodul bietet Plug-and-Play für Standard-FPV-Module. Im Menü gibt es einen Softschalter, um das Modul-Bay mit Strom zu versorgen (standardmäßig aus).

Die Goggle nutzt einen neuartigen Ansatz zur Signalverarbeitung für bessere Analogqualität:

- Videodecoder mit adaptivem Kammfilter zur Trennung von Y/C aus dem Composite-Signal

- Deinterlacer zur Umwandlung von Halbbildern in Vollbilder (kein Zeilendoppler)

- Upscaler für Aufnahme und Anzeige

<img src="/gogglesmedia/image12.png">

> ABB 4. Signalverarbeitung für Analog-Eingang Goggle 1

<img src="/gogglesmedia/image13.png" id="image7">

> ABB 5. Signalverarbeitung für Analog-Eingang Goggle 2

## Lüftersteuerung

Es gibt einen Lüfter oben und je einen an den Seiten der Goggle. Alle Lüfter sind weich gelagert zur Reduktion von Vibrationen und Geräuschen. Drei Temperatursensoren befinden sich oben und an den Seiten.

Diese Lüfter sind entscheidend für die Leistung:

- Der obere Lüfter kühlt die OLED-Displays und verhindert Beschlagen

- Die Seitenlüfter kühlen IO- und RF-Boards

Sie verhindern Überhitzung, verlängern die OLED-Lebensdauer und sichern maximale HDZero RF-Leistung.

Der obere Lüfter kann auf Stufe 1-5, die Seitenlüfter auf 2-9 eingestellt werden (min-max).

Es gibt zwei Modi für die Seitenlüfter:

- Automatik: Die Firmware regelt die Geschwindigkeit automatisch

- Manuell: Geschwindigkeit kann für jeden Lüfter eingestellt werden

- Unabhängig vom Modus schaltet die Firmware in den **Rescue**-Modus, wenn:

    1. Temperatursensor oben meldet Hitze: oberer Lüfter auf max

    2. Temperatursensor links/rechts meldet Hitze: linker/rechter Lüfter auf max

Die Geschwindigkeit des oberen Lüfters kann durch langes Drücken der Func-Taste geändert werden. Die Änderung wird im OSD angezeigt.

::: tip
Hinweise: 

1. Nur die Seitenlüfter haben Automatikmodus. Der obere Lüfter ist immer manuell, außer im Rescue-Modus.

2. Automatikmodus für Seitenlüfter empfohlen, obere Lüftergeschwindigkeit nach Wunsch einstellen.
:::

## Bildeinstellungen

Die Goggle hat einen Bildprozessor zur Feinabstimmung vor DVR und Anzeige:

- Helligkeit

- Sättigung

- Kontrast

## OLED-Steuerung

Die OLED-Helligkeit kann nach Wunsch eingestellt werden (gilt nur für das Display).

Wird keine Bewegung oder Tastenbetätigung erkannt (1/3/5/7 Minuten), dimmt die Goggle das OLED als Warnung und schaltet nach einer weiteren Minute Display und HDZero-Empfänger mit kurzem Piepton ab. Bewegung oder Tastendruck reaktiviert alles. Diese Funktion kann durch „Nie“ deaktiviert werden.

OLED-Displays bieten lebendige Farben, können aber bei statischem Bild „Image Retention“ oder „Burn-in“ bekommen. Es wird empfohlen, die OLED-Auto-Off-Funktion oder „Go Sleep“ zu nutzen.

## DVR 

Die Goggle hat einen DVR für HDZero und Analog-Eingang. Optionen:

- **Automatische Aufnahme**: Startet bei erkanntem HDZero RF, stoppt bei Signalverlust

- **Manuelle Aufnahme**: Start/Stopp nur per Func-Taste

- **MP4- oder TS-Format**: MP4 ist kompatibler, kann aber bei Stromverlust beschädigt werden. TS speichert sofort und ist sicherer. TS wird empfohlen.

- **H264/H265**: Bei 90fps-Aufnahme H264 (1280x720x90), sonst H265

- **Audio**: Aufnahme optional. Drei Quellen:

    - Integriertes Mikrofon

    - Line In (Line in/out, meist externes Mikro)

    - AV In (AV-Buchse oder Analogempfänger)

**Das Dateisystem der SD-Karte kann durch plötzliches Ausschalten während des Schreibens beschädigt werden.**

Die Goggle läuft unter Linux und kann bei abruptem Ausschalten keine Notfalldaten speichern. Das kann zu beschädigten Dateien führen. Tipps:

- Automatikmodus: Nach Landung entweder

    - Lange Enter drücken für Menü, dann ausschalten, oder

    - Quad ausschalten, 10 Sekunden warten, dann Goggle ausschalten

- Manueller Modus: Vor dem Ausschalten Func-Taste drücken, um DVR zu stoppen

- „Scan and Fix“ wählen, wenn Windows/Mac Probleme meldet

::: tip
Hinweis: Start/Stopp des DVR ist bequem per ELRS-Backpack möglich. Siehe [ESP32/Backpack-Modul](#esp32backpack-module).

 

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
<td>Wie Eingangsauflösung und Bildrate</td>
<td>H.264</td>
</tr>
</table>
:::

## Wiedergabe

Die Goggle kann DVR-Aufnahmen abspielen.

- Die neuesten Aufnahmen werden zuerst gelistet. Mit Drehrad auswählen und klicken zum Abspielen

- Im Controller-Balken mit Drehrad vor/zurück (5 Sekunden), klicken für Pause/Play

- Langes Drücken der Enter-Taste verlässt den Controller-Balken, nochmal lang drücken beendet den Player

::: tip
Hinweise: 

1. Dateien unter 5MB werden ignoriert.

2. Die Wiedergabe dient zur schnellen Kontrolle, nicht für volle Bildrate.
:::
## OSD

Die Goggle unterstützt OSD vom Flugcontroller (FC OSD) und eigenes Status-OSD (Goggle OSD). Im Menü kann gewählt werden, ob beide OSDs mit aufgezeichnet werden.

Goggle OSD kann per Enter-Taste im Video-Modus ein-/ausgeblendet werden. Die Positionen sind in der aktuellen Firmware fest.

Es sind OSD-Fonts für BetaFlight, Arduino und iNav integriert. Die Goggle lädt automatisch den passenden Font je nach Flugcontroller. Eigene FC-OSD-Fonts können als Bitmap unter SD-Karte/resource/OSD/FC abgelegt werden.

## Kanalwahl

Mit Drehrad kann im Videomodus der Kanal für HDZero- oder Analogempfänger (Goggle 2) gewählt werden. Dies kann deaktiviert werden, indem eine Datei „no_dial.txt“ ins SD-Karten-Stammverzeichnis gelegt wird.

Die Kanalwahl ist auch per ELRS-Backpack möglich.

## ESP32/Backpack-Modul

Die Goggle unterstützt ein integriertes ESP32-Backpack für:

- Kanalwahl HDZero-Empfänger

- Kanalwahl Analogempfänger (Goggle 2)

- Drahtloses Headtracking

- Start/Stopp DVR per Funkschalter

### ELRS-Backpack-Firmware aktualisieren

- **ExpressLRS Configurator** von [Releases](https://github.com/ExpressLRS/ExpressLRS-Configurator/releases) installieren

- Firmware für Goggle bauen:

    1. Auf Backpack-Menü wechseln

    2. Gleiche Release-Version wie beim Radio-Backpack wählen

    3. Ziel HDZero Goggles -> Built-in ESP32 Backpack wählen

    4. Gleichen Bind-Phrase wie beim Radio-Backpack setzen, sonst manuell binden

    5. „BUILD“ klicken. Es erscheinen 4 Dateien, diese ins „ELRS“-Verzeichnis der SD-Karte kopieren:

        a. boot_app0.bin

        b. bootloader.bin

        c. firmware.bin

        d. partitions.bin

- SD-Karte in die Goggle einlegen

- Hauptmenü: Firmware -> ESP32 aktualisieren, um Backpack-Firmware zu flashen

<img src="/gogglesmedia/image14.png" id="image8">    <img src="/gogglesmedia/image15.png" id="image9">

### HDZero Goggle und ELRS TX binden

Bitte gleiche Backpack-Firmware-Version auf Sender und Goggle verwenden. Siehe [Tx Backpack Setup](https://www.expresslrs.org/hardware/backpack/backpack-tx-setup/).

Bei unterschiedlichem Bind-Phrase muss manuell gebunden werden:

1. Goggle: ELRS -> Backpack = an

2. Goggle: ELRS -> Bind

3. Radio: ExpressLRS Lua -> Bind

Nach wenigen Sekunden zeigt die Goggle Erfolg an.

### DVR Start/Stopp per Schalter

Die Goggle unterstützt Start/Stopp der Aufnahme per Funkschalter. Einrichtung:

1. Goggle: Aufnahmeoption -> Aufnahmemodus = Manuell

2. Radio ExpressLRS Lua -> Backpack -> DVR Rec = AUXn↑ | AUXn↓, wobei n der AUX-Kanal des Schalters ist

### Kanalwahl per Funk

Die Goggle unterstützt Kanalwahl per ExpressLRS Lua:

1. Radio ExpressLRS Lua -> VTX Admin öffnen

2. Band und Kanal wählen

3. VTx senden

**Hinweis: Kanalwahl gilt für HDZero- und Analogempfänger.**

<div class="page"></div>

## WiFi-Modul 

Das HDZero Goggle 1 Erweiterungsmodul V2 und Goggle 2 unterstützen WiFi-Video-Streaming auf Smartphone, Desktop oder Laptop. Mehrere Geräte können gleichzeitig verbinden.

Die Steuerung erfolgt komplett über die WiFi-Modul-Seite im Menü. Es kann als Host (Access Point) oder Client (Netzwerk beitreten) konfiguriert werden.

Die WiFi-Modul-Seite bietet „Basis“- und „Erweitert“-Felder.

### Basis-Felder

- Aktivieren – Schaltet das WiFi-Modul ein/aus

- Modus – Host (Access Point) oder Client (Netzwerk beitreten)

- SSID – Netzwerkname für Host und Client getrennt einstellbar

- Passwort – Passwort für Host und Client getrennt einstellbar

    > Passwort muss mindestens 8 Zeichen haben

- Einstellungen anwenden – Speichert und konfiguriert das WiFi-Modul

<img src="/gogglesmedia/image16.png" id="image10">

### Erweiterte Felder

- DHCP – Nur im Client-Modus relevant

    > Die angegebene Adresse wird angefragt, Router kann aber eine andere vergeben

- Adresse – Netzwerk-IP-Adresse

    > Gilt für Host- und Client-Modus

- Netmask – Subnetzmaske

    > Gilt für Host- und Client-Modus

- Gateway – Gateway-IP-Adresse

    > Gilt für Host- und Client-Modus

- DNS – Domain Network Service IP-Adresse

- RF-Kanal – Nur im Host-Modus, wählbarer Funkkanal

<img src="/gogglesmedia/image17.png" id="image11">

### Systemfelder

- Root-PW – Root-Passwort für die Goggle ändern

    > Gilt für SSH und SCP

- SSH – SSH-Zugriff aktivieren/deaktivieren

    > Standardmäßig aus Sicherheitsgründen deaktiviert

<img src="/gogglesmedia/image18.png" id="image12">

Nach Änderungen in „Basis“ oder „Erweitert“ muss auf der „Basis“-Seite „Einstellungen anwenden“ gewählt werden.

Um einen Videostream per WLAN mit Smartphone oder PC herzustellen:

1. Die „Basis“-Seite zeigt die nötigen Infos:

    a. **Host-Modus** – SSID und Passwort zum Verbinden mit dem Goggle-WLAN

    b. **Client-Modus** – Siehe Handbuch des WLAN-Zugangspunkts

2. VLC-App (oder andere RTSP-fähige App) installieren

3. In der App „Netzwerkstream öffnen“ wählen und die RTSP-URL aus der Fußnote der „Basis“-Seite eingeben. Standard-IP, falls nicht geändert:

    > rtsp://192.168.2.122:8554/hdzero 

Videoverzögerung ist durch Netzwerkprotokolle, Pufferung und Betriebssystem zu erwarten.

## Echtzeituhr (RTC)

Die Goggle enthält eine Echtzeituhr. Goggle 1 wird ohne Batterie geliefert, Goggle 2 mit. Fehlt die Batterie oder ist sie leer, gehen Datum und Uhrzeit verloren. Die RTC kann über die Clock-Seite eingestellt werden („Set Clock“). Mit nachgerüsteter Batterie nur einmal nötig, sonst wird beim Start der letzte Wert übernommen.

<img src="/gogglesmedia/image19.png" id="image13">

Eine passende Batterie ist z.B. eine CR2032 mit MX1.25-2P-Stecker, siehe [hier](https://www.amazon.com/dp/B08M6FXT8Q?ref=ppx_yo2ov_dt_b_product_details&th=1&fbclid=IwAR0W2mmgafoAp03hVMCtfE8o-vBdCsCR-B5YXFN_fpaUc31RkRhlUvJvIog).

**Hinweis: Das Öffnen der Goggle zum Einbau der Batterie geschieht auf eigene Verantwortung!**
