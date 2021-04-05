import { createMocks } from 'node-mocks-http'
import { queryAlerts } from '../../../pages/api/alerts'
import { connectDb, disconnectDb } from '../../../utils/mongoMiddleware'

describe('notification api', () => {
  beforeEach(async () => {
    await connectDb()
  })

  afterEach(async () => {
    await disconnectDb()
  })

  it('should be able to get all alerts', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    })

    await queryAlerts(req, res)

    const notifications = res._getJSONData()
    expect(res._getStatusCode()).toBe(200)
  })
})
