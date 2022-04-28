var express = require('express');
var router = express.Router();
var getter = require('../custom_modules/getGare');
var gara_class = require('../custom_modules/gara_class');
var checkValidGara = require('../custom_modules/checkValidGara');
var resultWriter = require('../custom_modules/resultWriter');



/* GET users listing. */
router.get('/', function (req, res, next) {
  getter().then(response => {
    var gare = response["result"];
    var finalResult = [];

    // crea un oggetto gara per ogni oggetto nella risposta, prendendo 
    // solo i campi necessari -> meno pesante nel file hbs
    gare.map(currentItem => {

      if (checkValidGara(currentItem)) { // -> se la gara è valida aggiungila al risultato finale
        finalResult.push(new gara_class(
          currentItem["Nome_normalizzato"],
          currentItem["Data_display"],
          currentItem["Localita"],
          currentItem["Codice"],
        ));
      }
    })
    res.render('gare', { object: finalResult });
  })
});



router.get('/:cod', function (req, res, next) {
  const { cod } = req.params;
  getter().then(response => {
    var gare = response["result"];
    var finalResult = [];

    // crea un oggetto gara per ogni oggetto nella risposta, prendendo 
    // solo i campi necessari -> meno pesante nel file hbs
    gare.map(currentItem => {

      if (checkValidGara(currentItem)) { // -> se la gara è valida aggiungila al risultato finale
        finalResult.push(new gara_class(
          currentItem["Nome_normalizzato"],
          currentItem["Data_display"],
          currentItem["Localita"],
          currentItem["Codice"],
        ));
      }
    })
    finalResult = finalResult.filter((item) => {
      return item.codice === cod;
    })
    res.render('gara', { gara: finalResult[0],function: resultWriter(finalResult[0])});
  })
})

module.exports = router;
