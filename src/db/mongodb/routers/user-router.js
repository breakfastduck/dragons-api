const express = require('express');
const User = require('../models/user-model');
const auth = require('../middleware/auth');
const moment = require('moment');
const router = new express.Router();


// CREATE USER AND LOGIN

router.post('/users', async (req, res) => {
    console.info(req.originalUrl + ' hit with method ' + req.method + ' @ ' + moment().format())

    const user = new User(req.body)


    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/login', async (req, res) => {
    console.info(req.originalUrl + ' hit with method ' + req.method + ' @ ' + moment().format())

    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send({
            error: "Unable to authenticate"
        })
    }
})

// GET USER DETAILS

router.get('/users/me', auth, async (req, res) => {
    console.info(req.originalUrl + ' hit with method ' + req.method + ' @ ' + moment().format())

    res.send(req.user)
})

module.exports = router