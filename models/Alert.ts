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
  level: {
    type: String,
    enum: ['LOW', 'MEDIUM', 'HIGH'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  lastUpdatedAt: Date,
})

export default mongoose.models.Alert || mongoose.model('Alert', AlertSchema)
