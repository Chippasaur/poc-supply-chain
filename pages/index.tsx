import Head from 'next/head'
import Notifications from '../components/notifications'
import styles from './index.module.scss'
import React from 'react'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import useSWR from 'swr'
import ActivityNews from '../components/activityNews'
import Alert from '../components/alert'
import { alerts } from '../components/alert/fakeAlerts'
import { ActivityNewsType } from '../components/activityNews/ActivityNewsType'

const fetcher = (url: string) => fetch(url).then(res => res.json())

const user = { name: 'Matt', company: 'Amazon, Inc' }
const companyInfo = { avatar: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Amazon_Alexa_App_Logo.png' }

export default function Home() {
  const { data: notifications = [] } = useSWR('/api/notifications', fetcher)
  const { data: activities = [] } = useSWR('/api/activities', fetcher)
  const { data: news = [] } = useSWR('/api/news', fetcher)
  // const { name } = useSWR('/api/users', fetcher)

  const { name, company } = user
  const { avatar } = companyInfo

  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <div>
            <div className={styles.companyInfo}>
              <Avatar alt="Remy Sharp" src={avatar} className={styles.avatar} />
              <p>{company}</p>
            </div>
          </div>
        </div>
        <div>
          <Button variant="outlined" color="primary">
            Add colleague
          </Button>
          <Button variant="outlined" color="primary">
            Invite counterparty
          </Button>
        </div>
        <Notifications notifications={notifications} />
        <ActivityNews title="Activity" type={ActivityNewsType.ACTIVITY_FEED} contents={activities} />
        <ActivityNews title="Recent news" type={ActivityNewsType.RECENT_NEWS} contents={news} />
      </main>
    </div>
  )
}
