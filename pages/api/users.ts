import { UserPo } from '../../po/userPo'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let User = UserPo()

  const user = new User({ name: 'twUser', phone: '12341259182479' })

  let users = null

  try {
    await user.save()

    users = await User.find({})
  } catch (error) {
    console.log(error)
  }

  res.json(users)
}
