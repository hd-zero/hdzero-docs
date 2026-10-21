# Freestyle V2 VTX

The HDZero Freestyle V2 VTX is our 2nd generation 5.8GHz digital video transmitter which can be installed into most 3-5-inch HD drones. All sockets are well protected by the CNC case that provides durability, RF shielding and improved signal integrity. A wire harness is included for solderless connection for power and MSP UART port. The antenna and MIPI cable are secured by the included retention bar and screws.

Freestyle V2 VTX is capable of 900mW RF output on channel R1 – output decreases as frequency increases. From the factory, the VTX is limited to 200mW output. To unlock full power, follow the instructions for [unlocking power limit](vtx-firmware-update.md#unlock-rf-power-limit).

<div style="display: flex;gap: 10px;">
<img src="/media/image16.png" id="image13"><img src="/media/image17.png" id="image14">
</div>

<table id="table6">
<tr>
<td>1</td>
<td>Secured MIPI Connector</td>
</tr>
<tr>
<td>2</td>
<td>M2 Mounting Hole</td>
</tr>
<tr>
<td>3</td>
<td>Secured U.FL Connector</td>
</tr>
<tr>
<td>4</td>
<td>Keypad Connector</td>
</tr>
<tr>
<td>5</td>
<td>FW Update Connector</td>
</tr>
<tr>
<td>6</td>
<td>Power(7-25V)/UART Connector</td>
</tr>
<tr>
<td>7</td>
<td>Power/UART Harness</td>
</tr>
</table>

<div style="display: flex;gap: 10px;">
<img src="/media/image18.png" id="image15"><img src="/media/image19.png" id="image16">
</div>


<table id="table7">
<tr>
<td>Power/UART Connector</td>
<td>Cable Color</td>
<td>Connected with</td>
</tr>
<tr>
<td>Ground</td>
<td>Black</td>
<td>Ground</td>
</tr>
<tr>
<td>Power</td>
<td>Red</td>
<td>Power</td>
</tr>
<tr>
<td>RX</td>
<td>Yellow</td>
<td>FC.TX</td>
</tr>
<tr>
<td>TX</td>
<td>White</td>
<td>FC.RX</td>
</tr>
<tr>
<td>SA</td>
<td>Blue</td>
<td>Not used</td>
</tr>
</table>

<img src="/media/image20.png" id="image17">

## Installation

Do not route VTX antenna cable over top of VTX, the antenna cable must exit straight out of the back of the VTX.

Freestyle V2 VTX can be mounted with M2 screws or the included double-sided tape. In some cases, it is necessary to mount the VTX with double-sided tape rather than screws to avoid electrical noise when the craft’s motors are armed.

Freestyle V2 VTX consumes up to 15W. If it is connected with FC that has a built-in BEC output, make sure the BEC can provide enough current. For example, if the BEC provides 10V, it needs a minimum of 1.5A current output.

When using GPS, keep it physically separated from the Freestyle V2 VTX—especially the antenna—to minimize interference with the GPS signal.
