# Race V3 VTX

HDZero Race V3 VTX 是专为 FPV 竞速设计的，是我们第三代数字视频发射器。其最低电压范围为 4V，可由大多数飞控的 5V 1.5A 稳压器供电，或由配备 HD VTX 插头的飞控供电，最高电压可达 12V。它体积小巧（28x32x5mm），重量轻（5.5 克）。VTX 的宽度仅为 28mm，与许多飞控的宽度相近，从而提高了耐用性并减轻了重量。天线通过金属杆和螺钉牢固固定。无需焊接 - 只需将线束插入兼容的 HD 飞控即可。

HDZero Race V3 VTX 的设计更注重耐用性，而非重量。它的 PCB 厚度为 1.6 毫米。此外，为了提高稳定性，它使用了更多大尺寸封装元件。对于较小的元件，还额外涂上了一层胶水，以增强防撞保护。

<div style="display: flex;gap: 10px;">
<img src="/media/image14.png" id="image13">
</div>

<table id="table5">
<tr>
<td>1</td>
<td>VTX-R3 板</td>
</tr>
<tr>
<td>2</td>
<td>SmartAudio/Tramp（不再支持）</td>
</tr>
<tr>
<td>3</td>
<td>与 FC 连接的线束<br>红色=BEC 4-12V<br>黑色=GND<br>白色 = VTX UART TX（连接到 FC.RX）<br>黄色= VTX UART RX（连接到 FC.TX）</td>
</tr>
<tr>
<td>4</td>
<td>橡胶垫圈（M4至M3），</td>
</tr>
<tr>
<td>5</td>
<td>用于固定天线的金属条和螺丝</td>
</tr>
</table>

## 安装

右图显示了支持 MSP VTX 协议的飞控的典型连接。 请勿使用 VBAT 为 Race V3 VTX 供电，它设计为插入带有 BEC（5V-12V）的飞控的数字 VTX 端口。Race V3 也可以使用大多数 5V 飞控供电板供电，前提是额定电流至少为 2A。

使用随附的 M3 橡胶垫圈将其安装在 20x20mm 的堆叠顶部。调整 VTX 的方向，使 MIPI 或天线连接器朝向无人机的正面。这样可以最大程度地保护 PCB。

::: warning
请勿将 VTX 粘贴到飞塔或框架上，因为这无法提供足够的物理分离以使 RF 电路发挥最佳功能。
:::
