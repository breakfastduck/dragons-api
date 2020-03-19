require('./src/db/mongodb/mongoose');

const express = require('express');
const userRouter = require('./src/db/mongodb/routers/user-router');
const noteRouter = require('./src/db/mongodb/routers/note-router');
const weaponRouter = require('./src/db/mongodb/routers/weapon-router');
const characterRouter = require('./src/db/mongodb/routers/character-router');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 9876;

app.use(express.json());
app.use(cors())
app.use(userRouter);
app.use(noteRouter);
app.use(weaponRouter);
app.use(characterRouter);

app.listen(port, () => {
    console.log('Dragons API Server running on port ' + port);
    console.log('Awaiting requests...');
})