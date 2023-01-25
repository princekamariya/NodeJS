const fs = require('fs');

//  This is syncronous
const a = fs.readFileSync('./sample.txt','utf-8')
console.log(a);
console.log("This is First");