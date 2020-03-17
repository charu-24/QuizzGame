const mongoose = require('mongoose')

mongoose.connect(
    'mongodb+srv://Charu:charuji24@cluster0-dlmz6.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser : true, useUnifiedTopology: true},
    console.log("Database Connected")
    )