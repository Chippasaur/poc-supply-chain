import mongoose from 'mongoose'

const { Schema } = mongoose

export function UserPo() {
  const userSchema = new Schema({
    name: String,
    phone: String,
  })

  let userPo

  try {
    userPo = mongoose.model('User', userSchema)
  } catch (error) {
    userPo = mongoose.model('User')
  }
  return userPo
}
