/** @format */

import mongoose from 'mongoose'
import { Db, MongoClient } from 'mongodb'

type DBConfig = { client: MongoClient; db: Db } | null

const { MONGODB_URI, MONGODB_DB } = process.env

const url = `${MONGODB_URI}/${MONGODB_DB}`

const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

let cached: DBConfig = null

const connectDb = async () => {
  if (cached) {
    return
  }
  try {
    const dbConnection = await mongoose.connect(url, opts)
    const client = dbConnection.connection.getClient()
    const db = client.db(MONGODB_DB)
    cached = { client, db }
  } catch (error) {
    console.log(error)
  }
}

export { connectDb }
