import React, { useEffect, useState, useContext } from 'react'
import { displayContext } from './main';

export default function Counter() {

	let [count, setCount] = useState(3);
	let {phase, setPhase} = useContext(displayContext)

	useEffect(()=>{
		const interval = setInterval(() => {
			if(count == 0) {
				clearInterval(interval)
				setPhase(2)
			}else{
				setCount(count--)
			}
		}, 1000);
		return ()=> clearInterval(interval)
	}, [])

	return (
		<div>{count}</div>
	)
}
