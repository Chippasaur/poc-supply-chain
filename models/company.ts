import mongoose from 'mongoose'

const { Schema, Model } = mongoose

const companySchema = new Schema({
  name: String,
  logo_url: String,
  counterparties_num: Number,
  subsidiaries_num: Number,
  facilities_num: Number,
})

let Company: typeof Model

try {
  Company = mongoose.model('Company')
} catch (error) {
  Company = mongoose.model('Company', companySchema)
}

export default Company
