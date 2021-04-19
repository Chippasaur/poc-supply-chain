import nextConnect from 'next-connect'

import User from '../models/user'
import { RequestHandler } from '../types'

export const getUser: RequestHandler<any, any> = async (req, res, next) => {
  const actions = req.query.router

  if (actions !== undefined && actions.length !== 0 && actions[0] !== 'users') {
    return next()
  }

  try {
    const { USER_EMAIL } = process.env
    const user = await User.findOne({ email: USER_EMAIL })
    res.json(user)
  } catch (error) {
    console.error(error)
    res.json([])
  }
}

export const usersHandler = nextConnect().get(getUser)
