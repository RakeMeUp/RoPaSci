import { displayContext } from "./display";
import { useContext } from "react";

function Button(props){
    let {phase,setPhase}= useContext(displayContext)

    const handleClick = ()=>{
        setPhase(1)
    }

    return(
        <button onClick={handleClick}>{props.type}</button>
    )
}

export default Button;
