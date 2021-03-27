import mongoose from 'mongoose'

const { Schema } = mongoose

const companySchema = new Schema({
  name: String,
  logo_url: String,
  counterparties_num: Number,
  subsidiaries_num: Number,
  facilities_num: Number,
})

export default mongoose.model('Company', companySchema)
