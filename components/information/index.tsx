import styles from './index.module.scss'
import { NotificationType } from '../notifications/NotificationType'

interface Props {
  title: string
  contents: Array<List>
}

interface List {
  id: string
  date: string
  title?: string
  content: string
}

const Information = (props: Props) => {
  const { title, contents } = props

  return (
    <>
      <div className={styles.title}>{title}</div>
      <div className={styles.container}>
        {contents.map(content => {
          return (
            <div key={NotificationType.ACCEPT_INITATION} className={styles.item}>
              <span className={styles.date}>{content.date}</span>
              {content.title && <span className={styles.contentTitle}>{content.title}</span>}
              <p className={styles.content}>{content.content}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Information
