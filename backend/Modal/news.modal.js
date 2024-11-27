import mongoose from 'mongoose'

const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  detailedDescription: String,
  image: String,
  publisher: String
})

const News = mongoose.model('News', newsSchema)

export default News;
