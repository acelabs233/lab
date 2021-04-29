db.createCollection("test", {
    validator: {
        $jsonSchema: {
             bsonType: "object",
             required: ["question", "answer"],
             properties: {
                 question: {
                     bsonType:"string"
                     },
                     
                 answer: {
                     bsonType:"string"
                     }
                 }
            }
        
        }
    })



db.test.insert({"question":"what?"})
db.test.insert({"question":"what?", "answer":"oh"})


db.runCommand({
    collMod:"test",
    validator: {
        $jsonSchema: {
             bsonType: "object",
             required: ["question"],
             properties: {
                 question: {
                     bsonType:"string"
                     },
                     
                 answer: {
                     bsonType:"string"
                 }
                     
            }
                 
       }
     }
 })
 
 db.test.insert({"question":"what?"})



db


