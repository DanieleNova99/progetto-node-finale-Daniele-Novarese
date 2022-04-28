const fs = require('fs');
const path = require('path');

function writeDown(){
    fs.writeFile(path.relative(__dirname,'../result/result.txt'),"Hello world",function(err){
        if(err) return console.log(err);
    });
    console.log("saved file");
}

module.exports = writeDown;