# Race V3 VTX

Designed for FPV racing, the HDZero Race V3 VTX is our 3rd generation digital video transmitter. With a voltage range starting at 4V, it can be powered by the 5V 1.5A regulator of most FC’s or up to 12V for FC’s that include a HD VTX plug. It is small (28x32x5mm) and light (5.5 grams). With a width of only 28mm, the VTX is now a similar width to many FC's, which improves durability and reduces weight. The antenna is securely attached with a metal bar and screws. No soldering needed – just plug the wire harness into a compatible HD-ready FC.

The HDZero Race V3 VTX is designed with durability in mind, rather than weight. It is made with a 1.6mm thick PCB, in comparison to the 1.0mm PCB used in the Whoop lite VTX. Moreover, it uses more large package size components for stability consideration. For the smaller components, an additional glue coating is applied to increase crash protection.

<div style="display: flex;gap: 10px;">
<img src="/media/image14.png" id="image13">
</div>

<table id="table5">
<tr>
<td>1</td>
<td>VTX-R3 board</td>
</tr>
<tr>
<td>2</td>
<td>SmartAudio/Tramp (No longer supported)</td>
</tr>
<tr>
<td>3</td>
<td>Wire harness to connect with FC<br>Red = BEC 4-12V<br>Black = GND<br>White = VTX UART TX (Connect to FC.RX) <br>Yellow= VTX UART RX (Connect to FC.TX)</td>
</tr>
<tr>
<td>4</td>
<td>Rubber Grommet (M4 to M3),</td>
</tr>
<tr>
<td>5</td>
<td>Metal bar and screws for securing antenna</td>
</tr>
</table>

## Installation

The right figure shows the typical connection with FC supports MSP VTX protocol. Do not power Race V3 VTX from VBAT, it is designed to be plugged into a digital VTX port on a FC which has a BEC (5V-12V). Race V3 can also be powered on most FC 5V pads if rated for at least 2A.

Install on top of a 20x20mm stack using the included M3 rubber grommets. Orient the VTX so that the MIPI or antenna connector faces the front of the drone. This ensures the most protection for the PCB.

::: warning
Do not tape the VTX to the stack or frame, as this does not provide enough physical separation for the RF circuit to function optimally.
:::
