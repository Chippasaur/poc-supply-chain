import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import mongoMiddleware from '../../utils/mongoMiddleware'
import Alert from '../../models/alert'

export const queryAlerts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const alerts = await Alert.find().select({ lastUpdatedAt: 0 }).sort({ createdAt: -1 }).limit(30)
    res.json(alerts)
  } catch (error) {
    console.error(error)
  }
}

export const onError = (error: Error, req: NextApiRequest, res: NextApiResponse, next: any) => {
  next()
}

const handler = nextConnect({ onError })

handler.use(mongoMiddleware)

handler.get(queryAlerts)

export default handler
