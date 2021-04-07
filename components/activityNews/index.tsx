import { dateTimeFormatter } from '../../utils/format'
import styles from './index.module.scss'
import _ from 'lodash'
import { ActivityNewsType } from './ActivityNewsType'

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
  const twoLinesCharNum = 95
  const threeLinesCharNum = 125
  const { title, type, contents } = props

  const renderHint = () => {
    if (type === ActivityNewsType.RECENT_NEWS) {
      return <span className={styles.hint}>No news</span>
    }
    if (type === ActivityNewsType.ACTIVITY_FEED) {
      return <span className={styles.hint}>No activities</span>
    }
  }

  const sliceContent = (content: string) => {
    let maxLength = 0

    if (type === ActivityNewsType.ACTIVITY_FEED) {
      maxLength = twoLinesCharNum
    }

    if (type === ActivityNewsType.RECENT_NEWS) {
      maxLength = threeLinesCharNum
    }

    const newContent = content.length > maxLength ? `${content.slice(0, maxLength)}...` : content

    return { __html: newContent }
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
                  <span className={styles.content} dangerouslySetInnerHTML={sliceContent(content.content)} />
                </div>
              )
            })}
      </div>
    </div>
  )
}

export default ActivityNews
