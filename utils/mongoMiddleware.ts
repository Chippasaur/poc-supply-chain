import mongoose, { mongo } from 'mongoose'
import nextConnect from 'next-connect'
import { Db, MongoClient } from 'mongodb'
import next, { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import build from 'next/dist/build'

type DBConfig = { client: MongoClient; db: Db } | null

interface MongoParams {
  host: string | undefined
  user: string | undefined
  password: string | undefined
  db: string | undefined
}

const { DB_HOST, DB_NAME, DB_USER, DB_PASS } = process.env

export const buildMongoUrl = (params: MongoParams) => {
  return `mongodb+srv://${params.user}:${params.password}@${params.host}/${params.db}`
}

const url = buildMongoUrl({ host: DB_HOST, db: DB_NAME, user: DB_USER, password: DB_PASS })
console.info('connecting to database', DB_NAME)

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

let cached: DBConfig = null

const connectDb = async (req: NextApiRequest, res: NextApiResponse, next: NextApiHandler) => {
  if (cached) {
    return next(req, res)
  }
  try {
    const dbConnection = await mongoose.connect(url, options)
    const client = dbConnection.connection.getClient()
    const db = client.db(DB_NAME)
    cached = { client, db }
  } catch (error) {
    console.error(error)
  }

  return next(req, res)
}

const mongoMiddleware = nextConnect()

mongoMiddleware.use(connectDb)

export default mongoMiddleware
