import axios from "axios";
import { execOnce } from "next/dist/shared/lib/utils"
import { useState } from "react"
import Card from "./card"

const CardBoard = (props) => {
    const [isOn, setIsOn] = useState(props.isSelecting);

    axios
        .get("/api/card/getCurrentCards")
        .then((res) => {
            
        })
    return (
        <div className="page">
        <div className="cardboard">
            <div>turn {props.turnNo}</div>
            <Card setIsOn = {setIsOn} desc= "welcome" url = "https://image.imnews.imbc.com/news/2021/world/article/__icsFiles/afieldfile/2021/09/13/p20210913_7.jpg"></Card>
            <Card setIsOn = {setIsOn} desc= "welcome" url = "https://image.imnews.imbc.com/news/2021/world/article/__icsFiles/afieldfile/2021/09/13/p20210913_7.jpg"></Card>
            <Card setIsOn = {setIsOn} desc= "welcome" url = "https://image.imnews.imbc.com/news/2021/world/article/__icsFiles/afieldfile/2021/09/13/p20210913_7.jpg"></Card>
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

export default CardBoard;
