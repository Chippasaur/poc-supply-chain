import mongoose from 'mongoose'

const { Schema, Model } = mongoose

const userSchema = new Schema({
  name: String,
  phone: String,
})

let User: typeof Model
try {
  User = mongoose.model('User')
} catch (error) {
  User = mongoose.model('User', userSchema)
}

export default User
