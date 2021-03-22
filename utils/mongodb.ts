import mongoose from 'mongoose'
import { Db, MongoClient } from 'mongodb'
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
console.log(url)

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

let cached: DBConfig = null

const connectDb = async () => {
  if (cached) {
    return
  }
  try {
    const dbConnection = await mongoose.connect(url, options)
    const client = dbConnection.connection.getClient()
    const db = client.db(DB_NAME)
    cached = { client, db }
  } catch (error) {
    console.log(error)
  }
}

export { connectDb }
