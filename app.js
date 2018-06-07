/**
 * Created by Michael M. Simon on 6/7/2018.
 */

const express = require('express');
const app = express();
const path = require('path');


const port = 8080;

app.use('/', (req, res)=> {
    if(req.method === 'GET' || req.url === '/'){
        //set the url users get when requesting the page
        //Connect the server to the dist file that will be created by ng build inside client
        res.sendFile(path.join(__dirname + '/dist/index.html'));
    }
});

app.listen(port, ()=> {
    console.log('Server running at ' + port);
});
