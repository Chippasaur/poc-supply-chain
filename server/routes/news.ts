import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import mongoMiddleware from '../../utils/mongoMiddleware'
import News from '../models/news'
import { NewsResponse, RequestHandler } from '../types'

export const queryNews: RequestHandler<any, NewsResponse> = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: any,
) => {
  const actions = req.query.router
  if (actions !== undefined && actions.length !== 0 && actions[0] !== 'news') {
    return next()
  }

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

export const newsHandler = nextConnect().get(queryNews)
