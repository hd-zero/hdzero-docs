# Einführung

<div style="display: flex; align-items: center; justify-content: space-around; margin: 40px">
<img src="/aio5media/image5.png">
</div>

Der **HDZero AIO5** ist das weltweit erste digitale Video-AIO (All-in-One; Alles auf einem Board), mit dem _Bind-and-Fly 65mm Whoops_ weniger als 19,5 g wiegen. Der AIO5 integriert

- einen **F4-Flight-Controller**,
- einen **HDZero 5.8 GHz Digital Video Transmitter**,
- einen **SPI 2.4 GHz ExpressLRS 3.0-Empfänger**,
- ein **4-in-1-ESC mit DSHOT-Protokoll** sowie
- einen **5V/1A BEC** (siehe Notiz).

Er ist ideal für Tiny-Whoop-Racing und Freestyle geeignet.

> Ein 5V/1A BEC (Battery Eliminator Circuit) ist ein elektronischer Spannungsregler, der eine höhere Batteriespannung (z. B. 12V) auf eine stabilisierte Spannung von 5 Volt reduziert und gleichzeitig eine Stromstärke von bis zu 1 Ampere für andere Komponenten, wie Servos oder Empfänger in funkgesteuerten Modellen, bereitstellt, ohne dass eine separate Batterie benötigt wird.

Im Gegensatz zu MIPI verwendet das AIO5 ein **Composite-Video-Interface**, was Fläche und Gewicht reduziert. Es ist vollständig kompatibel mit **HDZero Lux**- und **Eco-Kameras**, jedoch **nicht** mit Kameras, die MIPI-Anschlüsse nutzen.

Der HDZero AIO5 entstand aus einer hervorragenden Zusammenarbeit zwischen **Happymodel** und **HDZero**. Er ist weltweit bei großen FPV-Händlern sowie in den offiziellen Online-Shops von Happymodel und HDZero erhältlich.

## Spezifikationen

- **MCU:** STM32F411 (100 MHz, 512K Flash)
- **Gyro:** BMI270 (HDZero AIO5 1R2) / ICM42688P (HDZero AIO5 1R3)
- Integrierte Spannungs- und Strommesser
- Integrierter 5A (pro Kanal) **BLHeli_S 4-in-1 ESC**
  - MCU: EFM8BB21
  - Stromstärke: 5A kontinuierlich, Peak 6A (3 Sekunden)
  - Werks-Firmware: **O_H_5_48_V0.19.2.HEX**
  - DShot600-kompatibel
- Integrierter **5.8G HDZero VTX**
  - RF-Ausgang: 25mW / 200mW
  - Unterstützte Kanäle: R1–R8, F2/F4, L1–L8
  - U.FL-Anschluss (inkl. ultraleichter Linearantenne / Drahtantenne)
- Integrierter **SPI ExpressLRS 2.4 GHz Empfänger**
  - Paket-Rate: 50Hz / 150Hz / 250Hz / 500Hz
  - Vorverlötete lackierte Drahtantenne
  - Telemetrie-Sendeleistung: <12dBm
- Integrierter **5V 1A BEC** (siehe Notiz oben)
- Flight-Controller-Firmware-Target: **CRAZYBEEF4SX1280**
- Stromversorgung: 1S-Akku (2,5V – 4,35V)
- Kompatibel mit gängigen Whoop-Frames
  - Platinenmaß: 28,5 × 28,5 mm mit 25,5 × 25,5 mm Befestigungslochabstand
- Gewicht: 5,7g (ohne Motorstecker), 6,3g (mit Motorsteckern)

## Lieferumfang

- 1× HDZero AIO5-Board
- 1× Stromkabel mit abgewinkeltem (180°) A30-Stecker
- 4× Schrauben
- 4× Gummitüllen
- 1× ultraleichte lineare VTX-Antenne (Drahtantenne)

(siehe Bild oben)
