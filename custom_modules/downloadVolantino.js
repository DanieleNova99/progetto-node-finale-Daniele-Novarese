const fs = require('fs');
const path = require('path');
const fileReader = require('./fileReader.js');

function downloadVolantino(gara) {
    var contenuto = fileReader();
    // todo > correggere, non legge contenuto
    fs.writeFile(`gara_${gara.codice}.txt`, contenuto, function (err) {
        console.error(err);
    })
    console.log("File has been saved")
}

module.exports = downloadVolantino;