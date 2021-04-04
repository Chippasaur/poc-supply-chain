import Head from 'next/head'
import Notifications from '../components/notifications'
import styles from './index.module.scss'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

const user = { name: 'Matt' }

export default function Home() {
  const { data: notifications = [] } = useSWR('/api/notifications', fetcher)

  const { name } = user

  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}> Welcome Back, {name}</h1>
        </div>
        <Notifications notifications={notifications} />
      </main>
    </div>
  )
}
