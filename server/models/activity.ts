import mongoose from 'mongoose'

const { Schema } = mongoose

const ActivitySchema = new Schema({
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

const model = mongoose.models.Activity || mongoose.model('Activity', ActivitySchema)

export default model
