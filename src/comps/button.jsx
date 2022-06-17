import { choiceContext } from "../App";
import { useContext } from "react";

function Button(props){
    const {choice,setChoice}= useContext(choiceContext)

    const handleClick = ()=>{
        setChoice(props.type)
    }

    return(
        <button disabled={props.isDisabled} onClick={handleClick}>{props.type}</button>
    )
}

export default Button;