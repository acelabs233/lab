const bcrypt = require('bcrypt');


(
    async function main(){
        const saltRounds = 10;
        const origin = "da@gmail.com";
        const pass = "123";

        const salt = await bcrypt.genSalt(saltRounds);

        const hashed = await bcrypt.hash(origin,salt);

        const res = await bcrypt.compare(origin, hashed)

        console.log(hashed, res);

    }
)();