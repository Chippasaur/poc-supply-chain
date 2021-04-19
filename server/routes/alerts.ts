import nextConnect from 'next-connect'
import Alert from '../../models/alert'
import { RequestHandler } from '../types'

export const queryAlerts: RequestHandler<any, any> = async (req, res, next) => {
  const actions = req.query.router

  if (actions !== undefined && actions.length !== 0 && actions[0] !== 'alerts') {
    return next()
  }

  try {
    const alerts = await Alert.find().sort({ createdAt: -1 }).select({ lastUpdated: 0, createdAt: 0 }).limit(30)
    res.json(alerts)
  } catch (error) {
    console.error(error)
    res.json([])
  }
}

export const alertsHandler = nextConnect().get(queryAlerts)
