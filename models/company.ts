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

try {
  Company = mongoose.model('Company')
} catch (error) {
  Company = mongoose.model('Company', companySchema)
}

export default Company
