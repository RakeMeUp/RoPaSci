import Counter from "./counter"
import StartButton from "./startButton"
import { signalContext, botHandContext } from "../App";
import { createContext, useContext, useEffect, useState } from "react"

export const displayContext = createContext('');

export default function Display() {

    const [phase, setPhase] = useState(0)
    let {setSignal} = useContext(signalContext)
    let {botHand}= useContext(botHandContext)

    const phases = [
        <StartButton type="Start"/>,
        <Counter/>,
        (<div>Now</div>),
        (<div>{botHand}</div>)
    ]

    useEffect(()=>{
        if(phase == 2) startTimeFrame();
    },[phase])

    const startTimeFrame = ()=>{
        setSignal("Start")
        setTimeout(() => {
            setSignal("TimeFrameDone")
            setPhase(3)
        }, 1000);
    }

    return (
        <displayContext.Provider value={{phase, setPhase}}>
            {phases[phase]}
        </displayContext.Provider>
    )
}
