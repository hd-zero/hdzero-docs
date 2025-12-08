# Einrichtung

Die HDZero BoxPro bietet viele Funktionen, die individuell angepasst werden können.

## Netzschalter

An der rechten Seite der Brille befindet sich ein Schiebeschalter. Damit kann die Brille ein- oder ausgeschaltet werden, oder du lässt ihn eingeschaltet und nutzt den DC-Stecker zum Ein-/Ausschalten.

Um Spannungsspitzen zu vermeiden, darf eine 6S-Batterie (max. 4,2V/Zelle) nur angeschlossen werden, wenn der Schalter aus ist.

## Stromversorgung/Verbrauch

Die Brille unterstützt 7-25,2V Eingangsspannung 1. Achte auf die richtige Polarität 2 (Mittelpin positiv), bevor du die Brille einschaltest.

TABELLE 1. Stromverbrauch

<table id="table2">
<tr>
<td></td>
<td>Modus</td>
<td>Stromverbrauch</td>
</tr>
<tr>
<td>1</td>
<td>HDZero Digital</td>
<td>1,2A@12V</td>
</tr>
<tr>
<td>2</td>
<td>Analog RF</td>
<td>0,8A@12V</td>
</tr>
<tr>
<td>3</td>
<td>HDMI in</td>
<td>0,7A@12V</td>
</tr>
</table>

::: tip
Hinweis:

1. KEINE 6S HV-Lipo verwenden, das zerstört die Brille dauerhaft.

2. Die Brille hat eine selbst rückstellende Sicherung gegen Verpolung. Wenn sie ausgelöst wurde, etwas warten. Immer auf richtige Polarität achten, vorher mit Batterieprüfer testen. Leuchten die Anzeigen nicht, sind die Batterien falsch herum eingelegt und die Sicherung schützt die Brille.
:::
## XT60-Kabel

Im Lieferumfang ist ein 1200mm XT60-Kabel für den Anschluss einer Taschebatterie. Das Kabel hat keinen Spannungsregler, die Spannung wird direkt durchgeleitet.

::: tip
Hinweis:

1. Keine Batterie mit mehr als 6S anschließen, maximale Spannung ist 6S (4,2V/Zelle).

2. Manche XT60-Kabel, z.B. HDZero VRX-Kabel, haben integrierte DC-Regler. Das Kabel muss genug Strom liefern können (siehe Tabelle 1). Sonst startet die Brille nicht oder startet ständig neu.
:::
## Optik-Linse

Die Optik der BoxPro enthält eine Linse für ein klares, immersives Bild.

*Hinweis: Die Linse besteht aus Kunststoff. Nur mit einem weichen Mikrofasertuch oder Brillenputztüchern reinigen, um Kratzer zu vermeiden.*

## Dioptrieneinsatz

Die Brille hat keine eingebaute optische Anpassung. Nutzer können einen Dioptrieneinsatz nach Rezept im [HDZero Shop](http://www.hd-zero.com/shop) bestellen.

::: tip
Hinweis: Dioptrieneinsatz ist nicht enthalten und muss separat gekauft werden.

<img src="/boxmedia/image5.png" id="image3">
:::
## Kopfband

Im Lieferumfang ist ein 30mm (1,2 Zoll) breites Kopfband mit Batteriefach. Nach Anpassung der Gesichtsauflage und Polsterung das Band aufsetzen und die Spannung einstellen.

## HDMI-Eingang

Die BoxPro hat einen HDMI 1.4b Mini-HDMI-Eingang. Das HDMI-Signal wird mit weniger als 1ms Latenz auf das LCD geleitet.

Die meisten HDMI-Probleme entstehen durch falsche Monitoreinstellungen oder defekte Kabel. Bei Problemen andere HDMI-Quellen und Kabel testen.

Die aktuelle Firmware unterstützt bis 1080p60 und 720p100 am HDMI-Eingang.

## HDMI-Ausgang

Die BoxPro hat einen HDMI 1.3a Mini-HDMI-Ausgang. Es wird exakt das angezeigt, was auch auf dem OLED zu sehen ist.

TABELLE 2. HDMI-Ausgabeformat

<table id="table3">
<tr>
<td></td>
<td>Eingangsquelle</td>
<td>HDMI-Ausgabeformat</td>
</tr>
<tr>
<td>1</td>
<td>HDZero 60fps Kamera</td>
<td>1280x720x60fps</td>
</tr>
<tr>
<td>2</td>
<td>HDZero 90fps Kamera</td>
<td>1280x720x90fps</td>
</tr>
<tr>
<td>3</td>
<td>NTSC</td>
<td>1280x720x59,97fps</td>
</tr>
<tr>
<td>4</td>
<td>PAL</td>
<td>1280x720x50fps</td>
</tr>
<tr>
<td>5</td>
<td>HDMI in</td>
<td>Nicht unterstützt</td>
</tr>
</table>

## AV-Eingang

Die BoxPro unterstützt AV-Eingang über eine 3,5mm AV-Buchse. Die Belegung ist in ABB. 1 dargestellt.

Das AV-Kabel ist nicht enthalten. Es ist im [HDZero Shop](http://www.hd-zero.com/shop) und anderen Shops erhältlich.

<div style="display: flex; justify-content: space-around; text-align: center; gap: 20px;">

  <div style="flex: 1">
    <img src="/boxmedia/image3.png" alt="ABB. 1" style="height:180px; object-fit: contain;"><br>
    ABB. 1. AV-Eingangsbuchse
  </div>

  <div style="flex: 1">
    <img src="/boxmedia/image7.png" alt="ABB. 2" style="height:180px; object-fit: contain;"><br>
    ABB. 2. HT-Ausgangsbuchse
  </div>

  <div style="flex: 1">
    <img src="/boxmedia/image4.png" alt="ABB. 3" style="height:180px; object-fit: contain;"><br>
    ABB. 3. Line In/Out Buchse
  </div>

</div>

## Headtracker (HT)-Ausgang

Die BoxPro hat eine 6-Achsen-Inertialeinheit für Headtracking (Pan+Tilt). Die Belegung ist in ABB. 2 dargestellt.

Das HT-Kabel ist nicht enthalten. Es ist im [HDZero Shop](http://www.hd-zero.com/shop) und anderen Shops erhältlich.

## Audio Line In/Out

Die BoxPro hat eine CTIA-Standard 3,5mm Line In/Out-Buchse für Mikrofon und Kopfhörer. Die Belegung ist in ABB. 3 dargestellt.

## Open Source

Die BoxPro ist Open Source. Die SoC-Firmware findest du auf [Github](https://github.com/hd-zero).
