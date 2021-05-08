var express = require('express');
const axios = require('axios');
const clientID = 'd8928e4b393cf5c40a63';
const clientSecrect = '290d716c014b04e6b183f0bfcade5341365f8170';

require('dotenv').config();
var app = express();
app.set('view engine','ejs');
var access_token = "";

app.get('/', function(req, res){
    res.render('pages/index', {client_id:clientID});
});

const port = process.env.PORT || 6666;
app.listen(port, ()=> console.log('app listening @,',port));


app.get('/github/callback', (req,res) => {
    const requestToken = req.query.code;
    axios({
        method: 'post',
        url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecrect}&code=${requestToken}`,
        headers:{
            accept:'application/json'
        }
    }).then((response) => {
        access_token = response.data.access_token;
        res.redirect('/success');
    });
});

app.get('/success', (req,res)=>{
    axios({
        method: 'get',
        url: `https://api.github.com/user`,
        headers: {
        Authorization: 'token ' + access_token
        }
    }).then((response)=>{
        res.render('pages/success', {userData: response.data});
    }).catch(err => {
        console.log(err.message);
    });
});

