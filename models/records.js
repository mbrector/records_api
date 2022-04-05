const mongoose = require('mongoose')

const recordSchema = new mongoose.Schema({
        artist: { type: String, required: true },
        albumTitle: { type: String, required: true },
        coverArt: { type: String, required: true },
        year: { type: Number, required: true },
        genre: { type: String, required: true }
})

const Records = mongoose.model('Record', recordSchema)

module.exports = Records