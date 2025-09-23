# Setup

The HDZero BoxPro has many features that can be customized to the individual pilot.

## Power Switch

There is a sliding power switch on the right side of the goggles. You may use it to turn on/off the goggle, or just leave it on and plug/unplug the DC barrel plug to turn the goggle on and off.

In order to prevent voltage spikes entering the goggle, it is mandatory to plug in a 6S (max 4.2V /cell) battery only if the power switch is off.

## Power Input/Consumption

The goggle supports 7-25.2V power input 1. Please make sure the power polarity is correct 2 (Center pin positive) before powering on the goggle.

TABLE 1. Power Consumption

<table id="table2">
<tr>
<td></td>
<td>Mode</td>
<td>Power Consumption</td>
</tr>
<tr>
<td>1</td>
<td>HDZero Digital</td>
<td>1.2A@12V</td>
</tr>
<tr>
<td>2</td>
<td>Analog RF</td>
<td>0.8A@12V</td>
</tr>
<tr>
<td>3</td>
<td>HDMI in</td>
<td>0.7A@12V</td>
</tr>
</table>

::: tip
Note:

1. DO NOT use a 6S HV lipo to power on the goggle, it will permanently damage the goggle.

2. The goggle contains a self-resetting fuse to protect against reverse polarity. If fuse is tripped, allow some time for the fuse to reset. Always install batteries in correct polarity, check with case's battery checker beforehand, if the checker lights don't turn on, the batteries are installed backwards and the goggle's fuse will trip to protect the goggle.
:::
## XT60 Cable

The goggle includes a 1200mm XT60 cable for connecting a battery in your pocket.  The XT60 cable has no voltage regulator. The cable passes voltage directly through the goggle.

::: tip
Note:

1. Do not connect an over 6S battery to the goggle, as the maximum voltage rating of the goggle is 6S (4.2V/cell).

2. Some types of XT60 cable, i.e., HDZero VRX cable, has integrated DC regulators. Make sure that cable is able to output enough current as indicate at Table 1. The goggle won’t boot or keep rebooting if there if that happens.
:::
## Optics Lens

The HDZero BoxPro optics include a lens that focus the image and ensure a clear, immersive view for the pilot.

*Note: The lens is made of plastic rather than glass. To prevent scratches, only clean it with a soft micro fiber cloth or wipes designed for cleaning glasses.*

## Diopter Lens Insert

The goggle has no built-in optical adjustment. However, users can customize a diopter lens insert at the [HDZero shop](http://www.hd-zero.com/shop) according to their prescription.

::: tip
Note: Diopter lens insert is not included, and needs to purchase separately.

<img src="/boxmedia/image5.png" id="image3">
:::
## Head Strap

The goggle includes a 30mm (1.2 inch) wide head strap with battery pocket. Once you have configured the face plate and padding foam for your preferred face fit, put on the head strap and adjust the tightness to your preference.

## HDMI input

The HDZero BoxPro includes a single port HDMI 1.4b receiver through a mini HDMI port. The incoming HDMI video is routed to the LCD display with less than 1ms latency.

Please note that most HDMI connectivity issues are due to either incorrect monitor settings or a faulty HDMI cable. If you encounter issues using the HDMI input, try connecting with alternative HDMI sources and alternative cables to rule out these common causes.

The current firmware supports resolution up to 1080p60 and 720p100 for HDMI input.

## HDMI Output

The HDZero BoxPro includes a high-performance single channel HDMI transmitter that is fully compliant with HDMI 1.3a through a mini HDMI port.

The HDMI output will display exactly the same content as what appears on the LCD displays.

TABLE 2. HDMI Output Format

<table id="table3">
<tr>
<td></td>
<td>Input Source</td>
<td>HDMI Output format</td>
</tr>
<tr>
<td>1</td>
<td>HDZero 60fps Camera</td>
<td>1280x720x60fps</td>
</tr>
<tr>
<td>2</td>
<td>HDZero 90fps Camera</td>
<td>1280x720x90fps</td>
</tr>
<tr>
<td>3</td>
<td>NTSC</td>
<td>1280x720x59.97fps</td>
</tr>
<tr>
<td>4</td>
<td>PAL</td>
<td>1280x720x50fps</td>
</tr>
<tr>
<td>5</td>
<td>HDMI in</td>
<td>Not supported</td>
</tr>
</table>

## AV input

The HDZero BoxPro supports AV input through a 3.5mm AV jack. The pinout is shown in FIG 1.

The AV input cable is not included. It is available on the [HDZero shop](http://www.hd-zero.com/shop) and other online stores.

<div style="display: flex; justify-content: space-around; text-align: center; gap: 20px;">

  <div style="flex: 1">
    <img src="/boxmedia/image4.png" alt="FIG 1" style="height:180px; object-fit: contain;"><br>
    FIG 1. AV input Jack
  </div>

  <div style="flex: 1">
    <img src="/boxmedia/image7.png" alt="FIG 2" style="height:180px; object-fit: contain;"><br>
    FIG 2. HT output Jack
  </div>

  <div style="flex: 1">
    <img src="/boxmedia/image3.png" alt="FIG 3" style="height:180px; object-fit: contain;"><br>
    FIG 3. Line In/Out Jack
  </div>

</div>

## Head Tracker (HT) Output

The HDZero BoxPro has a 6-axis smart inertial measurement unit for head tracking pan+tilt support. The HT output jack pinout is shown in FIG 2.

The HT cable is not included. It is available on the [HDZero shop](http://www.hd-zero.com/shop) and other online stores.

## Audio Line In/Line Out

The HDZero BoxPro has a CTIA standard 3.5mm Line in/Line out jack for microphone and headphones. The pinout is shown in FIG 3.

## Open Source

The HDZero BoxPro is open source. You can find the SoC Firmware at [Github](https://github.com/hd-zero).
