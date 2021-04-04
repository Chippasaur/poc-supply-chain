import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import mongoMiddleware from '../../utils/mongoMiddleware'
import News from '../../models/news'

export const queryFeeds = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const news = await News.find({})
    res.json(news)
  } catch (error) {
    console.error(error)
  }
}

export const onError = (error: Error, req: NextApiRequest, res: NextApiResponse, next: any) => {
  next()
}

const handler = nextConnect({ onError })

handler.use(mongoMiddleware)

handler.get(queryFeeds)

export default handler
