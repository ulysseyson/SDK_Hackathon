import { execOnce } from "next/dist/shared/lib/utils"
import { useEffect, useState } from "react"
import Card from "./card"

const CardBoard = (props) => {
    console.log(props.currentCards);
    if(props.isSelecting && props.currentCards !== undefined){

        return (
            <div className="page">
            <div className="cardboard">
                <div>{props.turnNo}</div>
                <Card setIsSelecting={props.setIsSelecting} 
                            cardNum = {1}
                            setSelectedCards={props.setSelectedCards}
                            desc= {props.currentCards.card[0].desc}
                            url = {props.url}
                            nextTurn={props.nextTurn}></Card>
                <Card setIsSelecting={props.setIsSelecting} 
                            cardNum = {2}
                            setSelectedCards={props.setSelectedCards}
                            desc= {props.currentCards.card[0].desc}
                            url = {props.url}
                            nextTurn={props.nextTurn}></Card>
                <Card setIsSelecting={props.setIsSelecting} 
                            cardNum = {3}
                            setSelectedCards={props.setSelectedCards}
                            desc= {props.currentCards.card[0].desc}
                            url = {props.url}
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
                    flex-axis : row;
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
