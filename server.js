/*jshint esversion: 6 */
//Server Frontend
const express = require('express');
const path = require('path');

const expressFront = express();

expressFront.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

expressFront.use(express.static(__dirname + '/dist/abakoadv'));

expressFront.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/abakoadv/index.html'))
});

expressFront.listen(process.env.PORT || 8080);