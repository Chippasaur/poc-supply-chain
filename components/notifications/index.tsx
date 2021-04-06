import { calDiffTimeFromNow } from '../../utils/format'
import { NotificationType } from './NotificationType'
import styles from './index.module.scss'
import cn from 'classnames'

interface Notification {
  supplierName: string
  type: NotificationType
  createdAt: Date
}

interface NotificationProps {
  notifications: Notification[]
}

const messageMap = {
  [NotificationType.ON_BOARD]: 'has onboarded',
  [NotificationType.SUBMIT_SURVEY]: 'has submitted a survey',
  [NotificationType.ACCEPT_INITATION]: 'accepted your invitation',
  [NotificationType.INVITATION]: 'has invited your to join their network',
  [NotificationType.SEND_MESSAGE]: 'has sent you a message',
}

export default function Notifications(props: NotificationProps) {
  const { notifications = [] } = props

  return (
    <div className={styles.container}>
      <div className={cn(styles.row, styles.header)}>Notifications</div>
      <div className={styles.contentContainer}>
        {notifications.map((notification, index) => (
          <div key={notification.supplierName + index} className={styles.row}>
            <div className={styles.content}>
              <span className={styles.supplierName}>{notification.supplierName}</span>
              <span className={styles.message}>{messageMap[notification.type]}</span>
            </div>
            <span className={styles.time}>{calDiffTimeFromNow(notification.createdAt)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
