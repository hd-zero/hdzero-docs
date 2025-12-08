# VTX Firmware-Update Anleitung
## HDZero VTX Programmer

<img src="/media/image24.png" id="image21">Es wird dringend empfohlen, den [HDZero VTX Programmer](https://www.hd-zero.com/product-page/hdzero-vtx-programmer) für das Update des VTX zu verwenden. Nur Windows-Systeme werden derzeit unterstützt.

1. Lade die HDZeroProgrammer.zip von [HDZero Download](https://www.hd-zero.com/document) herunter.    
2. Entpacke HDZeroProgrammer.exe aus der ZIP-Datei nach C:\HDZero

## VTX Firmware mit HDZero Programmer aktualisieren

Starte C:\HDZero\HDZeroProgrammer.exe. Alle kompatiblen HDZero VTX-Modelle, die für Firmware-Updates geeignet sind, erscheinen automatisch in der unten gezeigten Liste.

<img src="/media/image25.png" id="image22">

1. Wähle den VTX-Typ aus, den du aktualisieren möchtest
2. „Load Online Firmware“ lädt die Firmware von GitHub, wähle die gewünschte Version aus, oder
3. „Load Local firmware“, um eine lokale HDZERO_TX.bin auszuwählen,
4. „Flash VTX“, um den Update-Prozess zu starten.

## VTX Firmware herunterladen

Wenn du dich hinter einer Firewall befindest, die den Zugriff auf GitHub einschränkt, musst du die VTX-Firmware manuell herunterladen und lokal flashen.

Die Firmware kann im Bereich VTX Firmware von [HDZero Download](https://www.hd-zero.com/document) heruntergeladen werden. Die Revisionsnummer ist im Format HDZEROVTX_RevYYYYMMDD.zip, wobei „YYYYMMDD“ das Veröffentlichungsdatum angibt.

<img src="/media/image26.png" id="image23">

Die Datei HDZEROVTX_RevYYYYMMDD.zip enthält Firmware für alle kompatiblen HDZero VTX- und AIO-Modelle, die unten aufgeführt sind. In jedem ZIP-Archiv findest du eine HDZERO_TX.bin-Datei, die die spezifische Firmware für diesen VTX-Typ enthält.

<img src="/media/image27.png" id="image24">

## VTX Firmware mit HDZero Brille oder HDZero Empfänger aktualisieren

### Schritte zum Firmware-Update mit der HDZero Brille

Die HDZero-Brille kann Firmware über ihren FW-Port auf einen HDZero Video-Sender flashen. Vorgehensweise:

1. Kopiere HDZERO_TX.bin ins Stammverzeichnis einer als FAT32 formatierten SD-Karte

2. Schalte die Brille ein

3. Verbinde den VTX und die HDZero-Brille mit dem beiliegenden Programmierkabel

4. Gehe ins Hauptmenü | Firmware | Update VTX, das Display zeigt den Status des Flash-Vorgangs an

5. Trenne den VTX

6. Der VTX ist nun mit der neuesten Firmware geflasht

### Schritte zum Firmware-Update mit dem HDZero Empfänger

1. SD-Karte formatieren (FAT32 und Zuordnungseinheit 4096 Bytes wählen);

2. VRX ausschalten, falls eingeschaltet;

3. HDZERO_TX.bin aus der entsprechenden VTX-ZIP-Datei auf die SD-Karte entpacken und SD-Karte ins VRX-Modul einlegen;

4. Kabel mit Modul und VTX verbinden;

5. VRX-Modul einschalten;

6. Bei „Wait to Connect VTX…“ oder „Check cable …“ sicherstellen, dass (4) korrekt verbunden ist;

7. Bei „Firmware update failed“ die Schritte ab (1) wiederholen;

8. Bei „Firmware update successful“ ist der VTX aktualisiert;

9. Die HDZERO_TX.bin wird automatisch von der SD-Karte entfernt.

::: tip
Hinweis: Eine leere Datei namens „DONOTREMOVE.txt“ im Stammverzeichnis der SD-Karte verhindert das automatische Löschen der HDZERO_TX.bin. Dies ist nützlich, wenn mehrere VTX geflasht werden sollen.
:::

## RF-Leistungsbegrenzung aufheben

Der HDZero Freestyle V1/V2 VTX entspricht FCC 47 CFR 97.215(c). Ab Werk ist die Leistung auf 25mW/200mW begrenzt, kann aber mit entsprechender HAM-Lizenz bis zu 1W erreichen. Lade die spezielle Firmware aus dem Bereich Utilities auf [HDZero Download](https://www.hd-zero.com/document) herunter, um höhere RF-Ausgangsmodi zu aktivieren.

Vorgehensweise:

1. Firmware Unlock_FreestyleVTX.zip herunterladen.

2. Entpacke sie ins Stammverzeichnis der SD-Karte.

3. Flashe diese Firmware auf den VTX.

4. Schalte den VTX mit Hauptakku ein, die BLAUE LED blinkt nach Abschluss 3-mal. Damit ist der VTX freigeschaltet.

5. VTX ausschalten.

6. Normale VTX-Firmware ins Stammverzeichnis der SD-Karte entpacken.

7. Diese Firmware auf den VTX flashen.

8. Die höheren RF-Ausgangsoptionen stehen nun zur Verfügung.

::: tip
Hinweise:

1. Die Schritte müssen strikt eingehalten werden. Schritt 4 darf NICHT übersprungen werden.
2. Nach dem Freischalten muss der VTX bei späteren Firmware-Updates nicht erneut freigeschaltet werden.
:::

## Low Band freischalten

Die Low-Band-Option des VTX muss vor der Nutzung freigeschaltet werden. Stelle sicher, dass die Nutzung in deiner Region erlaubt ist.

Vorgehensweise:

1. Unlock_Lowband.zip von www.hd-zero.com/document herunterladen

2. Entpacken und als Firmware-Update auf den VTX flashen.

3. VTX mit Hauptakku einschalten. Die BLAUE LED blinkt 5-mal und erlischt dann, um den Abschluss der Freischaltung anzuzeigen.

4. Die aktuelle Release-Firmware auf den VTX flashen. Im VTX-Menü erscheinen nun zusätzliche Kanäle von L1 bis L8.

::: tip
Hinweis: Die Schritte müssen strikt eingehalten werden. Schritt 3 darf NICHT übersprungen werden.
:::
