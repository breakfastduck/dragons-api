const express = require('express');
const Note = require('../models/notes-model');
const auth = require('../middleware/auth');
const moment = require('moment');
const router = new express.Router();

router.post('/notes/new', auth, async (req, res) => {
    console.info(req.originalUrl + ' hit with method ' + req.method + ' @ ' + moment().format())

    const note = new Note({
        ...req.body,
        owner: req.user._id
    })

    try {
        await note.save()
        res.status(200).send(note)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/me/notes', auth, async (req, res) => {
    console.info(req.originalUrl + ' hit with method ' + req.method + ' @ ' + moment().format())

    try {
        const data = await Note.find({ owner: req.user._id });

        let noteArray = [];

        data.forEach(element => {
            console.log(element.noteText)
            noteArray.push({
                id: element._id,
                noteText: element.noteText,
                show: element.show,
                createdAt: element.createdAt

            })
        })

        res.status(200).send(noteArray)

    } catch (e) {
        res.status(400).send(e)

    }
})

module.exports = router