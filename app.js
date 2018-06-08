/**
 * Created by Michael M. Simon on 6/7/2018.
 */

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const dbConfig = require('./config/database');

const port = 8080;

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.uri, (err) => {
    if(err){
        console.log('--DB CONNECTION ERROR--' + err.message);
    }
    else {
        console.log('--DB CONNECTED-- ' + dbConfig.secret);
    }
});

app.use('/', (req, res)=> {
    if(req.method === 'GET' || req.url === '/'){
        res.sendFile(path.join(__dirname + '/dist/index.html'));
    }
});

app.listen(port, ()=> {
    console.log('Server running at ' + port);
});
