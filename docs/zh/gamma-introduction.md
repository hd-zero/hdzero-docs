# 介绍

<div style="display: flex; align-items: center; justify-content: space-around; margin: 40px">
<img src="/gammamedia/image7.png">
</div>

HDZero Gamma 是一款紧凑型高性能飞控，采用 G473 MCU，拥有强大的计算能力。它集成了一个 2.4GHz ELRS 接收器和双 BEC 输出——一路 8V/3A 输出用于图传，一路 5V/3A 输出用于 LED 和外设——通过减少外部元件简化了四轴飞行器的组装。

Gamma的核心部件是一个四合一电调，其设计旨在为MCU提供极其纯净的电源，并保护MCU免受电机快速加速或减速引起的电压尖峰的影响。这种保护机制最大限度地降低了电压骤降或死机的风险，而这些情况往往会导致电机烧毁、MOSFET失效以及灾难性的飞行故障。每个电机都能以45A的电流持续工作30秒，峰值电流可达60A。

Purpose-built for drone soccer and digital FPV systems, the Gamma eliminates the analog OSD chip to save space and reduce costs. Optimized for pairing with the HDZero Whoop v2 VTX, it enables a low-profile stack ideal for competitive and lightweight builds.

## 规格

### 飞控

| CPU          | STM32G473(170MHz)         |
| ------------ | ------------------------- |
| 陀螺仪       | ICM42688                  |
| 黑盒子       | 不支持                    |
| I2C 焊盘     | 支持                      |
| UART 焊盘    | TX1/RX1, TX3/RX3, TX4/RX4 |
| 电调遥测     | RX4                       |
| VTX MSP UART | TX1/RX1                   |
| 蜂鸣器焊盘   | 支持                      |
| LED灯带控制  | 支持                      |
| USB          | Type-C                    |
| 模拟OSD      | 不支持                    |
| 飞控固件     | Betaflight:HDZERO_GAMMA   |

### ESC

| CPU        | AT32F421(120MHz)                                   |
| ---------- | -------------------------------------------------- |
| 遥测       | 支持                                               |
| 输入信号   | DSHOT 150/300/600, MultiShot, OneShot              |
| 最大电流   | 45A x 4 (连续)<br /> 60A x 4 (突发)                |
| 电流传感器 | 比例 = 107, 偏移 = 0                              |
| 电调固件   | AM32 2.18<br />目标 AM32_HDZERO_HALO_F421_2.18.hex |

### ELRS接收机

| 芯片组           | ESP32 + SX1280                        |
| ---------------- | ------------------------------------- |
| 飞控 UART       | TX2/RX2                               |
| 射频频率         | 2.4GHz                                |
| 射频最大输出功率 | 10mW                                  |
| 天线接口         | 1x U.FL                               |
| ELRS固件         | HDZero 2.4GHz -> HDZero 2.4GHz AIO RX |

### BEC

| 5V | 3安培用于LED灯带和其他外设 |
| -- | -------------------------- |
| 8V | 3安培用于数字图传          |

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
