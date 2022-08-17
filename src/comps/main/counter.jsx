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
			setCount(prev=> {
				if(prev === 1){
					clearInterval(interval)
					setPhase(2)
				}else{
					return prev - 1;
				}
			})
				
		}, 1000);
		return ()=> clearInterval(interval)
	}, [])

	return (
		<div className='main--display main--display__counter'>
			<span>{count}</span>
		</div>
	)
}
