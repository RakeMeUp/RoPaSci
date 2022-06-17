import { createContext, useEffect, useState } from 'react';

import './App.scss';

import Button from './comps/button'
import Main from './comps/main'
import Display from './comps/display';

export const choiceContext = createContext('');
export const signalContext = createContext('');
export const botHandContext = createContext('');
export const disabledContext = createContext('');

function App() {

  const [choice, setChoice] = useState('')
  const [signal, setSignal] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [botHand, setBotHand] = useState('')
  const [outcome, setOutcome] = useState(false)

  const signalSwitch = (signal) =>{
    switch(true){
      case signal === "Start":
        setBotHand(generateHand())
        setDisabled(false)
        break;
      case signal === "TimeFrameDone" && choice === '':
        setDisabled(true)
        break;
      case signal === "TimeFrameDone" && choice !== '':
        setResult()
        break;
    }
  }

  const setResult = () =>{
    let result = '';
    switch(botHand){
      case "Rock":
        switch(choice){
          case "Paper":
            result = "WIN"
            break;
          case "Scissors":
            result = "LOSE"
            break;
        }
        break;

      case "Paper":
        switch(choice){
          case "Rock":
            result = "LOSE"
            break;
          case "Scissors":
            result = "WIN"
            break;
        }
        break;

      case "Scissors":
        switch(choice){
          case "Paper":
            result = "LOSE"
            break;
          case "Rock":
            result = "WIN"
            break;
        }
        break;
      default:
        result = "DRAW"
    }
    setOutcome(result)
  }

  const generateHand = () =>{
    const hands = ["Rock", "Paper", "Scissors"];
    console.log("func called")
    return hands[Math.floor(Math.random()*3)]
  }

  useEffect(()=>{
    signalSwitch(signal)
  },[signal])
  
  return (
    <div>
      <signalContext.Provider value={{setSignal}}>
        <botHandContext.Provider value={{botHand}}>
          <Main />
        </botHandContext.Provider>
      </signalContext.Provider>

      <choiceContext.Provider value={{choice,setChoice}}>
        <disabledContext.Provider value={{disabled, setDisabled}}>
          <Button type={"Rock"} isDisabled={disabled} />
          <Button type={"Paper"} isDisabled={disabled} />
          <Button type={"Scissors"} isDisabled={disabled} />
        </disabledContext.Provider>
        <Display display={outcome} />
      </choiceContext.Provider>
    </div>
  );
}

export default App;

