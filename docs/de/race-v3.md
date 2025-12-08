# Race V3 VTX

Entwickelt für FPV-Rennen ist der HDZero Race V3 VTX unsere dritte Generation des digitalen Video-Senders. Mit einem Spannungsbereich ab 4V kann er vom 5V 1,5A-Regler der meisten FCs oder bis zu 12V für FCs mit HD VTX-Anschluss betrieben werden. Er ist klein (28x32x5mm) und leicht (5,5 Gramm). Mit einer Breite von nur 28mm entspricht der VTX nun der Breite vieler FCs, was die Haltbarkeit verbessert und das Gewicht reduziert. Die Antenne wird sicher mit einer Metallstange und Schrauben befestigt. Kein Löten nötig – einfach den Kabelbaum in einen kompatiblen HD-ready FC einstecken.

Der HDZero Race V3 VTX ist auf Langlebigkeit ausgelegt, nicht auf Gewicht. Er besteht aus einer 1,6mm dicken Leiterplatte, im Vergleich zur 1,0mm Leiterplatte des Whoop lite VTX. Außerdem werden größere Bauteile für mehr Stabilität verwendet. Für die kleineren Komponenten wird eine zusätzliche Klebeschicht aufgetragen, um den Schutz bei Abstürzen zu erhöhen.

<div style="display: flex;gap: 10px;">
<img src="/media/image14.png" id="image13">
</div>

<table id="table5">
<tr>
<td>1</td>
<td>VTX-R3-Platine</td>
</tr>
<tr>
<td>2</td>
<td>SmartAudio/Tramp (Optional)</td>
</tr>
<tr>
<td>3</td>
<td>Kabelbaum zur Verbindung mit FC<br>Rot = BEC 4-12V<br>Schwarz = GND<br>Weiß = VTX UART TX (an FC.RX anschließen) <br>Gelb = VTX UART RX (an FC.TX anschließen)</td>
</tr>
<tr>
<td>4</td>
<td>Gummitülle (M4 auf M3)</td>
</tr>
<tr>
<td>5</td>
<td>Metallstange und Schrauben zur Antennenbefestigung</td>
</tr>
</table>

## Installation

Die rechte Abbildung zeigt die typische Verbindung mit einem FC, der das MSP VTX-Protokoll unterstützt.<img src="/media/image15.png" id="image12"> Versorgen Sie den Race V3 VTX nicht über VBAT, er ist dafür ausgelegt, an einen digitalen VTX-Port eines FCs mit BEC (5V-12V) angeschlossen zu werden. Race V3 kann auch an den meisten FC 5V-Pads betrieben werden, wenn diese für mindestens 2A ausgelegt sind.

Montieren Sie ihn oben auf einem 20x20mm Stack mit den beiliegenden M3-Gummitüllen. Richten Sie den VTX so aus, dass der MIPI- oder Antennenanschluss nach vorne zeigt. So ist die Platine am besten geschützt.

::: warning
Kleben Sie den VTX nicht mit Tape auf den Stack oder Rahmen, da dies nicht genug physische Trennung bietet, damit die HF-Schaltung optimal funktioniert.
:::