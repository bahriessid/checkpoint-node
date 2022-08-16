const fs = require('fs')
const read =fs.readFileSync(process.argv[2])
console.log(read.toString().split('\n').length-1)