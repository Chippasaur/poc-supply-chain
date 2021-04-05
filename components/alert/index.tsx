import cls from 'classnames'
import styles from './index.module.scss'
import { AlertLevel } from './AlertLevel'

interface AlertProps {
  title: string
  alerts: Array<Alert>
}

interface Alert {
  id: string
  date: string
  riskLevel: string
  supplierName: string
  content: string
  source: string
}

const Alert = (props: AlertProps) => {
  const { title, alerts } = props

  const getRiskLevelStyle = (riskLevel: string) => {
    if (riskLevel === AlertLevel.HIGH) {
      return styles.high
    }

    if (riskLevel === AlertLevel.MEDIUM) {
      return styles.medium
    }

    return styles.low
  }

  const exposureText = 'See exposure >'

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.container}>
        {alerts.map(alert => {
          return (
            <div
              key={alert.id}
              className={cls(styles.item, {
                [styles.highRiskBackground]: alert.riskLevel === AlertLevel.HIGH,
                [styles.background]: alert.riskLevel !== AlertLevel.HIGH,
              })}>
              <span className={styles.date}>{alert.date}</span>
              <div className={styles.riskLevel}>
                <span>Level: </span>
                <span className={getRiskLevelStyle(alert.riskLevel)}>{alert.riskLevel}</span>
              </div>
              <span className={styles.content} dangerouslySetInnerHTML={{ __html: alert.content }} />
              <p className={styles.source}>Source: {alert.source}</p>
              <span className={styles.exposure}>{exposureText}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Alert
