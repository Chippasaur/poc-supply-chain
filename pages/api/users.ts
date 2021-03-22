import { NextApiRequest, NextApiResponse } from 'next'
import User from '../../models/user'
import { connectDb } from '../../utils/mongodb'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDb()

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
