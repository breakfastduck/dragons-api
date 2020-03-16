const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://breakfastduck:halflife@cluster0-0tx7t.mongodb.net/dragons?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
},

console.log('MongoDB Connected to Atlas db :: Dragons'))

