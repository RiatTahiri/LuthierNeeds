import '../styles/globals.css'
import Layout from '../components/Layout.js'
import Head from 'next/head';
import Script from 'next/script';

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Home</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout> 
    </>
  )
}

export default MyApp
