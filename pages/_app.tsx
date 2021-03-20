/** @format */

import '../styles/globals.css'
import { connectDb } from '../utils/mongodb'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  connectDb().catch(err => console.log(err))
  return <Component {...pageProps} />
}

export default MyApp
