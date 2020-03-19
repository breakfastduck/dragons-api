const express = require('express')
const Character = require('../models/character-model')
const auth = require('../middleware/auth');
const moment = require('moment');
const router = new express.Router();

router.post('/character/new', auth, async (req, res) => {
    console.info(req.originalUrl + ' hit with method ' + req.method + ' @ ' + moment().format())

    const character = new Character({
        ...req.body,
        owner: req.user._id
    })

    try {
        await character.save()
        res.status(200).send(character)
    } catch (e) {
        res.status(400).send(e)
    }
 
})

router.get('/me/characters', auth, async (req, res) => {
    console.info(req.originalUrl + ' hit with method ' + req.method + ' @ ' + moment().format())

    try {
        const data = await Character.find({ owner: req.user._id });
        res.status(200).send(data)

    } catch (e) {
        res.status(400).send(e)
    }

})

module.exports = router