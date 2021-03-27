import nextConnect from 'next-connect'
import Company from '../../models/company'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import mongoMiddleware from '../../utils/mongoMiddleware'

export const getCompany = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { company_name } = req.body
    const company = await Company.findOne({ name: company_name })
    res.json(company)
  } catch (error) {
    console.error(error)
  }
}

export const onError = (error: Error, req: NextApiRequest, res: NextApiResponse, next: any) => {
  next()
}

const handler = nextConnect({ onError })

handler.use(mongoMiddleware)

handler.get(getCompany)

export default handler
