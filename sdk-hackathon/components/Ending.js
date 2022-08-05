import Link from "next/link";
import LoginBtn from "../components/login-btn"

const Ending = (props) => {


    return (
        <div>
            <LoginBtn/>

            <div className="page">

                <div></div>
                <div></div>
                <div className="text">The END!</div>
                <Link href="/"><div className="share">다시하기</div></Link>
                <div></div>
                <div></div>
                <style jsx>{`
                    .page {
                        height : 100%;
                        display : flex;
                        padding : 300px;
                        flex-direction : column;
                        align-items : center;
                        justify-content : space-around;
                    }
                    .text {
                        padding-bottom : 100px;                    
                        font: normal normal bold 30px/20px Noto Sans KR;
                    }
                    .share {
                        font: normal normal bold 25px/20px Noto Sans KR;
                    }
                `}</style>
            </div>
        </div>
    );
}

export default Ending;