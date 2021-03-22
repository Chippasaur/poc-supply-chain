import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
  name: String,
  phone: String,
})

export default mongoose.model('User', userSchema)
