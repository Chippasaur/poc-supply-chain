import { createMocks } from 'node-mocks-http'
import { getNotifications } from '../../../pages/api/notifications'
import { connectDb, disconnectDb } from '../../../utils/mongoMiddleware'

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

    await getNotifications(req, res)

    const notifications = res._getJSONData()
    expect(res._getStatusCode()).toBe(200)
    expect(notifications.length).toBeLessThanOrEqual(30)
  })
})
