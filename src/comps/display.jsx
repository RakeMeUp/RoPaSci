import { useState, useRef, useEffect } from "react"

export default function Display() {
    const Ref = useRef(null);
    let [phase, setPhase] = useState(0);
    let [ time, setTime ] = useState(3);

    
    const startTimer = ()=>{
        // idk why but the ref is needed
        if (Ref.current) clearInterval(Ref.current);
        const interval = setInterval(() => {
            if(Ref.current && time == 0) {
                setPhase(++phase)
                clearInterval(interval)
            }
            setTime(time--)
        }, 1000);
        Ref.current = interval
    }

    useEffect(()=>{
        startTimer()
    },[])

    return (
        <div>
            {time <= 0 ? phase : time}
        </div>
    )
}
