# Freestyle V2 VTX

HDZero Freestyle V2 VTX 是我们的第二代 5.8GHz 数字视频发射器，可安装于大多数 3-5 英寸高清无人机。所有接口均由 CNC 加工的外壳提供良好的保护，从而提供耐用性、射频屏蔽和更高的信号完整性。产品附带线束，用于电源和 MSP UART 端口的无焊连接。天线和 MIPI 线缆由随附的固定杆和螺丝固定。

Freestyle V2 VTX 在 R1 通道上能够输出 900mW 的射频功率，输出功率会随着频率的升高而降低。出厂时，VTX 的输出功率限制为 200mW。如需解锁最大功率，请按照以下说明操作： 。

<div style="display: flex;gap: 10px;">
<img src="/media/image16.png" id="image13"><img src="/media/image17.png" id="image14">
</div>

<table id="table6">
<tr>
<td>1</td>
<td>安全的 MIPI 连接器</td>
</tr>
<tr>
<td>2</td>
<td>M2安装孔</td>
</tr>
<tr>
<td>3</td>
<td>安全的 U.FL 连接器</td>
</tr>
<tr>
<td>4</td>
<td>键盘连接器</td>
</tr>
<tr>
<td>5</td>
<td>FW 更新连接器</td>
</tr>
<tr>
<td>6</td>
<td>电源(7-25V)/UART连接器</td>
</tr>
<tr>
<td>7</td>
<td>电源/UART线束</td>
</tr>
</table>

<div style="display: flex;gap: 10px;">
<img src="/media/image18.png" id="image15"><img src="/media/image19.png" id="image16">
</div>

<table id="table7">
<tr>
<td>电源/UART连接器</td>
<td>电缆颜色</td>
<td>连接</td>
</tr>
<tr>
<td>Ground</td>
<td>黑色</td>
<td>Ground</td>
</tr>
<tr>
<td>Power</td>
<td>红色</td>
<td>POWER</td>
</tr>
<tr>
<td>RX</td>
<td>黄色</td>
<td>FC.TX</td>
</tr>
<tr>
<td>TX</td>
<td>白色</td>
<td>FC.RX</td>
</tr>
<tr>
<td>SA</td>
<td>蓝色</td>
<td>未使用</td>
</tr>
</table>

<img src="/media/image20.png" id="image17">

## 安装

请勿将 VTX 天线布置在 VTX 顶部，天线必须直接从 VTX 背面出来。

Freestyle V2 VTX 可以使用 M2 螺钉或随附的双面胶带安装。在某些情况下，需要使用双面胶带而非螺钉安装 VTX，以避免无人机启动时产生电气噪音。

Freestyle V2 图传功耗高达 15W。如果连接内置 BEC 输出的飞控，请确保 BEC 能够提供足够的电流。例如，如果 BEC 提供 10V 电压，则至少需要 1.5A 的电流输出。

在无人机安装有GPS时，请务必将其与Freestyle V2 VTX（尤其是天线）物理隔离，以最大限度地减少对 GPS 信号的干扰。
