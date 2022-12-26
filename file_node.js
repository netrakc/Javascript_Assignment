const fs = require("fs");
fs.readFile("hello.txt", 'utf-8', (err, data) => {
    if(err){
        console.log(err.name);
    }else{
        console.log(data);
    }
})

