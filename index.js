const fs = require('fs');

//  This is asyncronous
fs.readFile('./sample.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
})

console.log("This is First");