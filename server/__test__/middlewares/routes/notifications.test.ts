import { NextHandler } from 'next-connect'
import { createMocks } from 'node-mocks-http'
import { connectDb, disconnectDb } from '../../../middlewares/mongo'
import { queryNotifications } from '../../../routes/notifications'

describe('notifications api', () => {
  beforeEach(async () => {
    await connectDb()
  })

  afterEach(async () => {
    await disconnectDb()
  })

  test('should be able to get 30 or less notifications', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    })

    const next: NextHandler = err => {
      console.error(err)
    }

    await queryNotifications(req, res, next)

    const notifications = res._getJSONData()
    expect(res._getStatusCode()).toBe(200)
    expect(notifications.length).toBeLessThanOrEqual(30)
  })
})
