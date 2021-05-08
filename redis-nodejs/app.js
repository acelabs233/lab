const express = require('express');
const redis = require('redis');
const axios = require('axios');
const reponseTime = require('response-time');
const {promisify} = require('util');
require('dotenv').config();

var app = express();

var port = process.env.PORT || 1234;

var client = redis.createClient({
    host:'localhost',
    port:6379
});

const GET_ASYNC = promisify(client.get).bind(client);
const SET_ASYNC = promisify(client.set).bind(client);




app.use(reponseTime());

app.get('/rockets', async (req, res, next)=>{
    try
    {
        const key = 'rockets';

        const saved = await GET_ASYNC(key);
        if(saved){
            res.send(JSON.parse(saved));
            return;
        }
            const response = await axios.get('https://api.spacexdata.com/v3/rockets');
            const saveResult = await SET_ASYNC(key, JSON.stringify(response.data), 'EX', 5);
            
            console.log('new DATA has been saved', saveResult);

            res.send(response.data);
    }
    catch(e)
    {
        res.send(e.message);
    }

});


app.listen(port, ()=>console.log("listing on:",port));