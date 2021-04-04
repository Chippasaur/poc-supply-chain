import mongoose from 'mongoose'

const newSchema = new mongoose.Schema({
  companyId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    requred: true,
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

const model = mongoose.model('News', newSchema)

export default model
