import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import mongoMiddleware from '../../utils/mongoMiddleware'
import News from '../../models/news'

export const queryFeeds = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const newsDocs = await News.find({}).sort({ createdAt: -1 }).limit(30)

    const news = newsDocs.map(newsDoc => {
      return {
        id: newsDoc._id,
        companyId: newsDoc.companyId,
        title: newsDoc.title,
        content: newsDoc.content,
        lastUpdatedAt: newsDoc.lastUpdatedAt,
        createdAt: newsDoc.createdAt,
      }
    })
    res.json(news)
  } catch (error) {
    console.error(error)
    res.json([])
  }
}

export const onError = (error: Error, req: NextApiRequest, res: NextApiResponse, next: any) => {
  next()
}

const handler = nextConnect({ onError })

handler.use(mongoMiddleware)

handler.get(queryFeeds)

export default handler
