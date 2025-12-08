# HDZero BoxPro Firmware-Update

Lade die neueste Firmware HDZEROBOXPRO_Revyyyymmdd.zip von der [HDZero Downloadseite](https://www.hd-zero.com/document) herunter und entpacke sie anschließend.

TABELLE 4. Firmware-Dateien

<table id="table6">
<tr>
<td>Firmware-Datei</td>
<td>Verwendung</td>
</tr>
<tr>
<td>HDZERO_BOXPRO-*.bin</td>
<td>Firmware über das Menü flashen</td>
</tr>
<tr>
<td>Recovery/HDZB_OS.bin</td>
<td rowspan="3">Notfall-Wiederherstellung</td>
</tr>
<tr>
<td>Recovery/HDZBOX_RX.bin</td>
</tr>
<tr>
<td>Recovery/HDZBOX_VA.bin</td>
</tr>
</table>

Die Brille kann in seltenen Fällen unbrauchbar werden. Folge in diesem Fall dem [Notfall-Firmware-Update-Prozess](#emergency-firmware-update-process), um sie wiederherzustellen. Andernfalls folge dem [normalen Firmware-Update-Prozess](#normal-goggle-firmware-update-process).

## Normaler Firmware-Update-Prozess

1. Trenne alle Kabel von der Brille. Nur das Stromkabel bleibt angeschlossen.

2. Kopiere HDZERO_BOXPRO-*.bin in das Hauptverzeichnis einer als FAT32 formatierten SD-Karte und stelle sicher, dass keine vorherige Firmware im Hauptverzeichnis liegt.

3. Schalte die Brille ein.

4. Gehe ins Hauptmenü | Firmware | Update Goggle, das Display zeigt die aktuelle Version an.

5. Warte bis zum Abschluss (ca. 3 Minuten), dann schalte die Brille aus.

6. Fertig!

## Notfall-Firmware-Update-Prozess

1. Trenne alle Kabel von der Brille. Nur das Stromkabel bleibt angeschlossen.

2. Entpacke Recovery/HDZB_OS.bin, Recovery/HDZBOX_RX.bin und Recovery/HDZBOX_VA.BIN, kopiere sie ins Hauptverzeichnis einer als FAT32 formatierten SD-Karte und stecke die SD-Karte in die Brille.

3. Schalte die Brille ein, warte 5 Minuten und schalte sie dann aus.

4. Fertig!
::: tip
Hinweis: HDZB_OS.bin, HDZBOX_RX.BIN und HDZBOX_VA.BIN werden nach erfolgreichem Update von der SD-Karte entfernt.
:::