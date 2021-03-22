import mongoose from 'mongoose'

const { Schema } = mongoose

export function NotificationPo() {
  const notificationSchema = new Schema({
    supplierName: String,
    type: {
      type: String,
      enum: ['ON_BOARD', 'SUBMIT_SURVEY', 'ACCEPT_INVITATION', 'INVITATION', 'SEND_MESSAGE'],
    },
    createTime: { type: Date, default: Date.now },
  })

  let notificationPo
  try {
    notificationPo = mongoose.model('Notification', notificationSchema)
  } catch (error) {
    notificationPo = mongoose.model('Notification')
  }

  return notificationPo
}
