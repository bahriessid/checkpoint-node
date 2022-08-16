const fs = require('fs')
fs.readdir(process.argv[2],(err,data)=>{
    if (err) {
        return console.error(err);
     }
    data.filter(el=>el.endsWith('.'+process.argv[3])).map(el=>console.log(el))
})