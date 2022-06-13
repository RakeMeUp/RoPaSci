import Counter from "./counter"
import StartButton from "./startButton"
import { startSignalContext } from "../App";
import { createContext, useContext, useEffect, useState } from "react"

export const displayContext = createContext('');

export default function Display() {

    const [phase, setPhase] = useState(0)
    let {startSignal, setStartSignal} = useContext(startSignalContext)

    const phases = [
        <StartButton type="Start"/>, 
        <Counter/>,
        (<div>Now</div>)
    ]

    useEffect(()=>{
        if(phase == 2) toggleStartSignal();
    },[phase])

    const toggleStartSignal = ()=>{
        setStartSignal(!startSignal)
    }

    return (
        <displayContext.Provider value={{phase, setPhase}}>
            {phases[phase]}
        </displayContext.Provider>
    )
}
