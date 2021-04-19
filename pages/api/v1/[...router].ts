import nextConnect from 'next-connect'

import { mongoMiddleware } from '../../../server/middlewares'
import { activitiesHandler, newsHandler, usersHandler } from '../../../server/routes'

export default nextConnect().use(mongoMiddleware).use(usersHandler).use(newsHandler).use(activitiesHandler)
