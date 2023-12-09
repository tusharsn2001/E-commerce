const mongoose = require('mongoose')
const app = require('./app')
const port = 3001;
require('dotenv').config()


// database
const db = process.env.DATABASE.replace('<password>', process.env.PASSWORD);

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(con => {
    console.log('db connection successful')
}).catch(err => console.error('db connection failed', err));



app.listen(port, () => {
    console.log(`Running on port ${port}`)
})