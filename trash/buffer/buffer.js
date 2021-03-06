// const fs = require("fs");

// //old
// fs.readFile("data1.txt", (err, data1) => {
//   fs.readFile("data2.txt", (err, data2) => {
//     fs.readFile("data3.txt", (err, data3) => {

//       console.log(data1.toString());
//       console.log(data2.toString());
//       console.log(data3.toString());

//     });
//   });
// });

// new Promise((resolve, reject) => {
//     fs.readFile("data1.txt", (err, data) => {
//       if (err) reject(err);
//       else resolve(data);
//     });
//   })
//     .then((result) => {
//       console.log(result.toString());
//     })
//     .catch((err) => {
//       console.log(err);
//     });
  
const fs = require("fs");
const util = require("util");
var read = util.promisify(fs.readFile);


Promise
    .all([
        read('data1.txt'),
        read('data2.txt'),
        read('data3.txt')
    ])
    .then( data => {
        const [data1, data2, data3] = data
        console.log(data1.toString())
        console.log("=====================================================")
        console.log(data2.toString())
        console.log("=====================================================")
        console.log(data3.toString())
    })