import { createMocks } from 'node-mocks-http'
import { getUser } from '../../../pages/api/users'
import { connectDb, disconnectDb } from '../../../utils/mongoMiddleware'

describe('users api', () => {
  beforeEach(async () => {
    await connectDb()
  })

  afterEach(async () => {
    await disconnectDb()
  })

  test('should be able to get info of the fake user', async () => {
    const { req, res } = createMocks({ method: 'GET' })

    await getUser(req, res)

    const user = res._getJSONData()
    expect(res._getStatusCode()).toBe(200)
    expect(user.name).toEqual('Matt')
    expect(user.phone).toEqual('example@example.com')
    expect(user.company_name).toEqual('Amazon, Inc')
  })
})
