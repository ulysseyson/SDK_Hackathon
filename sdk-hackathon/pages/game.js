import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CardBoard from "../components/card-board";
import LoginBtn from "../components/login-btn"

export const getServerSideProps = async() => {
    const Cards = {
        "card":[
        {desc : "welcome1", url:"https://image.imnews.imbc.com/news/2021/world/article/__icsFiles/afieldfile/2021/09/13/p20210913_7.jpg"
        , cardNumber : 1},
        {desc : "welcome2", url:"https://image.imnews.imbc.com/news/2021/world/article/__icsFiles/afieldfile/2021/09/13/p20210913_7.jpg"
        , cardNumber : 2},
        {desc : "welcome3", url:"https://image.imnews.imbc.com/news/2021/world/article/__icsFiles/afieldfile/2021/09/13/p20210913_7.jpg"
        , cardNumber : 3}
        ]
    }
    return {
        props: {cards : Cards}
    }
}
const game = ({cards}) => {
    const [selectedCards, setSelectedCards] = useState([]);
    const [currentCards, setCurrentCards] = useState();
    const [turnNo, setTurnNo] = useState(1);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isSelecting,setIsSelecting] = useState(true);
    const router = useRouter();

    useEffect(() => {
        setCurrentCards(cards)
    }, [isSelecting]);

    const nextTurn = () => {
        console.log("dd");
        setTurnNo((prev) => prev+1)
    }

 //   if(isPlaying){
        // axios
        //     .get('/api/card/getCurrentCards')
        //     .then((res) => {
        //         setTurnNo(res.turnNo);
        //         setCurrentCards(res.cards);
        //     })
        //     .catch((err) => {
        //         console.log("error!");
        //         router.push('/')
        //     })
        // setTurnNo((prev) => prev+1)

    return (
        
        <div>
            <LoginBtn />
            <CardBoard  setIsSelecting={setIsSelecting}
                        currentCards={currentCards}
                        isSelecting={isSelecting}
                        turnNo = {turnNo}
                        nextTurn={nextTurn}
                        setSelectedCards={setSelectedCards}/>
        </div>
    )
    
    //else router.push('/leaderBoard')
}

export default game