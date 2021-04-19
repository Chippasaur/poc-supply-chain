import mongoose from 'mongoose'

const newsSchema = new mongoose.Schema({
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

const model = mongoose.models.News || mongoose.model('News', newsSchema)

export default model
