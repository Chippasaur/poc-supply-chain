import mongoose, { Model } from 'mongoose'
import { NotificationType } from '../components/notifications/NotificationType'

const { Schema } = mongoose

const notificationSchema = new Schema({
  supplierName: String,
  type: {
    type: String,
    enum: [
      NotificationType.ON_BOARD,
      NotificationType.SUBMIT_SURVEY,
      NotificationType.SEND_MESSAGE,
      NotificationType.INVITATION,
      NotificationType.ACCEPT_INITATION,
    ],
  },
  createTime: { type: Date, default: Date.now },
})

let Notification: typeof Model

try {
  Notification = mongoose.model('Notification', notificationSchema)
} catch (error) {
  Notification = mongoose.model('Notification')
}

export default Notification
