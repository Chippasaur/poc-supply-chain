import { dateTimeFormatter } from '../../utils/format'
import styles from './index.module.scss'

interface ActivityNewsProps {
  title: string
  contents: Array<Content>
}

interface Content {
  id: string
  createdTime: Date
  title?: string
  content: string
}

const ActivityNews = (props: ActivityNewsProps) => {
  const { title, contents } = props

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      <div className={styles.container}>
        {contents.map(content => {
          return (
            <div key={content.id} className={styles.item}>
              <span className={styles.date}>{dateTimeFormatter(content.createdTime)}</span>
              {content.title && <span className={styles.contentTitle}> {content.title}</span>}
              <p className={styles.content}>{content.content}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ActivityNews
