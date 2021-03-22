import User from '../../models/user'
import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import mongoMiddleware from '../../utils/mongoMiddleware'
import nextConnect from 'next-connect'

export const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let users = await User.find({})
    if (users.length === 0) {
      await User.create({ name: 'Bob Chan', phone: '9023-2456' })
      users = await User.find({})
    }
    res.json(users)
  } catch (error) {
    console.error(error)
  }
}

export const onError = (error: Error, req: NextApiRequest, res: NextApiResponse, next: NextApiHandler) => {
  next()
}

const handler = nextConnect({ onError })

handler.use(mongoMiddleware)

handler.get(getUsers)

export default handler
