const mongoose = require('mongoose');
const chalk = require("chalk");

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/mongoose', { useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>console.log("connected to mongoDB"))
.catch(err => console.log("error:", err.message));


const gameSchema = new mongoose.Schema({
    title: {type: String,
        minlength: 4,
        maxlength: 200},
    publisher: String,
    tags:[String],
    date: {type: Date, default: Date.now},
    onSale: Boolean,
    price: {
        type:Number,
        required: function(){
            return this.onSale
        }
    }
})


const Game = mongoose.model('Game', gameSchema);

async function saveGame(){
    const game = new Game({
        title: "3ds",
        publisher: "Nontendo",
        tags:["action", "fps"],
        onSale: false
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