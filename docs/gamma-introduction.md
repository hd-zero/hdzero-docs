# Introduction

<div style="display: flex; align-items: center; justify-content: space-around; margin: 40px">
<img src="/gammamedia/image7.png">
</div>

The HDZero Gamma is a compact, high-performance flight controller built around the G473 MCU, delivering powerful computational capability. It comes with an integrated 2.4GHz ELRS receiver and dual BEC outputs-an 8V/3A line for video transmitters and a 5V/3A line for LEDs and peripherals-streamlining quad assembly by reducing external components.

At its core, the Gamma features a 4-in-1 ESC engineered to deliver exceptionally clean power to the MCU, shielding it from voltage spikes caused by rapid motor acceleration or deceleration. This protection minimizes the risk of brownouts or lockups, which are often responsible for burnt motors, failed MOSFETs, and catastrophic flight failures. Each motor is capable of sustaining 45A for 30 seconds, with peak bursts reaching 60A.

Purpose-built for drone soccer and digital FPV systems, the Gamma eliminates the analog OSD chip to save space and reduce costs. Optimized for pairing with the HDZero Whoop v2 VTX, it enables a low-profile stack ideal for competitive and lightweight builds.

## Specifications

### Flight Controller

| CPU               | STM32G473(170MHz)         |
| ----------------- | ------------------------- |
| Gyro              | ICM42688                  |
| Block Box         | No                        |
| I2C Pads          | Yes                       |
| UART Pads         | TX1/RX1, TX3/RX3, TX4/RX4 |
| ESC Telemetry     | RX4                       |
| VTX MSP UART      | TX1/RX1                   |
| Buzzer Pads       | Yes                       |
| LED Strip Control | Yes                       |
| USB               | Type-C                    |
| Analog OSD        | No                        |
| FC Firmware       | Betaflight:HDZERO_GAMMA   |

### ESC

| CPU            | AT32F421(120MHz)                                     |
| -------------- | ---------------------------------------------------- |
| Telemetry      | Supported                                            |
| Input Signal   | DSHOT 150/300/600, MultiShot, OneShot                |
| Max Current    | 45A x 4 (Continuous)<br /> 60A x 4 (Burst)           |
| Current Sensor | Scale = 107, offset = 0                              |
| ESC Firmware   | AM32 2.18<br />Target AM32_HDZERO_HALO_F421_2.18.hex |

### ELRS Receiver

| Chip Set          | ESP32 + SX1280                        |
| ----------------- | ------------------------------------- |
| FC UART           | TX2/RX2                               |
| RF Frequency      | 2.4GHz                                |
| Max TX RF Power   | 10mW                                  |
| Antenna Interface | 1x U.FL                               |
| ELRS Firmware     | HDZero 2.4GHz -> HDZero 2.4GHz AIO RX |

### BEC

| 5V | 3A for LED strips and other peripherals |
| -- | --------------------------------------- |
| 8V | 3A for digital video transmitter        |

### Dimensions

| Power Supply          | 3S~6S                                    |
| --------------------- | ---------------------------------------- |
| Size                  | 33x33mm with 25.5x25.5 M2 mounting holes |
| Weight                | 8.4g                                     |
| Dedicated sockets for | ESC, and HDZero and other Digital VTXes  |

## Includes

* 1x HDZero Gamma AIO
* 5x M2 Rubber Grommet(5.6mm)
* 1x ELRS T-sharp short antenna(40mm)
* 1x XT30 cable with 330uF/35V capacitor(70mm)

<div style="display: flex; align-items: center; justify-content: space-around; margin: 40px">
<img src="/gammamedia/image1.png">
</div>

## Diagram

### Top View

<div style="display: flex; align-items: center; justify-content: space-around; margin: 40px">
<img src="/gammamedia/image2.png">
</div>

### Bottom View

<div style="display: flex; align-items: center; justify-content: space-around; margin: 40px">
<img src="/gammamedia/image3.png">
</div>
