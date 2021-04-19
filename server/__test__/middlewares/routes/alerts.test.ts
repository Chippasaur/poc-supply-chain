import { createMocks } from 'node-mocks-http'
import { NextHandler } from 'next-connect'
import { connectDb, disconnectDb } from '../../../middlewares/mongo'
import { queryAlerts } from '../../../routes/alerts'

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

    const next: NextHandler = err => {
      console.error(err)
    }
    await queryAlerts(req, res, next)

    const notifications = res._getJSONData()
    expect(res._getStatusCode()).toBe(200)
  })
})
