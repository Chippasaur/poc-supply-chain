import nextConnect from 'next-connect'
import Notification from '../../models/notification'
import { NextApiRequest, NextApiResponse } from 'next'
import mongoMiddleware from '../../utils/mongoMiddleware'

export const getNotifications = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const notifications = await Notification.find({}).sort({ createTime: -1 }).limit(30)
    res.json(notifications)
  } catch (error) {
    console.log(error)
    return res.status(500).send(error.message)
  }
}

export const addNotification = async (req: NextApiRequest, res: NextApiResponse) => {
  const { supplierName, type } = req.body

  if (supplierName && (type || type === 0)) {
    try {
      const notification = new Notification({
        supplierName: supplierName,
        type: type,
      })
      const notificationSaved = await notification.save()
      return res.status(200).send(notificationSaved)
    } catch (error) {
      return res.status(500).send(error.message)
    }
  } else {
    res.status(400).send('data_incomplete')
  }
}

export const onError = (error: Error, req: NextApiRequest, res: NextApiResponse, next: any) => {
  next()
}

const handler = nextConnect({ onError })

handler.use(mongoMiddleware)

handler.get(getNotifications)

handler.post(addNotification)

export default handler
