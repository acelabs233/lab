const MarioChar = require('../module/marioChar');
const assert = require('assert');

//test suite
describe("Saving Records", function(){
    it('Saves a new record to the database', function(){
        var char = new MarioChar({
            name:"Marion"
        });
        char.save().then(function(){
            assert(!char.isNew);
            done();
        });
    });
});