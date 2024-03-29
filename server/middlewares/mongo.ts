import nextConnect from 'next-connect'
import { Db, MongoClient } from 'mongodb'
import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next'
import mongoose, { Mongoose } from 'mongoose'
import { Middleware } from '../types'

type DBConfig = { client: MongoClient; db: Db; dbConnection: Mongoose } | null

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

export const connectDb = async () => {
  try {
    const dbConnection = await mongoose.connect(url, options)
    const client = dbConnection.connection.getClient()
    const db = client.db(DB_NAME)
    cached = { client, db, dbConnection }
  } catch (error) {
    console.error(error)
  }
}

export const disconnectDb = async () => {
  if (cached) {
    await cached.dbConnection.disconnect()
  }
}

export const mongoMiddleware: Middleware = async (_, __, next) => {
  if (!cached) {
    await connectDb()
  }
  return next()
}
