import { createContext, useEffect, useState } from 'react';

import './App.scss';

import Button from './comps/button/button'
import Main from './comps/main/main'
import Display from './comps/display/display';
import Reset from './comps/reset/reset';

export const choiceContext = createContext('');
export const signalContext = createContext('');
export const botHandContext = createContext('');
function App() {

  const [choice, setChoice] = useState('')
  const [signal, setSignal] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [botHand, setBotHand] = useState('')
  const [outcome, setOutcome] = useState(false)

  const setResult = () =>{
    let result = '';
    switch(botHand){
      case "rock":
        switch(choice){
          case "paper":
            result = "WIN"
            break;
          case "scissors":
            result = "LOSE"
            break;
          default:
            result = "DRAW"
            break;
        }
        break;

      case "paper":
        switch(choice){
          case "rock":
            result = "LOSE"
            break;
          case "scissors":
            result = "WIN"
            break;
          default:
            result = "DRAW"
            break;
        }
        break;

      case "scissors":
        switch(choice){
          case "paper":
            result = "LOSE"
            break;
          case "rock":
            result = "WIN"
            break;
          default:
            result = "DRAW"
            break;
        }
        break;
      default:
        result = "DRAW"
        break;
    }
    setOutcome(result)
  }

  const generateHand = () =>{
    const hands = ["rock", "paper", "scissors"];
    return hands[Math.floor(Math.random()*3)]
  }

  useEffect(()=>{
    const signalSwitch = (signal) =>{
      console.log(signal)
      switch(true){
        case signal === "countStart":
          setDisabled(true)
          break;
        case signal === "timeFrameStart":
          setBotHand(generateHand())
          setDisabled(false)
          break;
        case signal === "timeFrameDone" && choice === '':
          setDisabled(true)
          break;
        case signal === "timeFrameDone" && choice !== '':
          setResult()
          break;
        default:
          break;
      }
    }
    signalSwitch(signal)
  },[signal])
  
  return (
    <>
      <h1>Rock, Paper, Scissors!</h1>
      <div className="main--container">
        <signalContext.Provider value={{setSignal}}>
            <Main botHand={botHand} />
        </signalContext.Provider>
      </div>

      <div className="display--container">
        <Display outcome={outcome} />
      </div>

      <div className="btn--container">
        <choiceContext.Provider value={{setChoice}}>
          <signalContext.Provider value={{signal}}>
          <Button type={"paper"} isDisabled={disabled} />
          <Button type={"rock"} isDisabled={disabled} />
          <Button type={"scissors"} isDisabled={disabled} />
          </signalContext.Provider>
        </choiceContext.Provider>  
      </div>
      <div className="reset--container">
        <Reset />  
      </div>
    </>
  );
}

export default App;

