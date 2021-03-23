import { createMocks } from 'node-mocks-http'
import { getUsers } from '../../../pages/api/users'
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

    await getUsers(req, res)

    const [user] = res._getJSONData()
    expect(res._getStatusCode()).toBe(200)
    expect(user.name).toEqual('Bob Chan')
    expect(user.phone).toEqual('9023-2456')
  })
})
