# Whoop V2 VTX

The HDZero Whoop lite VTX is a digital HD video transmitter capable of delivering up to 200mW on 5.8GHz. It supports all the HDZero cameras with MIPI connector, including Nano90.

The power input range is 3V – 12.6V.

- This VTX does not have reverse polarity protection circuit, it will be permanently damaged if voltage input is connected backwards. This is the number one failure cause. Reverse polarity protection circuit would have prevented VTX from operating at 1S voltage range.

- When powered by a 5V pad of FC/BEC, make sure that 5V has 1.5A current output.

- When powered by a 1S battery directly, note that a rapid throttle up may cause voltage to drop below 3V instantly, and that will cause video drop.

- There is no need for an external capacitor when if connected with FC/BEC or 1S battery. However, it is strongly suggested to install a capacitor when powered by a 3S battery.

This VTX includes M2 rubber grommets for soft mounting, and a brass bar for antenna retention. Though the VTX can be mounted on racing and other high-speed aircraft, it is highly recommended to consider HDZero Race V3 VTX for such applications.

Solder pads:

<img src="/media/image13.jpeg" id="image11" width="300">

<table id="table3">
<tr>
<td>1</td>
<td>MIPI Connector</td>
</tr>
<tr>
<td>2</td>
<td>Power/UART solder pads</td>
</tr>
<tr>
<td>3</td>
<td>Status LEDs</td>
</tr>
<tr>
<td>4</td>
<td>u.FL Connector</td>
</tr>
</table>

<table id="table4">
<tr>
<td>G</td>
<td>Ground</td>
</tr>
<tr>
<td>V</td>
<td>3V -12.6V</td>
</tr>
<tr>
<td>RX</td>
<td>FC.TX</td>
</tr>
<tr>
<td>TX</td>
<td>FC.RX</td>
</tr>
</table>

::: tip
Notes:

1. Read first: [General Consideration for VTX Installation](vtx-general.md)

2. This VTX does not support using a keypad to tune channel and RF output power level. It is designed to work with a flight controller.
:::
