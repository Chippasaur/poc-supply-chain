import nextConnect from 'next-connect'
import Activity from '../../models/activity'
import { ActivityResponse, RequestHandler } from '../types'

const queryActivities: RequestHandler<any, ActivityResponse> = async (req, res, next) => {
  const actions = req.query.router

  if (actions !== undefined && actions.length !== 0 && actions[0] !== 'activities') {
    return next()
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

export const activitiesHandler = nextConnect().get(queryActivities)
