import { createMocks } from 'node-mocks-http'
import { getCompany } from '../../../pages/api/companies'
import { connectDb, disconnectDb } from '../../../utils/mongoMiddleware'

describe('companies api', () => {
  beforeEach(async () => {
    await connectDb()
  })

  afterEach(async () => {
    await disconnectDb()
  })

  test('should be able to get company info by company name', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      body: {
        company_name: 'Amazon, Inc',
      },
    })

    await getCompany(req, res)

    const company = res._getJSONData()
    expect(res._getStatusCode()).toBe(200)
    expect(company.name).toEqual('Amazon, Inc')
    expect(company.logo_url).toEqual('/companies/amazon.png')
    expect(company.counterparties_num).toEqual(3518)
    expect(company.subsidiaries_num).toEqual(14)
    expect(company.facilities_num).toEqual(329)
  })
})
