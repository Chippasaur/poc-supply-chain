import { createMocks } from 'node-mocks-http'
import { NextHandler } from 'next-connect'

import { getUser } from '../../../routes/users'
import { connectDb, disconnectDb } from '../../../middlewares/mongo'

describe('users api', () => {
  beforeEach(async () => {
    await connectDb()
  })

  afterEach(async () => {
    await disconnectDb()
  })

  test('should be able to get info of the fake user', async () => {
    const { req, res } = createMocks({ method: 'GET' })
    const next: NextHandler = () => {}

    await getUser(req, res, next)
    const user = res._getJSONData()
    expect(res._getStatusCode()).toBe(200)
    expect(user.name).toEqual('Matt')
    expect(user.email).toEqual('example@example.com')
    expect(user.companyName).toEqual('Amazon, Inc')
  })
})
