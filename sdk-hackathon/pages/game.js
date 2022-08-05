import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CardBoard from "../components/card-board";
import LoginBtn from "../components/login-btn"
import Ending from "../components/Ending"

// export const getServerSideProps = async() => {
//     const Cards = {
//         "card":[
//         {desc : "welcome1", url:"https://image.imnews.imbc.com/news/2021/world/article/__icsFiles/afieldfile/2021/09/13/p20210913_7.jpg"
//         , cardNumber : 1},
//         {desc : "welcome2", url:"https://image.imnews.imbc.com/news/2021/world/article/__icsFiles/afieldfile/2021/09/13/p20210913_7.jpg"
//         , cardNumber : 2},
//         {desc : "welcome3", url:"https://image.imnews.imbc.com/news/2021/world/article/__icsFiles/afieldfile/2021/09/13/p20210913_7.jpg"
//         , cardNumber : 3}
//         ]
//     }
//     return {
//         props: {cards : Cards}
//     }
// }
const game = ({cards}) => {
    const [selectedCards, setSelectedCards] = useState([]);
    const [currentCards, setCurrentCards] = useState();
    const [turnNo, setTurnNo] = useState(1);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isSelecting,setIsSelecting] = useState(true);
    const [cardNum, setCardNum] = useState(0)
    const router = useRouter();

    useEffect(() => {
        axios
            .get("/api/card/getCurrentCards")
            .then((res) => {
                setCurrentCards(res.cards)
            })
            .catch((err) => {
                console.log(err);
            })
        setCurrentCards(cards)
        axios
            .get("/api/card/getGameStatus")
            .then((res) => {
                setTurnNo(res.turnNo)
                setIsPlaying(res.isPlaying)
            })
            .catch((err) => {
                console.log(err);
            })
        
    }, [turnNo]);

    const nextTurn = () => {
        console.log("dd");
        axios
            .get("/api/card/selectCard", {
                params : {
                    cardNo : cardNum
                }
            })
            .then((res) => {

            })
            .catch((err) =>{
                console.log(err);
            })
            
        setTurnNo((prev) => prev+1)
    }

    if(isPlaying){
        if(turnNo === 10) setIsPlaying((prev) => !prev)
        return (
            
            <div>
                <LoginBtn />
                <CardBoard  setIsSelecting={setIsSelecting}
                            currentCards={currentCards}
                            isSelecting={isSelecting}
                            turnNo = {turnNo}
                            nextTurn={nextTurn}
                            setCardNum={setCardNum}
                            setSelectedCards={setSelectedCards}/>
            </div>
        )
    }
    else{
        return (
            <div>
                <Ending selectedCards={selectedCards}></Ending>
            </div>
        )
    }
    
    //else router.push('/leaderBoard')
}

export default game