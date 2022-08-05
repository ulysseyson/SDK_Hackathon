import axios from "axios";

const Card = (props) => {
    console.log(props.nextTurn);
    // axios
    //     .get("/api/card/selectCard",{
    //         params : {
    //             cardNo : props.cardNum
    //         }
    //     })
    //     .then((res) => {
            
    //     })
    //     .catch((err) =>{
    //         console.log(err);
    //     })
        
    return (
        <div className="card-border" onClick={props.nextTurn}>
            <div className="card">
                <img src={props.url} width="220vw" height="160vh"></img>
                <div className="desc">{props.desc}</div>
            </div>
            <style jsx>{`
                .card-border {
                    display : flex;
                    padding : 2px;
                    background-color : black;
                    width : 240px;
                    height : 320px;
                    justify-content : center;
                    align-items: center;
                    z-index : 99;
                }
                .card-border:hover {
                    padding : 20px;
                }
                .card {
                    background-color : brown;
                    width: 220px;
                    height : 280px;
                }
                .desc {
                    font: normal normal bold 16px/20px Noto Sans KR;
                    padding : 10px;
                }
            
            `}</style>
        </div>
    )
}

export default Card;