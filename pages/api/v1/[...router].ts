import nextConnect from 'next-connect'

import { mongoMiddleware } from '../../../server/middlewares'
import { activitiesHandler, newsHandler, usersHandler, notificationsHandler } from '../../../server/routes'

export default nextConnect()
  .use(mongoMiddleware)
  .use(usersHandler)
  .use(notificationsHandler)
  .use(alertsHandler)
  .use(newsHandler)
  .use(activitiesHandler)
