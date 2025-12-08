# Installation

## Diagramm

#### Oberseite

<img src="/aio15media/image1.png" id="image1">

#### Unterseite

<img src="/aio15media/image2.png" id="image2">

## Installationshinweise

### ELRS-Antenne

Eine Drahtantenne (¼ Wellenlänge) für den ELRS-Empfänger ist vorgelötet und nahe an der Platine positioniert, um ein flaches Design und einfache Verpackung zu ermöglichen.  
Die ELRS-Antenne muss jedoch angehoben werden, um mindestens 3 mm Abstand zur Platine zu gewährleisten.

<img src="/aio15media/image4.png" id="image4">

Wenn die Drahtantenne entfernt wird, wird weiterhin die interne ELRS-Antenne für den Empfang genutzt, aber die Empfindlichkeit ist nicht so gut wie bei der Drahtantenne.

### VTX-Antenne

Der im AIO15 integrierte HDZero VTX hat eine spezielle Anforderung, um Videostörungen zu verhindern, die durch Rückkopplung des Video-RF-Signals zum Onboard-Leistungsverstärker entstehen können.

Die VTX-Antenne sollte **nach außen** auf der Platine montiert werden, nicht nach innen.

<img src="/aio15media/image5.png" id="image6">
