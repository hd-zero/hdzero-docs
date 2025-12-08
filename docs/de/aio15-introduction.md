# Einführung

<div style="display: flex; align-items: center; justify-content: space-around; margin: 40px">
<img src="/aio15media/image3.png">
</div>

Der **HDZero AIO15** ist das weltweit erste digitale Video-AIO (All-in-One; Alles auf einem Board), das es ermöglicht, 80-mm-Whoops mit einem Gewicht von unter 33,4 g flugfertig zu machen. Der AIO15 integriert

- einen **G4-basierten Flight Controller**,
- einen **HDZero 5,8 GHz digitalen Videosender**,
- einen **seriellen 2,4 GHz ExpressLRS 3.0 Empfänger**,
- einen **BlueJay 4-in-1 15A x4 ESC** sowie
- einen **5V/1A BEC**.
  Er ist ideal für Tiny-Whoop-Freestyle geeignet.

> Ein 5V/3A BEC (Battery Eliminator Circuit) ist ein elektronischer Spannungsregler, der eine höhere Batteriespannung (z. B. 12V) auf eine stabilisierte Spannung von 5 Volt reduziert und gleichzeitig eine Stromstärke von bis zu 3 Ampere für andere Komponenten, wie Servos oder Empfänger in funkgesteuerten Modellen, bereitstellt, ohne dass eine separate Batterie benötigt wird.

Das AIO15 verwendet ein **Composite-Video-Interface** statt MIPI, was Fläche und Gewicht reduziert. Es ist voll kompatibel mit den HDZero Lux- und Eco-Kameras, jedoch nicht mit Kameras, die MIPI-Anschlüsse besitzen.

Erhältlich ist das AIO15 bei großen FPV-Händlern weltweit sowie in den offiziellen Online-Shops von Happymodel und HDZero.

## Spezifikationen

- **MCU:** STM32G473 (170 MHz, 512K Flash)
- **Gyro:** ICM42688
- Integrierte Spannungs- und Strommesser
- Eingebauter **15A (je Kanal) BlueJay 4-in-1 ESC**
  - MCU: EFM8BB21
  - HV-Strom: 15A x4 (kontinuierlich), 18A x4 (Peak, 3 Sek.)
  - Werksfirmware: **Z_H_30_48_v0.19.2.HEX**
  - Dshot600 bereit
- Eingebauter **5.8G HDZero VTX**
  - RF-Ausgang: 25mW / 200mW
  - Unterstützte Kanäle: R1-R8, F2/F4, L1-L8
  - UFL-Anschluss (ultraleichte lineare Antenne inklusive)
- Eingebauter **serieller ExpressLRS 2.4GHz Empfänger**
  - Paket-Raten: 50/100/150/250/333/500/D250/D500/F500/F1000 Hz
  - Vorgefertigte lackierte Drahtantenne
  - Telemetrie-Ausgangsleistung: <12 dBm
  - Eingebauter **5V/3A BEC** (siehe Notiz oben)
  - Flight-Controller-Firmwareziel: HDZERO_AIO15
  - Stromversorgung: **2S/3S Akku (3,5V – 13V)**
  - Vollständig kompatibel mit beliebten Whoop-Rahmen
  - Platinenmaß: 31,3 x 31,3 mm mit 25,5 x 25,5 mm Befestigungslochgröße
  - Gewicht: 7,2 g (mit Motorsteckern)

## Lieferumfang

- 1x HDZero AIO15 Board
- 1x Stromkabel mit XT30-Stecker
- 4x Schrauben
- 4x Gummitüllen
- 1x ultraleichte lineare VTX-Antenne
- 1x JST-USB-Wandlerplatine und Kabel
- 1x Kondensator (25V/150µF)
