# FAQ

## Diskussion

HDZero Facebook-Gruppe: https://www.facebook.com/groups/HDZero

HDZero Discord-Server: https://discord.gg/JPesSHpmCU

##  Fehlerbehebung

**F1. Warum blinkt die rote LED an meinem VTX oder leuchtet gar nicht?**

A1: Die ROTE LED sollte dauerhaft leuchten und nicht blinken. Bitte prüfe Folgendes:

- Überprüfe die Stromversorgung deines VTX;
- Stelle sicher, dass die Eingangsspannung im zulässigen Bereich liegt, siehe [Stromversorgung](vtx-summary.md);
- Stelle sicher, dass die Stromquelle ausreichend Strom liefern kann. Ein 200mW VTX benötigt ca. 5 Watt, während ein Freestyle VTX bis zu 15 Watt benötigen kann. Beachte, dass einige Flight Controller (FCs) möglicherweise nicht genügend Strom liefern können.
- Die Stromversorgungsschaltung des VTX könnte beschädigt sein, was zu keiner oder blinkender roter LED führen kann.

---

**F2. Warum blinkt die blaue LED an meinem VTX oder leuchtet gar nicht?**

A2:  Die blaue LED zeigt den aktuellen Status des VTX wie folgt an:

- Fehlt die blaue LED, deutet das auf einen kritischen Fehler hin – dein VTX ist möglicherweise komplett defekt.
- Beim Start bestätigen drei schnelle Blaulicht-Blinker die aktive MSP-Kommunikation, falls mit einem Flight Controller verbunden.
- Die blaue LED sollte im Normalbetrieb dauerhaft leuchten.
- Siehe LED-Mustertabelle, falls die [blaue LED blinkt](vtx-led.md#blue-led-pattern)

---

**F3. Warum habe ich Schneerauschen auf kürzeste Distanz?**

A3: Unter normalen Bedingungen sollte die Videoqualität auf kurze Distanz klar bleiben. Bitte prüfe Folgendes:

- Prüfe, ob der VTX auf P1MW-Modus eingestellt ist – dies wird durch einen langen und zwei kurze Blaulicht-Blinker angezeigt.
- Der VTX ist auf hohe RF-Leistung eingestellt, und die Brille oder der Empfänger ist zu nah, was zu Sättigung führt.
- Positioniere den Funkempfänger (RX) und dessen Antenne entfernt vom Videosender (VTX) auf der Drohne, um Störungen zu minimieren.
- Reduziere die Sendeleistung (TX) und vergrößere den Abstand zwischen TX und deinen HDZero-Brillen oder -Empfängern.
- Platziere den VTX nicht neben dem ESC-Board.
- Der VTX (Antennenseite) benötigt 5mm vertikalen Abstand.
- Ersetze die VTX-Antenne oder das Pigtail, um eine ordnungsgemäße Signalübertragung sicherzustellen.
- Prüfe, ob ein anderer VTX (Analog, DJI, HDZero) auf demselben Kanal arbeitet.
- Identifiziere mögliche WLAN-Störungen; überlappende Frequenzen erzeugen typischerweise diagonale Störmuster.
- Defekte RF-Schaltung am VTX

---

**F4: Mein Videobild funktioniert, aber warum wird kein OSD angezeigt?**

A4: So funktioniert das HDZero OSD: Der HDZero VTX kommuniziert über das MSP-Protokoll mit dem Flight Controller, um Telemetriedaten zu erhalten, und überträgt diese drahtlos an die Brille oder den Empfänger, wo sie ins Videobild eingeblendet werden.

Stelle eine korrekte VTX–FC-Verbindung sicher, indem du Folgendes prüfst:

- VTX/Brille/Empfänger Firmware unterschiedlich: Aktualisiere alle auf die neueste Firmware
- Kabelverbindung: UART TX/RX des FC-Boards sollten mit RX und TX Pads des VTX verbunden sein.
- Betaflight-Einstellung: Siehe OSD-Anleitung
- Der UART-Port am FC könnte defekt sein. Probiere einen anderen UART-Port (Soft-Serial und SA-Ports vermeiden),
- Probiere einen anderen FC

---

**F5: Warum wird mein Videosignal beim Scharfschalten und Gasgeben gestört?**

A5: Dies kann durch Störungen/ungenügende Stromversorgung des VTX verursacht werden. Prüfe Folgendes:

- Wenn der VTX über einen BEC des FC versorgt wird, stelle sicher, dass der BEC ausreichend Strom liefern kann.
- Installiere einen großen Kondensator (≥350µF, 50V) an den Batterieanschlüssen.
- Es kann sein, dass der Funksender den Videoempfänger stört. Reduziere die TX-Leistung und halte Abstand zur Brille oder zum Videoempfänger.

---

**F6: Warum empfange ich kein Video mit meiner Brille?**

A6: Es ist ein komplexes Problem, das mehrere Komponenten betreffen kann – nämlich Kamera, MIPI-Kabel, VTX oder Brille. Prüfe Folgendes

- Blaue LED leuchtet nicht dauerhaft:
  1. Wenn die blaue LED komplett aus ist, ist der VTX defekt;
  2. Wenn die blaue LED periodisch einmal lang und einmal kurz blinkt, ist der VTX im 0mW-Modus. Mit [Stick-Befehl](vtx-general.md#stick-command-gestures) den 0mW-Modus verlassen
  3. Wenn die blaue LED periodisch zweimal kurz blinkt, erkennt der VTX die Kamera nicht, mögliche Ursachen: (1) defekte Kamera; (2) defektes MIPI-Kabel; (3) loses MIPI-Kabel; (4) defekte MIPI-Anschlüsse an Kamera und/oder VTX; (5) defekter VTX
  4. Prüfe weitere [blaue LED-Muster](vtx-led.md#blue-led-pattern)
- Blaue LED leuchtet dauerhaft:
  1. Prüfe, ob der VTX auf Low Band eingestellt ist, während die Brille anders konfiguriert ist, oder umgekehrt.
  2. Wenn die Nano90-Kamera auf 540p60-Modus eingestellt ist, muss die Brille auf HDZero BW = Narrow gestellt werden: Brillenmenü → Source → HDZero BW.

---

**F7. Warum schlägt das Flashen des VTX fehl?**

<img src="/media/image28.png" id="image25">

A7: Stelle sicher, dass alle Pins am VTX und am Firmware-(FW)-Port der Brille absolut gerade sind – verbogene oder falsch ausgerichtete Pins können den Flash-Vorgang stören. Schon ein einziger schiefer Pin am VRX-Modul kann Flash-Fehler verursachen.

---

**F8: Warum geht mein FC in den Bootloader, wenn er mit einem HDZero VTX verbunden ist?**

A8. Es wurde berichtet, dass einige Flight Controller zufällig in den Bootloader-Modus wechseln, wenn sie mit frühen HDZero VTX-Modulen verbunden sind. Um das Problem zu beheben, füge einen 200-Ohm-Widerstand in die Leitung zwischen FC UART.TX und VTX UART.RX ein.

Alle HDZero VTX-Einheiten, die nach 2023 produziert wurden, enthalten diesen Widerstand bereits ab Werk, sodass bei neuerer Hardware keine manuelle Nachrüstung nötig ist.
