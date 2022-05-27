const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Fatima:12345@cluster0.gzagy.mongodb.net/?retryWrites=true&w=majority')
        .then( () => {
            console.log('DB is connected')
        })
        .catch( err => {
            console.log(err)
        })
