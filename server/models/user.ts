import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
  name: String,
  email: String,
  companyName: String,
})

export default mongoose.models.User || mongoose.model('User', userSchema)
