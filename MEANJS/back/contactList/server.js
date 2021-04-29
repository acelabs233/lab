var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contacklist']);
var bodyParser = require('body-parser');

// //route
// app.get('/',function(req, res){
//     res.send("Hello World");

// });

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.get('/contactlist',function(req, res){
    console.log("server received a request");
    db.contacklist.find(function(err, docs){
        res.json(docs);
    })
});

app.post('/contactlist',function(req, res){
    console.log("server received post", req.body);
    db.contacklist.insert(req.body, function(err, doc){
        res.json(doc);
    });
});

app.delete('/contactlist/:id', function(req, res){
    let id = req.params.id;
    db.contacklist.remove({_id:mongojs.ObjectID(id)},function(err, doc){
        res.json(doc);
    });
});

app.get('/contactlist/:id', function(req, res){
    var id = req.params.id;
    db.contacklist.findOne({_id: mongojs.ObjectID(id)}, function(err, doc){
        res.json(doc);
    });

})

app.put('/contactlist/:id', function(req, res){
    var id = req.params.id;
    db.contacklist.findAndModify({query:{_id:mongojs.ObjectID(id)},
        update: {$set: {name:req.body.name, email:req.body.email, number:req.body.number}},new:true
    }, function(err, doc){
        if(err){
            console.log(err.message);
        }
        res.json(doc);
    });
})


var PORT = 8888;
app.listen(PORT);
console.log("server is running on ", PORT);
