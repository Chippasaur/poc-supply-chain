import mongoose, { Model } from 'mongoose'
import { NotificationType } from '../components/notifications/NotificationType'

const { Schema } = mongoose

const notificationSchema = new Schema({
  supplierName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: Object.values(NotificationType),
    required: true,
  },
  createdAt: { type: Date, default: Date.now, requried: true },
})

let Notification: typeof Model

try {
  Notification = mongoose.model('Notification', notificationSchema)
} catch (error) {
  Notification = mongoose.model('Notification')
}

export default Notification
