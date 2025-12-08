# VTX LED-Muster

Alle HDZero VTXs verfügen über zwei LEDs: Rot und Blau.

## Rote LED

Die rote LED dient als Stromanzeige. Wenn sie aus oder blinkt, signalisiert dies einen VTX-Fehler. Ein funktionierendes Gerät zeigt ein dauerhaftes rotes Licht. Wenn kein rotes Licht zu sehen ist, prüfen Sie, ob die Stromkabel zum VTX angeschlossen sind und ob die Spannung mit einem Multimeter den Sollwert hat.

## Blaues LED-Muster

Statusanzeige für den Betriebszustand.

Beim Start bestätigen drei schnelle LED-Blinker, dass die MSP-Kommunikation mit dem FC aktiv ist.

Bestimmte Modi werden durch Muster aus langen (1 Sekunde) und kurzen (1/4 Sekunde) Pulsen innerhalb eines Zeitraums von 4 Sekunden dargestellt.

<img src="/media/image12.png" id="image10">

<table id="table2">
<tr>
<td>BLAUES LED-Muster</td>
<td>Bedeutung</td>
<td>Was tun?</td>
</tr>
<tr>
<td>2 kurze Blitze</td>
<td>Kamera nicht erkannt</td>
<td>MIPI-Kabel am VTX und an der Kamera neu einstecken<br>Prüfen, ob das MIPI-Kabel beschädigt ist<br>MIPI-Stecker auf Beschädigung prüfen<br>Kamera austauschen</td>
</tr>
<tr>
<td>3 kurze Blitze</td>
<td>Überhitzung</td>
<td>Lüfter zur Kühlung des VTX verwenden</td>
</tr>
<tr>
<td>4 kurze Blitze</td>
<td>RF-Fehler</td>
<td>VTX austauschen</td>
</tr>
<tr>
<td>1 langer, 1 kurzer Blitz</td>
<td>Im 0 mW Modus</td>
<td>Stick-Befehl (\ /) verwenden, um 0mW zu verlassen</td>
</tr>
<tr>
<td>1 langer, 2 kurze Blitze</td>
<td>Im 0,1 mW Modus</td>
<td>PIT-Modus ausschalten</td>
</tr>
</table>

::: tip
Hinweis: Die ersten drei LED-Muster zeigen Fehlerzustände an und haben Vorrang vor allen anderen. Wenn ein Fehler aktiv ist – z.B. wenn der VTX in den Hitzeschutzmodus wechselt – überschreibt dies andere Einstellungen. Beispielsweise ändert sich die LED-Anzeige beim Umschalten auf 0mW nicht sichtbar, wenn der Hitzeschutz aktiv ist.
:::