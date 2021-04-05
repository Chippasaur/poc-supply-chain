import styles from './index.module.scss'
import { AlertLevel } from './AlertLevel'

interface AlertProps {
  title: string
  contents: Array<Alert>
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
  const { title, contents } = props

  const getRiskLevelStyle = (riskLevel: string) => {
    if (riskLevel === AlertLevel.HIGH) {
      return styles.high
    }

    if (riskLevel === AlertLevel.MEDIUM) {
      return styles.medium
    }

    return styles.low
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.container}>
        {contents.map(content => {
          return (
            <div key={content.id} className={styles.item}>
              <div className={styles.riskLevel}>
                <span>Level: </span>
                <span className={getRiskLevelStyle(content.riskLevel)}>{content.riskLevel}</span>
              </div>
              <p className={styles.content}>{content.content}</p>
              <p className={styles.source}>{content.source}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
