import styles from '../styles/Home.module.css';
import LoginBtn from '../components/login-btn';

export default function Home() {
  return (
    <div>
      <LoginBtn />
      <Link href="/game">Start!</Link>
    </div>
  );
}
