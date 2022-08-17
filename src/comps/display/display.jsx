import { useEffect, useState } from "react";

import '../display/css/display.scss'

export default function Display({outcome}) {

  let [modifier, setModifier] = useState('');
  let [text, setText] = useState('');
  function modifierSwitch(outcome){
    let result = 'display--main';
    let text = '';
    switch(outcome){
      case "WIN":
        result += '__win'
        text = 'YOU WON'
        break;
      case "LOSE":
        result += '__lose'
        text = 'YOU LOST'
        break;
      case "DRAW":
        result += '__draw'
        text = 'DRAW'
        break;
      default:
        break;
    }
    setText(text)
    setModifier(result);
  }

  useEffect(()=>{
    modifierSwitch(outcome)
  },[outcome])
  return (
    <div className={`display--main ${modifier}`}>{text}</div>
  )
}
