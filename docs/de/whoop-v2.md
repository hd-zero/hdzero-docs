# Whoop V2 VTX

Der HDZero Whoop Lite VTX ist ein digitaler HD-Video-Sender, der bis zu 200mW auf 5,8GHz liefern kann. Er unterstützt alle HDZero-Kameras mit MIPI-Anschluss, einschließlich Nano90.

Der Eingangsspannungsbereich beträgt 3V – 12,6V.

- Dieser VTX besitzt keinen Verpolungsschutz. Bei vertauschter Spannungsversorgung wird das Gerät dauerhaft beschädigt. Dies ist die häufigste Ausfallursache. Ein Verpolungsschutz hätte verhindert, dass der VTX mit 1S-Spannung betrieben werden kann.

- Wenn der VTX über ein 5V-Pad des FC/BEC betrieben wird, stellen Sie sicher, dass das 5V-Pad mindestens 1,5A liefern kann.

- Beim direkten Betrieb mit einer 1S-Batterie beachten Sie, dass ein schnelles Gasgeben zu einem sofortigen Spannungsabfall unter 3V führen kann, was zu einem Videoausfall führt.

- Ein externer Kondensator ist beim Anschluss an FC/BEC oder 1S-Batterie nicht erforderlich. Es wird jedoch dringend empfohlen, einen Kondensator zu installieren, wenn der VTX mit einer 3S-Batterie betrieben wird.

Im Lieferumfang sind M2-Gummitüllen zur weichen Montage und eine Messingstange zur Antennenbefestigung enthalten. Obwohl der VTX auf Renn- und anderen Hochgeschwindigkeitsflugzeugen montiert werden kann, wird für solche Anwendungen dringend der HDZero Race V3 VTX empfohlen.

Lötpads:

<img src="/media/image13.jpeg" id="image11" width="300">

<table id="table3">
<tr>
<td>1</td>
<td>MIPI-Anschluss</td>
</tr>
<tr>
<td>2</td>
<td>Power/UART/SA Lötpads</td>
</tr>
<tr>
<td>3</td>
<td>Status-LEDs</td>
</tr>
<tr>
<td>4</td>
<td>u.FL-Anschluss</td>
</tr>
</table>

<table id="table4">
<tr>
<td>G</td>
<td>Masse (Ground)</td>
</tr>
<tr>
<td>V</td>
<td>3V - 12,6V</td>
</tr>
<tr>
<td>RX</td>
<td>FC.TX</td>
</tr>
<tr>
<td>TX</td>
<td>FC.RX</td>
</tr>
</table>

::: tip
Hinweise:

1. Zuerst lesen: [Allgemeine Hinweise zur VTX-Installation](vtx-general.md)

2. Dieser VTX unterstützt keine Kanal- und Leistungseinstellung per Keypad. Er ist für den Betrieb mit einem Flight Controller ausgelegt.
:::
