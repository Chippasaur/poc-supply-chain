import { dateTimeFormatter } from '../../utils/format'
import styles from './index.module.scss'
import _ from 'lodash'
import { ActivityNewsType } from './ActivityNewsType'
import cls from 'classnames'

interface ActivityNewsProps {
  title: string
  type: ActivityNewsType
  contents: Array<Content>
}

interface Content {
  id: string
  createdAt: Date
  title?: string
  content: string
}

const ActivityNews = (props: ActivityNewsProps) => {
  const { title, type, contents } = props

  const renderHint = () => {
    if (type === ActivityNewsType.RECENT_NEWS) {
      return <span className={styles.hint}>No news</span>
    }
    if (type === ActivityNewsType.ACTIVITY_FEED) {
      return <span className={styles.hint}>No activities</span>
    }
  }

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>
      <div className={styles.container}>
        {_.isUndefined(contents) || _.isEmpty(contents)
          ? renderHint()
          : contents.map(content => {
              return (
                <div key={content.id} className={styles.item}>
                  <span className={styles.date}>{dateTimeFormatter(content.createdAt)}</span>
                  {content.title && <span className={styles.contentTitle}> {content.title}</span>}
                  <span
                    className={cls(styles.content, {
                      [styles.newsContent]: _.isEqual(type, ActivityNewsType.RECENT_NEWS),
                    })}
                    dangerouslySetInnerHTML={{ __html: content.content }}
                  />
                </div>
              )
            })}
      </div>
    </div>
  )
}

export default ActivityNews
