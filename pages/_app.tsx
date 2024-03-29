import '../styles/global.scss'
import { AppProps } from 'next/app'
import NavigationBar from '../components/navigationBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar />
      <div id={`id`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
