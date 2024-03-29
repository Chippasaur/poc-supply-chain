import mongoose from 'mongoose'

const { Schema, Model } = mongoose

const AlertSchema = new Schema({
  supplierName: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  lastUpdatedAt: Date,
})

export default mongoose.models.alert || mongoose.model('Alert', AlertSchema)
