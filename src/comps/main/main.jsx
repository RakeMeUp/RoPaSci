import Counter from "./counter"
import paperImg from '../../img/file-solid.svg'
import rockImg from '../../img/hand-fist-solid.svg'
import scissorsImg from '../../img/scissors-solid.svg'
import { signalContext } from "../../App";
import { createContext, useContext, useEffect, useState } from "react"

import './css/main.scss'

export const displayContext = createContext('');

export default function Display({botHand}) {

    const [phase, setPhase] = useState(0)
    let [imageSrc, setImageSrc] = useState('')
    let {setSignal} = useContext(signalContext)

    const phases = [
        (<button className="main--display main--display__start" onClick={()=>setPhase(1)}>START</button>),
        <Counter/>,
        (<div className="main--display main--display__now">NOW</div>),
        (<div className="main--display main--display__botHand"><img src={imageSrc} alt="idk" /></div>)
    ]

    useEffect(()=>{
        const startTimeFrame = ()=>{
            setSignal("timeFrameStart")
            setTimeout(() => {
                setSignal("timeFrameDone")
                setPhase(3)
            }, 1000);
        }
        if(phase === 2) startTimeFrame();
    },[phase])

    useEffect(()=>{
        const updateImageSrc=(botHand)=>{
            switch(botHand){
                case 'rock':
                    setImageSrc(rockImg)
                    break;
                case "scissors":
                    setImageSrc(scissorsImg)
                    break;
                case "paper":
                    setImageSrc(paperImg)
                    break;
            }
        }
        updateImageSrc(botHand)
    },[botHand])

    return (
        <signalContext.Provider value ={{setSignal}}>
            <displayContext.Provider value={{setPhase}}>
                {phases[phase]}
            </displayContext.Provider>
        </signalContext.Provider>
    )
}
