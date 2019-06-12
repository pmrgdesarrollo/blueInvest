const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/landing1'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/landing1/index.html'))
});

app.listen(process.env.PORT || 8080);