const express = require('express');
const Weapon = require('../models/weapon-model');
const auth = require('../middleware/auth');
const moment = require('moment');
const router = new express.Router();

router.post('/me/weapons', auth, async (req, res) => {
    console.info(req.originalUrl + ' hit with method ' + req.method + ' @ ' + moment().format())

    const weapon = new Weapon({
        ...
        req.body,
        owner: req.user._id
    })

    try {
        await weapon.save()
        res.status(200).send(weapon)

    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/me/weapons', auth, async (req, res) => {
    console.info(req.originalUrl + ' hit with method ' + req.method + ' @ ' + moment().format())

    try {
        const data = await Weapon.find({ owner: req.user._id });
        res.status(200).send(data)

    } catch (e) {
        res.status(400).send(e)
    }
})


module.exports = router;