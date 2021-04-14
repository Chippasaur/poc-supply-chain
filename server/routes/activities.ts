import nextConnect from 'next-connect'
import Activity from '../../models/activity'
import { ActivityResponse, RequestHandler } from '../types'

const queryActivities: RequestHandler<any, ActivityResponse> = async (req, res, next) => {
  const [action] = req.query.router

  if (action !== 'activities') {
    next()
    return
  }

  try {
    const activityDocs = await Activity.find().sort({ createdAt: -1 }).limit(30)

    const activities = activityDocs.map(activityDoc => {
      return {
        id: activityDoc._id,
        companyId: activityDoc.companyId,
        content: activityDoc.content,
        lastUpdatedAt: activityDoc.lastUpdatedAt,
        createdAt: activityDoc.createdAt,
      }
    })
    res.json(activities)
  } catch (error) {
    console.error(error)
    res.json([])
  }
}

export const activityHandler = nextConnect().get(queryActivities)
