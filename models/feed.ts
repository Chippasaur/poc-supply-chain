import mongoose from 'mongoose'

const { Schema } = mongoose

const FeedSchema = new Schema({
  companyId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  lastUpdatedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
})

const model = mongoose.model('Feed', FeedSchema)

export default model
