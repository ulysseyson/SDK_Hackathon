import { execOnce } from "next/dist/shared/lib/utils"
import { useEffect, useState } from "react"
import Card from "./card"

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing }
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing
      }
   }
};

const stagger = {
    animate: {
        transition: {
        staggerChildren: 0.1
        }
    }
};

const CardBoard = (props) => {
    // console.log(props.currentCards);
    // const animation = () => {

    // }
    setTimeout(()=>{console.log("dfdf")}, 30000);
    if(props.currentCards !== undefined){

        return (
            <div className="page">
            <div className="cardboard">
                <div>{props.turnNo}</div>
                <Card setIsSelecting={props.setIsSelecting} 
                            cardNum = {1}
                            setCardNum = {props.setCardNum}
                            setSelectedCards={props.setSelectedCards}
                            desc= {props.currentCards.card[0].desc}
                            url = {props.currentCards.card[0].url}
                            nextTurn={props.nextTurn}></Card>
                <Card setIsSelecting={props.setIsSelecting} 
                            cardNum = {2}
                            setCardNum = {props.setCardNum}
                            setSelectedCards={props.setSelectedCards}
                            desc= {props.currentCards.card[1].desc}
                            url = {props.currentCards.card[1].url}
                            nextTurn={props.nextTurn}></Card>
                <Card setIsSelecting={props.setIsSelecting} 
                            cardNum = {3}
                            setCardNum = {props.setCardNum}
                            setSelectedCards={props.setSelectedCards}
                            desc= {props.currentCards.card[2].desc}
                            url = {props.currentCards.card[2].url}
                            nextTurn={props.nextTurn}></Card>
            </div>
            <style jsx>{`
                .page {
                    display : flex;
                    align-items : center;
                    justify-content : center;
                    height : 80%;
                }
                .cardboard {
                    display : flex;
                    justify-content : space-around;
                    align-items : center;
                    width : 1000px;
                    height : 400px;
                    background-color : gray;
                }
                `}</style>
        </div>
        )
    }
}

export default CardBoard;
