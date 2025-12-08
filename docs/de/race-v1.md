# Race V1 VTX

Der HDZero Race VTX ist ein digitaler HD-Video-Sender, der bis zu 200mW auf 5,8GHz liefern kann. Er unterstützt alle HDZero-Kameras mit MIPI-Anschluss, einschließlich Nano90.

Der Eingangsspannungsbereich beträgt 7V – 17V.

<img src="/media/image39.png" id="image34">

<table id="table14">
<tr>
<td>1</td>
<td>Strom-/UART-Anschluss</td>
</tr>
<tr>
<td>2</td>
<td>FW-Update-Anschluss</td>
</tr>
<tr>
<td>3</td>
<td>MIPI-Anschluss</td>
</tr>
<tr>
<td>4</td>
<td>u.FL-Antennenanschluss</td>
</tr>
<tr>
<td>5</td>
<td>u.FL-Antennen-Befestigungslöcher</td>
</tr>
<tr>
<td>6</td>
<td>Power-LED (rot)</td>
</tr>
<tr>
<td>7</td>
<td>Status-LED (blau)</td>
</tr>
<tr>
<td>8</td>
<td>Befestigungslöcher (20x20 M4)</td>
</tr>
<tr>
<td>9</td>
<td>Kabelbinder (4x)</td>
</tr>
<tr>
<td>10</td>
<td>u.FL-Antennen-Befestigungsschrauben(4x)/Mutter(4x)/Platte</td>
</tr>
<tr>
<td>11</td>
<td>Gummitülle (M4 auf M3 4x)</td>
</tr>
<tr>
<td>12</td>
<td>Power/UART-Kabelbaum (20cm) und ein PH2.0-Anschluss (6P)</td>
</tr>
</table>

<img src="/media/image40.png" id="image35">

<table id="table15">
<tr>
<td>Power/UART-Anschluss</td>
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
<td>7-17V</td>
<td>Strom</td>
</tr>
<tr>
<td>T1</td>
<td>Grün</td>
<td>FC.RX</td>
</tr>
<tr>
<td>R1</td>
<td>Gelb</td>
<td>FC.TX</td>
</tr>
<tr>
<td>T2</td>
<td>Weiß</td>
<td>NICHT VERBINDEN</td>
</tr>
<tr>
<td>R2/SA</td>
<td>Grau</td>
<td>FC.SA (TX)</td>
</tr>
</table>

## Verbindung zwischen Race V1 VTX und FC

Es gibt 3 Methoden, um den VTX mit dem Flight Controller zu verbinden:

- Den beiliegenden Kabelbaum einstecken, die Kabel auf die
- passende Länge kürzen und an den FC anlöten
- Lötpads auf der Rückseite des Anschlusses verwenden
- Für FCs mit BEC und UART-Anschluss: Kabelbaum am beiliegenden PH2.0-Anschluss (siehe oben) anbringen und den Kabelbaum ohne Löten mit dem FC verbinden.

::: warning
Überprüfen Sie vor dem direkten Einstecken, ob die Pinbelegung mit der des FC übereinstimmt, um sicherzugehen.
:::

## Montage einer u.FL-Antenne oder eines Pigtails

<img src="/media/image41.png" id="image36">

Es gibt 2 Methoden, um die Antenne am VTX zu befestigen:

- Mit den beiliegenden Befestigungsschrauben, Muttern und Platte;
- Mit den beiliegenden Kabelbindern.
