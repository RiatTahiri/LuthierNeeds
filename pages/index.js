import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Home.module.css'

export default function Home() {
  return (
    <section className='bg-dark p-5 text-center'>
      <h2 id={homeStyles.titleCard}>Luthier</h2>
    </section>
  )
}
