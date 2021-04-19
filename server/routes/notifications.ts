import nextConnect from 'next-connect'

import Notification from '../models/notification'
import { RequestHandler } from '../types'

export const queryNotifications: RequestHandler<any, any> = async (req, res, next) => {
  const actions = req.query.router

  if (actions !== undefined && actions.length !== 0 && actions[0] !== 'notifications') {
    return next()
  }

  try {
    const notifications = await Notification.find({}).sort({ createdAt: -1 }).limit(30)
    res.json(notifications)
  } catch (error) {
    console.log(error)
    res.json([])
  }
}

export const notificationsHandler = nextConnect().get(queryNotifications)
