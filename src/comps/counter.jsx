import React, { useEffect, useState, useContext } from 'react'
import { displayContext } from './display';

export default function Counter() {

	let [count, setCount] = useState(3);
	let {phase, setPhase} = useContext(displayContext)

	useEffect(()=>{
		const interval = setInterval(() => {
			if(count == 0) {
				clearInterval(interval)
				nextPhase();
			}else{
				reduceCount();
			}
		}, 1000);
		return ()=> clearInterval(interval)
	}, [])

	const reduceCount=()=>{
		setCount(count--)
	}

	const nextPhase=()=>{
		setPhase(2)
	}

	return (
		<div>{count}</div>
	)
}
