
require('dotenv').config();
var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');




const posts = [
    {
        username: "John",
        title: "post 1"
    },
    {
        username: "John1",
        title: "post 2"
    },
    {
        username: "John2",
        title: "post 3"
    }
];


app.use(express.json());


app.get('/posts',autheticateToken,function(req,res){
    res.json(posts.filter(post => post.username == req.user.name));
});

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

app.post('/login',(req, res)=>{
    //authenticate the user
    const username = req.body.username;
    const user = {name: username};
    const access = jwt.sign(user, process.env.ACCESS_TOKEN);
    res.json({accessToken: access});

});

app.listen(9999);
console.log("listen on ",9999);