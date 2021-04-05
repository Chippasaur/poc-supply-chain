import mongoose from 'mongoose'

const { Schema, Model } = mongoose

const AlterSchema = new Schema({
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
  lastUpdateAt: Date,
})

let Alert: typeof Model

try {
  Alert = mongoose.model('Alerts', AlterSchema)
} catch (error) {
  Alert = mongoose.model('Alerts')
}

export default Alert
