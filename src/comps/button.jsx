import { choiceContext } from "../App";
import { useContext } from "react";

function Button(props){
    const {choice,setChoice}= useContext(choiceContext)

    const handleClick = ()=>{
        setChoice(props.type)
    }

    return(
        <button onClick={handleClick}>{props.type}</button>
    )
}

export default Button;


/* 

1: press button
        button has one of three values
2: value is sent to display
3: display changes depending on sent choice

*/