import axios from "axios";
import { useEffect, useState } from "react";
import CardBoard from "../components/card-board";
import LoginBtn from "../components/login-btn"

const game = () => {
    const [selectedCards, setSelectedCards] = useState([]);
    const [turnNo, setTurnNo] = useState(1);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isSelecting,setIsSelecting] =useState(true);
    let i = 1
    if(isSelecting){
        return (

            <div>
                <LoginBtn />
                <CardBoard  setIsSelecting={setIsSelecting}
                            turnNo = {turnNo} setTurnNo={setTurnNo}
                            setSelectedCards={setSelectedCards}/>
            </div>
        )
    }
    else {
        return (
            <div>
                <LoginBtn />
            </div>
        )
    }
}

export default game