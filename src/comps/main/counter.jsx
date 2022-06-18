import React, { useEffect, useState, useContext } from 'react'
import { displayContext } from '../main/main';
import { signalContext } from '../../App';

export default function Counter() {

	let [count, setCount] = useState(3);
	let {setPhase} = useContext(displayContext)
    let {setSignal} = useContext(signalContext)

	useEffect(()=>{
		setSignal("countStart")
		const interval = setInterval(() => {
			if(count === 0) {
				clearInterval(interval)
				setPhase(2)
			}else{
				setCount(count--)
			}
		}, 1000);
		return ()=> clearInterval(interval)
		// eslint-disable-line react-hooks/exhaustive-deps
	}, [])
	// eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className='main--display main--display__counter'>
			<span>{count}</span>
		</div>
	)
}
