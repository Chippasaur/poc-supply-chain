import nextConnect from 'next-connect'

import { mongoMiddleware } from '../../../server/middlewares'
import { activityHandler, newsHandler } from '../../../server/routes'

export default nextConnect().use(mongoMiddleware).use(newsHandler).use(activityHandler)
