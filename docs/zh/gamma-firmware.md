# 固件

## 烧录betaflight固件

* 下载并安装 [Betaflight Configurator](https://github.com/betaflight/betaflight-configurator/releases/tag/10.10.0).
* 打开 Betaflight Configurator
* 烧录固件:

<div style="display: flex; align-items: center; justify-content: space-around; margin: 40px">
<img src="/gammamedia/image4.png">
</div>

1. 选择目标端口
2. 点击"**更新固件**" 进入固件下载界面
3. 选择目标 "**HDZERO_GAMMA**" 和固件版本, 出厂版本是4.5.3[23-Nov-2025]
4. 点击"**加载固件[在线]** " 下载固件
5. 点击"**烧录固件**" 开始烧录

* DFU烧录:

  *如果你与FC已经失去联系，请按照以下步骤恢复:*

1. 断开Gamma电源
2. 打开‘**无重启序列**’, 打开‘**全盘擦除**’
3. 按住BOOT按键并通过USB将飞控连接至PC, 然后释放BOOT按键
4. 如有需要，请安装所有stm32驱动和Zadig(参考Betaflight 手册中的[USB烧录](https://betaflight.com/docs/wiki/guides/current/installing-betaflight)章节)
5. 重新打开Betaflight configurator
6. 点击"**更新固件**"进入固件下载界面
7. 选择目标"**HDZERO_GAMMA**"和固件版本, 出厂版本是4.5.3[23-Nov-2025]
8. 点击"**加载固件[在线]** " 下载固件
9. 点击"**烧录固件**" 开始烧录

## 烧录ELRS固件

HDZero Gamma的ELRS出厂固件版本是Released 3.5.1, 如果你需要更新固件, 请参考ELRS更新教程([典型更新步骤](https://www.expresslrs.org/quick-start/receivers/updating/)), 设备类别和设备目标如下:

***设备类别: HDZero 2.4GHz***

***设备目标: HDZero 2.4GHz AIO RX***

<div style="display: flex; align-items: center; justify-content: space-around; margin: 40px">
<img src="/gammamedia/image5.png">
</div>

## 烧录电调固件(AM32)

1. 从已正确安装 Gamma AIO 的无人机上拆下所有螺旋桨
2. 打开无人机电源，并通过 USB 将 Gamma 连接到电脑
3. 打开AM32 Configurator: [http://am32.ca](http://am32.ca)
4. 点击端口，选择并连接,然后读取
5. 调整参数，然后保存

如果需要, 点击[**烧录固件**]更新电调固件

<div style="display: flex; align-items: center; justify-content: space-around; margin: 40px">
<img src="/gammamedia/image6.png">
</div>
