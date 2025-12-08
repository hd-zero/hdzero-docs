# Freestyle V2 VTX

Der HDZero Freestyle V2 VTX ist unser 2. Generation 5,8GHz Digital-Video-Sender, der in die meisten 3-5-Zoll-HD-Drohnen eingebaut werden kann. Alle Anschlüsse sind durch das CNC-Gehäuse gut geschützt, das Haltbarkeit, HF-Abschirmung und verbesserte Signalqualität bietet. Ein Kabelbaum ist für eine lötfreie Verbindung für Stromversorgung und MSP-UART-Port enthalten. Die Antenne und das MIPI-Kabel werden durch die mitgelieferte Haltestange und Schrauben gesichert.

Der Freestyle V2 VTX ist in der Lage, auf Kanal R1 eine HF-Ausgangsleistung von 1W zu liefern – die Ausgangsleistung nimmt mit steigender Frequenz ab. Ab Werk ist der VTX auf 200mW Ausgangsleistung begrenzt. Um die volle Leistung freizuschalten, folgen Sie den Anweisungen zum [Entsperren der Leistungsbegrenzung](vtx-firmware-update.md#unlock-rf-power-limit).

<div style="display: flex;gap: 10px;">
<img src="/media/image16.png" id="image13"><img src="/media/image17.png" id="image14">
</div>

<table id="table6">
<tr>
<td>1</td>
<td>Gesicherter MIPI-Anschluss</td>
</tr>
<tr>
<td>2</td>
<td>M2-Befestigungsloch</td>
</tr>
<tr>
<td>3</td>
<td>Gesicherter U.FL-Anschluss</td>
</tr>
<tr>
<td>4</td>
<td>Tastatur-Anschluss</td>
</tr>
<tr>
<td>5</td>
<td>FW-Update-Anschluss</td>
</tr>
<tr>
<td>6</td>
<td>Strom (7-25V)/UART-Anschluss</td>
</tr>
<tr>
<td>7</td>
<td>Strom/UART-Kabelbaum</td>
</tr>
</table>

<div style="display: flex;gap: 10px;">
<img src="/media/image18.png" id="image15"><img src="/media/image19.png" id="image16">
</div>


<table id="table7">
<tr>
<td>Strom/UART-Anschluss</td>
<td>Kabelfarbe</td>
<td>Verbunden mit</td>
</tr>
<tr>
<td>Masse</td>
<td>Schwarz</td>
<td>Masse</td>
</tr>
<tr>
<td>Strom</td>
<td>Rot</td>
<td>Strom</td>
</tr>
<tr>
<td>RX</td>
<td>Gelb</td>
<td>FC.TX</td>
</tr>
<tr>
<td>TX</td>
<td>Weiß</td>
<td>FC.RX</td>
</tr>
<tr>
<td>SA</td>
<td>Blau</td>
<td>Nicht verwendet</td>
</tr>
</table>

<img src="/media/image20.png" id="image17">

## Installation

Führen Sie das VTX-Antennenkabel nicht über den VTX, das Antennenkabel muss gerade aus der Rückseite des VTX herausgeführt werden.

Der Freestyle V2 VTX kann mit M2-Schrauben oder dem mitgelieferten doppelseitigen Klebeband montiert werden. In manchen Fällen ist es notwendig, den VTX mit doppelseitigem Klebeband statt Schrauben zu befestigen, um elektrische Störungen beim Aktivieren der Motoren zu vermeiden.

Der Freestyle V2 VTX verbraucht bis zu 15W. Wenn er mit einem FC mit integriertem BEC-Ausgang verbunden ist, stellen Sie sicher, dass das BEC genügend Strom liefern kann. Beispiel: Liefert das BEC 10V, werden mindestens 1,5A Ausgangsstrom benötigt.

Bei Verwendung von GPS halten Sie es physisch vom Freestyle V2 VTX fern – insbesondere von der Antenne –, um Störungen des GPS-Signals zu minimieren.
