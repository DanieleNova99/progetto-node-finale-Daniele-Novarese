const fs = require('fs');
const path = require('path');

function writeDown(object){
    fs.writeFile('C:/Users/DanieleNovarese/Desktop/PROGETTO NODE/result/result.txt',`${object.nome} \n ${object.data} \n ${object.luogo} \n ${object.codice}`,function(err){
        if(err) return console.log(err);
    });
    console.log("saved file");
}

module.exports = writeDown;