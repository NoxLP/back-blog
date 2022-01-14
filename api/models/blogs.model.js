const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  text: {
    type: String,
    required: [true, 'Text is required'],
  },
  date: {
    type: Date,
    required: [true, 'Date is required'],
  },
})

const blogModel = mongoose.model('blog', blogSchema)
module.exports = blogModel
