import { choiceContext, signalContext } from "../../App";
import { useContext, useState, useEffect } from "react";
import paperImg from '../../img/file-solid.svg'
import rockImg from '../../img/hand-fist-solid.svg'
import scissorsImg from '../../img/scissors-solid.svg'

import './css/button.scss'

function Button({type, isDisabled}){
    const {setChoice}= useContext(choiceContext)
    const {signal}= useContext(signalContext)
    let [isSelected, setIsSelected] = useState(false)
    let [isEnabled, setIsEnabled] = useState(true)

    const handleClick = ()=>{
        setChoice(type)
        setIsSelected(true)
    }
    const setImageSrc=(type)=>{
        let result;
        switch(type){
            case 'rock':
                result = rockImg
                break;
            case "scissors":
                result = scissorsImg
                break;
            case "paper":
                result = paperImg
                break;
        }
        return result;
    }

    useEffect(()=>{
        switch(signal){
            case 'countStart':
                setIsEnabled(false)
                break;
            case 'timeFrameStart':
                setIsEnabled(true)
                break;
            case 'timeFrameDone':
                setIsEnabled(false)
                break;
        }
    },[signal])

    return(
        <button className={`btn ${"btn__" + type} ${isEnabled || isSelected ? '':'btn__notSelected'}`} 
        disabled={!isSelected && isDisabled} 
        onClick={handleClick}>
            <img src={setImageSrc(type)} alt="btn" />
        </button>
    )
}

export default Button;

/* 
no color when disabled, or when not disabled but not choosen
color when enabled, or when only when enabled and choosen.
color when enabled and nothing is selected, or enabled and something is selected
THIS IS A FUCKEN PUZZLE AND A HALF, MAN
*/