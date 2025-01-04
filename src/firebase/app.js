//app.js
const express = require('express');
const cors = require('cors');
require('firebase/firestore');

// las rutas que estoy usando
const routes = require('./endPoints');
const app = express();

app.use(express.json());
app.use(cors());

app.set('port', process.env.PORT || 5000);

//app.use(require('./routes/index'));

app.use('/', routes)

console.log('Hello World!!!!!!');

app.get('/', (req, res) => {
    res.send('Hello World!!!');
})

module.exports = app;