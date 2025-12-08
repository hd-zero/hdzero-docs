# Einführung

Der HDZero Halo ist ein kompakter Flight Controller mit H743-MCU für Hochleistungsberechnungen. Er integriert einen Gemini ELRS-Empfänger und bietet einen schaltbaren 9V/3A BEC-Ausgang für Videosender sowie einen 5V/4A-Ausgang für LED-Streifen und andere Peripheriegeräte. Der integrierte ELRS RX vereinfacht den Aufbau des Quads und sorgt mit Gemini für eine leistungsstarke Verbindung.

Der Halo Flight Controller macht das Anschließen paralleler LED-Streifen für einfarbige Beleuchtung einfach und vereinfacht das Routing von adressierbaren LED-Streifen. Für digitale Videosysteme konzipiert, verzichtet er auf den analogen OSD-Chip, um Platz und Kosten zu sparen. Er ist besonders für den Einsatz mit dem HDZero Race v3 VTX optimiert und ermöglicht einen besonders niedrigen Stack.

Der Halo Flight Controller verfügt über spezielle Steckplätze zum Anschluss von ESCs mit beiliegendem 4A-Kabel sowie für beliebige digitale VTXs. Dieses Design macht ihn zu einem lötfreien Flight Controller, der eine einfache Montage und schnellen Austausch im Feld ermöglicht.

Der Halo Flight Controller ist in zwei Versionen erhältlich, MPU6000 und ICM42688, um unterschiedlichen Pilotenpräferenzen gerecht zu werden.

<div style="display: flex; justify-content: space-around; text-align: center; gap: 20px;">
<img src="/halomedia/image3.png" style="width:30%; height: 100%"><img src="/halomedia/image4.png" style="width:30%; height: 100%"> <img src="/halomedia/image5.jpg" style="width:30%; height: 100%">
</div>
<div class="page"></div>

## Spezifikation

<table id="table2">
<tr>
<td>Modell</td>
<td>HDZero Halo Flight Controller</td>
</tr>
<tr>
<td colspan="2">Flight Controller</td>
</tr>
<tr>
<td>MCU</td>
<td>STM32H743 (480MHz)</td>
</tr>
<tr>
<td>Gyro</td>
<td>MPU6000 oder ICM42688</td>
</tr>
<tr>
<td>BEC-Ausgang</td>
<td>DC 5V/4A <br>DC 9V/3A<br>DC 4.5V/0.5A</td>
</tr>
<tr>
<td>Black Box</td>
<td>16MB Flash-Speicher</td>
</tr>
<tr>
<td>I2C-Pads</td>
<td>Ja</td>
</tr>
<tr>
<td>UART-Pads</td>
<td>TX2/RX2, TX7/RX7, TX8/RX8</td>
</tr>
<tr>
<td>ESC-Telemetrie</td>
<td>RX4</td>
</tr>
<tr>
<td>VTX MSP UART</td>
<td>TX5/RX5</td>
</tr>
<tr>
<td>DJI HDL</td>
<td>RX3</td>
</tr>
<tr>
<td>Buzzer-Pads</td>
<td>Ja</td>
</tr>
<tr>
<td>LED-Streifen</td>
<td>Parallel oder Seriell</td>
</tr>
<tr>
<td>USB</td>
<td>Typ-C</td>
</tr>
<tr>
<td>Analoges OSD</td>
<td>Nein</td>
</tr>
<tr>
<td>FC-Firmware</td>
<td>Betaflight: HDZERO_HALO</td>
</tr>
<tr>
<td colspan="2">ELRS-Empfänger</td>
</tr>
<tr>
<td>Chipset</td>
<td>ESP32 + 2x SX1280</td>
</tr>
<tr>
<td>FC UART</td>
<td>TX1/RX1</td>
</tr>
<tr>
<td>Gemini RX</td>
<td>Ja</td>
</tr>
<tr>
<td>RF-Frequenz</td>
<td>2.4GHz</td>
</tr>
<tr>
<td>Max. TX RF-Leistung</td>
<td>10mW</td>
</tr>
<tr>
<td>Antennenanschluss</td>
<td>2xU.FL</td>
</tr>
<tr>
<td>ELRS-Firmware</td>
<td>HDZero Halo FC 2.4G Gemini RX</td>
</tr>
<tr>
<td colspan="2">Abmessungen</td>
</tr>
<tr>
<td>Stromversorgung</td>
<td>3S ~ 8S</td>
</tr>
<tr>
<td>Größe</td>
<td>29x30,5mm mit 20x20 M4-Montagelöchern</td>
</tr>
<tr>
<td>Gewicht</td>
<td>5,6g</td>
</tr>
<tr>
<td>Spezielle Steckplätze für</td>
<td>ESC sowie HDZero und andere digitale VTXs</td>
</tr>
</table>

<div class="page"></div>

## Lieferumfang

- 1x HDZero Halo FC

- 5x Gummitülle (6,6mm)

- 5x Gummitülle (8,0mm)

- 1x ELRS T-sharp Kurzantenne (40mm) 

- 1x ELRS T-sharp Langantenne (90mm)

- 2x ELRS Antennenhalter

- 1x ESC-Kabel (8-polig SH1.0, 30mm)

- 1x 8-poliger SH1.0-Stecker

<img src="/halomedia/image6.png" id="image6"><div class="page"></div>