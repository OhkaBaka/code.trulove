'use client'
import { useState, useEffect } from 'react'
import {Button} from '@mui/material';

const cards = [
  {question: "2+2", answer:"4"},
  {question: "3+2", answer:"5"},
  {question: "6-4", answer:"2"},
];

export default function FlashCards() {
  const [flipped, setFlipped] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const clickPrevious = ()=>{
    console.log("clickPrev",currentCard, cards.length);
    if(currentCard > 0){
      setCurrentCard(currentCard-1);
      setFlipped(false);
    }
  }

  const clickNext = ()=>{
    console.log("clickNext",currentCard, cards.length);
    if(currentCard < (cards.length-1)){
      setCurrentCard(currentCard+1);
      setFlipped(false);
    }

  }

  return (
  <>
    <div id="card" style={{border:"1px solid blue", width:"50px", height:"50px"}} onClick={()=>{setFlipped(!flipped);console.log(flipped);}} >
      {!flipped && (
          <div id="front" style={{border:"1px solid red", width:"50px", height:"50px"}}>{cards[currentCard].question}</div>
      ) || (
        <div id="back" style={{border:"1px solid green", width:"50px", height:"50px"}}>{cards[currentCard].answer}</div>
      )}
    </div>
    <Button onClick={()=>{clickPrevious()}} >Previous</Button>
    <Button onClick={()=>{clickNext()}} >Next</Button>
    <div style={{border:"1px solid gray", width:"500px",fontSize:"14pt", backgroundColor:"#ffeeaa"}}>
      Less than thirty minutes work from a coding interview.<br/>
      The ask was to build a simple flashcard system. There was a fair amount of chatting throughout, overall I was happy with the result. I started initially with the intent to use CSS to hide and display the front and backs of the cards, before realizing the conditional rendering option was superior for a couple reasons.
    </div>
  </>
  )

}