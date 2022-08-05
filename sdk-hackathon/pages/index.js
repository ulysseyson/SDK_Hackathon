import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="api/auth/signin">
        <a>Sign In</a>
      </Link>
      <Link href="api/auth/signout">
        <a>Sign Out</a>
      </Link>
      Start!
    </div>
  );
}
