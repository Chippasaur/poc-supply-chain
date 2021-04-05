import nextConnect from 'next-connect'
import Notification from '../../models/notification'
import { NextApiRequest, NextApiResponse } from 'next'
import mongoMiddleware from '../../utils/mongoMiddleware'

export const getNotifications = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const notifications = await Notification.find({}).sort({ createdAt: -1 }).limit(30)
    res.json(notifications)
  } catch (error) {
    console.log(error)
  }
}

export const onError = (error: Error, req: NextApiRequest, res: NextApiResponse, next: any) => {
  next()
}

const handler = nextConnect({ onError })

handler.use(mongoMiddleware)

handler.get(getNotifications)

export default handler
