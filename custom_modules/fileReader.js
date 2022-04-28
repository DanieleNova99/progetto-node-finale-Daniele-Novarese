const fs = require('fs');
const path = require('path');

function fileReader(){
    var risultato = fs.readFileSync(path.join('result','result.txt'),'utf-8');
    return risultato.toString();
}

module.exports = fileReader;