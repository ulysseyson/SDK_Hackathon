import styles from '../styles/Home.module.css';
import LoginBtn from '../components/login-btn';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';


export default function Home() {
  
  const router = useRouter();
  const gameStart = () => {
    router.push('/game')
    axios
    .get("/api/card/gameStart", {
      method : "GET"
    })
    .then((res) => {
      if (res.isLogin === true) router.push('/game')
    })
  }
  return (
    <div className='page'>
      <LoginBtn />
      <a onClick={gameStart} className='start-button'>Start!</a>
      <div></div>
      <style jsx global>{`
        
        a {
          text-decoration : none;
        }
        .start-button {
          display: flex;
          justify-content : center;
          
          font: normal normal bold 60px/20px Noto Sans KR;
        }
        .page {
          padding : 0;
          background-color : green;
          display : flex;
          flex-direction : column;
          align-items : stretch;
          height : 100%;
          justify-content : space-between;
        }
      `}</style>
    </div>
  );
}
