
require('dotenv').config();
var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');




app.use(express.json());



function autheticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null){
        return res.sendStatus(401);
    }
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user)=>{
        if(err)  return res.sendStatus(403);
        req.user = user;
        next()
    });
    
} 


var refreshTokens = [];

app.post('/token', (req, res) => {
    const refreshToken = req.body.token;
    if(refreshToken == null){
        res.sendStatus(401);
    }
    if(!refreshTokens.includes(refreshToken)){
        res.sendStatus(403);
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, user)=>{
        if(err) return res.sendStatus(403);

        const accessToken = generateAccessToken({name: user.name});
        res.json({accessToken: accessToken});
    });
});


app.post('/login',(req, res)=>{
    //authenticate the user
    const username = req.body.username;
    const user = {name: username};
    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN);
    refreshTokens.push(refreshToken);
    res.json({accessToken: accessToken, refreshToken: refreshToken});

});


function generateAccessToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN, {expiresIn:'25s'});
}


app.listen(9999);
console.log("listen on ",9999);