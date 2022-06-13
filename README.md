## Display:

onPress:

-   starts counting back from 3,
-   after 1, green NOW shows for 1 sec,
-   this is a time window for u to press one of the buttons,
-   immediatly as you click on a choice it gives his choice.

starter button
countdown
greenWaiter
display

-   button press
-   countdown starts
-   countdown ends
-   NOW displays
-   countdown starts
-   if button pressed while countdown goes, choice is sent
-   if button NOT pressed, "too slow" displays

handleClick
    starts timer


/* 
TODO:
  in App comp, start the game on startSignal
  in Display comp, turn off startSignal after 2 sec
  when startSignal turned off, should return Too Late! sign

  Also: separate components to their own folder, where css can be put
*/