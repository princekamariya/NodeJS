const fs = require('fs');
const a = "Hello Node"
//  This is asyncronous
fs.writeFile('./sample.txt',a,()=>{
    console.log("Written");
})

console.log("This is First");