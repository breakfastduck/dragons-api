const mongoose = require('mongoose');
const Note = require('./notes-model')

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    race: {
        type: String,
        required: true,
        trim: true
    },
    class: {
        type: String,
        required: true,
        trim: true
    },
    level: {
        type: Number,
        required: true,
        default: 1
    },
    background: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Character = mongoose.model('Character', characterSchema)

module.exports = Character