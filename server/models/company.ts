import mongoose from 'mongoose'

const { Schema, Model } = mongoose

const companySchema = new Schema({
  name: String,
  logoUrl: String,
  counterpartiesNum: Number,
  subsidiariesNum: Number,
  facilitiesNum: Number,
})

let Company: typeof Model

export default mongoose.models.Company || mongoose.model('Company', companySchema)
