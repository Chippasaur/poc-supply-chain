import Head from 'next/head'
import Notifications from '../components/notifications'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Home() {
  const { data: notifications = [] } = useSWR('/api/notifications', fetcher)

  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Notifications notifications={notifications} />
      </main>
    </div>
  )
}
