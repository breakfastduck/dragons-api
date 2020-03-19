const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    noteText: {
        type: String,
        required: true,
        trim: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    show: {
        type: Boolean,
        required: true,
        default: true
    },
    assignedChar: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Character'
    }
}, {
    timestamps: true
}) 

const Note = mongoose.model('Note', notesSchema)

module.exports = Note