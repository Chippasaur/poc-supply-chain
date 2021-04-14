import nextConnect from 'next-connect'

import { mongoMiddleware } from '../../../server/middlewares'
import { activityHandler } from '../../../server/routers'

export default nextConnect().use(mongoMiddleware).use(activityHandler)
