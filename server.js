const express = require('express');
const app = express()
const mongoose = require('mongoose');
const path = require('path')
const bodyParser = require('body-parser')

const routes = require('./routes')
app.use(bodyParser.json())
app.use(express.json())
app.use(routes)

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/palletSound";
mongoose.connect(MONGODB_URI)
    .then(() => console.log('Mongo Db connected'))
    .catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


var PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server connected to port ${PORT}`);
})