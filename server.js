const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
var cors = require('cors');
app.use(cors());

app.listen(8080, function () {
    console.log('listening on port 8080')
});

app.use(express.static(path.join(__dirname, 'react-app/build')));

app.get('/', function (req, res) {
    req.sendFile(path.join(__dirname, '/react-app/build/index.html'));
});




app.get('*', function (req, res) {
    req.sendFile(path.join(__dirname, '/react-app/build/index.html'));
});