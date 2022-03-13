import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <header className={homeStyles.mainHeader}>
        <div className={homeStyles.content}>
          <div className={homeStyles.mainTitle}>
            <h1>Guitar Pro's</h1>
          </div>
          <div className={homeStyles.mainDescription}>
            <p>Are you a luthier trying to expand your business?</p>
            <p>Well you've come to the right place.</p>
            <Link href='/explore'><a className={homeStyles.exploreLink}>Explore</a></Link>
          </div>
        </div>
    </header>
  )
}