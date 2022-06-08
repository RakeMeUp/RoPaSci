import { useContext } from "react"
import { choiceContext } from "../App"

export default function Display() {
    const hands = ["Rock", "Paper", "Scissors"];
    const choice = useContext(choiceContext) 

    if(choice === "Start"){
        const enemyHand = hands[Math.floor(Math.random()*3)]
    }

    return (
        <div>{choice}</div>
    )
}
