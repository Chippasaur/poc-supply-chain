import Head from 'next/head'
import Notifications from '../components/notifications'
import styles from './index.module.scss'
import React from 'react'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import useSWR from 'swr'
import ActivityNews from '../components/activityNews'
import { alerts } from '../components/alert/fakeAlerts'
import { ActivityNewsType } from '../components/activityNews/ActivityNewsType'
import CompanyOverview from '../components/home/companyOverview'
import Alert from '../components/alert'

const fetcher = (url: string) => fetch(url).then(res => res.json())

const user = { name: 'Matt', company: 'Amazon, Inc' }
const companyInfo = { avatar: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Amazon_Alexa_App_Logo.png' }

export default function Home() {
  const { data: notifications = [] } = useSWR('/api/notifications', fetcher)
  const { data: activities = [] } = useSWR('/api/activities', fetcher)
  const { data: news = [] } = useSWR('/api/news', fetcher)
  const { data: { name, companyName } = {} } = useSWR('/api/users', fetcher)
  const { data: { logoUrl, ...datas } = {} } = useSWR(`/api/companies?companyName=${companyName}`, fetcher)

  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <div>
          <h1>Welcome back, {name}</h1>
          <div className={styles.companyInfo}>
            <Avatar alt="Remy Sharp" src={logoUrl} className={styles.avatar} />
            <p>{companyName}</p>
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
      </div>
      <main className={styles.main}>
        <div>
          <CompanyOverview {...datas} />
          <Notifications notifications={notifications} />
        </div>
        <Alert alerts={alerts} title={`Alerts`} />
        <div>
          <ActivityNews title="Activity" type={ActivityNewsType.ACTIVITY_FEED} contents={activities} />
          <ActivityNews title="Recent news" type={ActivityNewsType.RECENT_NEWS} contents={news} />
        </div>
      </main>
    </div>
  )
}
