# HDZero Firmware-Update

Lade die neueste Goggle-Firmware von [HDZero Download](https://www.hd-zero.com/document) herunter.

<table id="table6">
<tr>
<td></td>
<td>Heruntergeladene Firmware (.Zip-Datei)</td>
<td>Inhalt der Zip-Datei</td>
<td >Zweck</td>
</tr>
<tr>
<td rowspan="2">HDZero Goggle 1</td>
<td rowspan="2">HDZEROGOGGLE_<br>Revyyyymmdd.zip</td>
<td>HDZERO_GOGGLE_nnn.bin</td>
<td>Zum Flashen der Firmware über das Goggle-Hauptmenü</td>
</tr>
<tr>
<td>Recovery/HDZG_OS.bin<br>Recovery/HDZG_BOOT.bin<br>Recovery/HDZGOGGLE_RX.bin<br>Recovery/HDZGOGGLE_VA.bin</td>
<td>Für Notfall-Wiederherstellung</td>
</tr>
<tr>
<td rowspan="2">HDZero Goggle 2</td>
<td rowspan="2">HDZEROGOGGLE2_<br>Revyyyymmdd.zip</td>
<td>HDZERO_GOGGLE2_nnn.bin</td>
<td>Zum Flashen der Firmware über das Goggle-Hauptmenü</td>
</tr>
<tr>
<td>Recovery/HDZG_OS.bin<br>Recovery/HDZGOGGLE_RX.bin<br>Recovery/HDZGOGGLE_VA.bin</td>
<td>Für Notfall-Wiederherstellung</td>
</tr>
</table>

> TABELLE 4. Goggle Firmware-Dateien

## Firmware auf die Goggle flashen

Die HDZero Goggle läuft unter Linux. Ihre Firmware enthält die angepasste Linux-Distribution und die Anwendungssoftware. In den meisten Fällen muss nur die Anwendung aktualisiert werden, nicht das gesamte Betriebssystem. In seltenen Fällen kann das Betriebssystem beschädigt werden, z.B. bei Stromausfall während des Updates. Es ist auch möglich, dass zukünftig Änderungen am Betriebssystem vorgenommen werden müssen, um neue Funktionen hinzuzufügen.

Vor dem Update der Firmware gehe zu Hauptmenü|Firmware|Aktuelle Version. Sie sollte folgendes Format haben:

    - n.xx.yyy, oder

    - app:n-xx rx yy va zzz

Wenn n größer oder gleich 9 ist, folge dem [normalen Goggle Firmware-Update-Prozess](#normaler-goggle-firmware-update-prozess-für-n≥-9), andernfalls folge dem [speziellen einmaligen Goggle Firmware-Update-Prozess](#spezieller-einmaliger-goggle-firmware-update-prozess-für-n--9).

### Normaler Goggle Firmware-Update-Prozess (für n≥ 9)

1. Trenne alle Kabel von der Goggle. Nur das Stromkabel angeschlossen lassen;

2. Firmware-Datei vorbereiten:

    a. Für Goggle 1: HDZERO_GOGGLE_nnn.bin

    b. Für Goggle 2: HDZERO_GOGGLE2_nnn.bin

    Kopiere sie ins Stammverzeichnis der als FAT32 formatierten SD-Karte und stelle sicher, dass keine vorherige Firmware im Stammverzeichnis liegt;

3. Schalte die Goggle ein;

4. Gehe zu Hauptmenü | Firmware | Goggle aktualisieren, das Display zeigt die aktuelle Version an;

5. Warte bis zum Abschluss (ca. 3 Minuten), dann schalte aus;

6. Fertig!

### Spezieller einmaliger Goggle Firmware-Update-Prozess (für n < 9)

1. Trenne alle Kabel von der Goggle. Nur das Stromkabel angeschlossen lassen;

2. Extrahiere HDZERO_GOGGLE- nnn.bin/HDZG_BOOT.bin/HDZG_OS.bin und kopiere sie ins Stammverzeichnis einer als FAT32 formatierten SD-Karte;

3. SD-Karte einlegen, Hauptmenü | Firmware | Goggle aktualisieren auswählen. Nach Abschluss ausschalten;

4. Goggle einschalten, 2 Minuten warten, dann ausschalten;

5. Goggle einschalten, 5 Minuten warten, dann ausschalten;

6. Fertig!

::: tip
Hinweis:
     (1) HDZG_BOOT.bin/HDZG_OS.bin werden von der SD-Karte entfernt, wenn das Update erfolgreich war. (2) Die oben angegebene Zeit muss abgewartet werden, NICHT voreilig zum nächsten Schritt übergehen.
:::
Die Goggle kann in seltenen Fällen unbrauchbar werden. Wenn die Goggle vor dem Brick auf Firmware-Version n ≥ 9 war, folge dem [Goggle Notfall-Firmware-Update-Prozess](#goggle-notfall-firmware-update-prozess-für-n≥-9); wenn n kleiner als Version 9 war oder du dir nicht sicher bist, folge dem [Goggle Notfall-Firmware-Update-Prozess mit Phoenix App](#goggle-notfall-firmware-update-prozess-mit-phoenix-app--für-alle-versionen) mit der Phoenix App.

### Goggle Notfall-Firmware-Update-Prozess  (für n≥ 9)

1. Trenne alle Kabel von der Goggle. Nur das Stromkabel angeschlossen lassen;

2. Extrahiere HDZG_OS.bin/ HDZGOGGLE_RX.BIN/ HDZGOGGLE_VA.BIN und kopiere sie ins Stammverzeichnis einer als FAT32 formatierten SD-Karte, dann SD-Karte in die Goggle einlegen;

3. Goggle einschalten, 5 Minuten warten, dann ausschalten;

4. Fertig!

::: tip
Hinweis:
     (1) HDZG_OS.bin/ HDZGOGGLE_RX.BIN/HDZGOGGLE_VA.BIN werden von der SD-Karte entfernt, wenn das Update erfolgreich war.
     (2) Die oben angegebene Zeit muss abgewartet werden, NICHT voreilig zum nächsten Schritt übergehen.
:::
 

### Goggle Notfall-Firmware-Update-Prozess mit Phoenix App  (für alle Versionen)

Lade PhoenixCard.zip von der [HDZero Download](https://www.hd-zero.com/document) Seite herunter und entpacke sie z.B. nach C:\PhoenixCard auf einem Windows-PC. Dies ist ein einmaliger Vorgang. Es gibt derzeit keine Mac- oder Linux-Version.

Lade das neueste Firmware-Paket von der [HDZero Download](https://www.hd-zero.com/document) Seite herunter und entpacke alle Dateien aus der Zip-Datei auf dein Laufwerk, z.B. C:\Temp.

1. Starte C:\PhoenixCard\PhoenixCard.exe;

2. Folge den Schritten in ABB.5, um eine bootfähige SD-Karte zu erstellen;

<img src="/gogglesmedia/image20.png" id="image14">

> ABB 5. Bootfähige SD-Karte erstellen

3. SD-Karte aus Windows auswerfen und in die Goggle einlegen;

 Ziehe alle Kabel ab, z.B. HDMI in/out, Line in/out, AV in. Nur das Stromkabel angeschlossen lassen. Goggle einschalten, du hörst sofort einen langen Piepton. Warte 3 Minuten, dann ertönt ein weiterer langer Piepton;

4. Goggle ausschalten und SD-Karte entfernen (jetzt nicht einschalten);

5. Folge ABB.6, um die SD-Karte aus dem BOOT-Modus wiederherzustellen und formatiere sie als FAT32 unter Windows;

<img src="/gogglesmedia/image22.png" id="image16">
<img src="/gogglesmedia/image21.png" id="image15">

> ABB 6. SD-Karte wiederherstellen

6. Kopiere HDZGOGGLE_RX.bin und HDZGOGGLE_VA.bin ins Stammverzeichnis der SD-Karte;

7. SD-Karte in die Goggle einlegen, Goggle einschalten, 2 Minuten warten, dann ertönt ein langer Piepton;

8. (Optional) SD-Karte entfernen und am PC überprüfen. Die 2 Dateien sollten entfernt sein, wenn der Flash-Vorgang erfolgreich war;

9. Goggle ausschalten und wieder einschalten.

::: tip
Hinweise: 

(1) Eine bootfähige SD-Karte hat eine versteckte Partition, die im Windows Explorer nicht angezeigt wird. Sie bleibt auch nach dem Formatieren mit dem Explorer erhalten. Wird eine bootfähige SD-Karte eingelegt, wenn die Goggle eingeschaltet wird, kann dies zu unerwartetem Flashen und Firmware-Problemen führen.

(2) Schritt (5) muss strikt befolgt werden, um die versteckte bootfähige Partition zu entfernen. Andernfalls kann die Goggle gebrickt werden. In diesem Fall muss der Notfall-Firmware-Update-Prozess wiederholt werden.

(3) Die oben angegebene Zeit muss abgewartet werden, NICHT voreilig zum nächsten Schritt übergehen.

(4) Wenn die Goggle gebrickt ist, zeigt sie den HDZero Boot-Bildschirm und gelangt nicht ins Hauptmenü.
:::

## Firmware auf einen HDZero VTX flashen

Die HDZero Goggle kann Firmware auf einen HDZero Video-Sender (VTX) über dessen FW-Port flashen. Vorgehensweise:

### Einzelnen VTX flashen:

1. Kopiere HDZERO_TX.bin ins Stammverzeichnis einer als FAT32 formatierten SD-Karte

2. Goggle einschalten

3. VTX und HDZero Goggle mit dem mitgelieferten Programmierkabel verbinden

4. Hauptmenü | Firmware | VTX aktualisieren auswählen, der Status des Flash-Vorgangs wird angezeigt

5. VTX trennen

6. Der VTX ist nun mit der neuesten Firmware geflasht

### Mehrere VTX desselben Typs flashen:

1. Kopiere HDZERO_TX.bin ins Stammverzeichnis einer als FAT32 formatierten SD-Karte

2. Goggle einschalten

3. Einen VTX mit dem mitgelieferten Programmierkabel an die HDZero Goggle anschließen

4. Hauptmenü | Firmware | VTX aktualisieren auswählen, der Status wird angezeigt

5. VTX trennen, dieser VTX ist geflasht

6. Schritte 3-5 für die anderen VTX wiederholen

::: tip
Hinweis: 

Das Flashen der VTX-Firmware mit der Goggle wird aus Sicherheitsgründen nicht empfohlen. Das [HDZero Programmierkabel](https://www.hd-zero.com/product-page/hdzero-programming-cable) ist wegen Komfort und Sicherheit vorzuziehen. Allerdings wird ein Windows-System für die HDZero Programmer App benötigt, Mac wird derzeit nicht unterstützt.
:::
