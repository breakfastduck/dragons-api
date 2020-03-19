const mongoose = require('mongoose');

const weaponSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    type: {
        type: String,
        trim: true,
        required: true
    },
    cost: {
        type: Number,
        required: true,
        default: 0
    },
    properties: {
        type: String,
        required: true,
        default: 'Simple'
    },
    atkMod: {
        type: Number,
        default: 0
    },
    dmgMod: {
        type: Number,
        default: 0
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    assignedChar: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Character'
    }
})

const Weapon = mongoose.model('Weapon', weaponSchema)

module.exports = Weapon