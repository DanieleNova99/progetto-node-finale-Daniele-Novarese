const fs = require('fs');
const path = require('path');

function writeDown(object){
    fs.writeFile(path.join('result','result.txt'),`${object.nome} ${object.data} ${object.luogo}  ${object.codice}`,function(err){
        if(err) return console.log(err);
    });
    console.log("saved data on file -> result");
}

module.exports = writeDown;
// C:/Users/DanieleNovarese/Desktop/PROGETTO NODE/result/result.txt

