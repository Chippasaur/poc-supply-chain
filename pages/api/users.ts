import User from '../../models/user'
import { NextApiRequest, NextApiResponse } from 'next'
import mongoMiddleware from '../../utils/mongoMiddleware'
import nextConnect from 'next-connect'

const handler = nextConnect()

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

handler.use(mongoMiddleware)

handler.get(getUsers)

export default handler
