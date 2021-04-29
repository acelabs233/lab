const mongoose = require('mongoose');
const chalk = require("chalk");

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/mongoose', { useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>console.log("connected to mongoDB"))
.catch(err => console.log("error:", err.message));


const gameSchema = new mongoose.Schema({
    title: {type: String, required:true},
    publisher: String,
    tags:[String],
    date: {type: Date, default: Date.now},
    onSale: Boolean,
    price: Number
})


const Game = mongoose.model('Game', gameSchema);

async function saveGame(){
    const game = new Game({
        publisher: "Nontendo",
        tags:["action", "fps"],
        onSale: false,
        price: 100
    })

    // const result = await game.save()
    // .catch(err => console.log(err.message));
    // console.log(result);

    try {
        const result = await game.save();
        console.log(result);
    } catch (err) {
        console.log(err.message)
    }


}

saveGame();