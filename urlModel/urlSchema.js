import mongoose from 'mongoose'

const urlSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: {
        type: String,
        required: [true, 'longUrl is required'],
    }, 
    shortUrl: String,
    date: {type: String, default: Date.now()}
})

module.exports = mongoose.models.Url || mongoose.model('Url', urlSchema)