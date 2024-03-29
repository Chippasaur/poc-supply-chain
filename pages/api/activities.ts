import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import mongoMiddleware from '../../utils/mongoMiddleware'
import Activity from '../../models/activity'

export const queryActivities = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const activities = await Activity.find().sort({ createdAt: -1 }).limit(30)
    res.json(activities)
  } catch (error) {
    console.error(error)
    res.json([])
  }
}

export const onError = (error: Error, req: NextApiRequest, res: NextApiResponse, next: any) => {
  next()
}

const handler = nextConnect({ onError })

handler.use(mongoMiddleware)

handler.get(queryActivities)

export default handler
