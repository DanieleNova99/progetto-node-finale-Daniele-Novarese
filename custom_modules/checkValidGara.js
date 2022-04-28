module.exports = function checkValidGara(currentItem){
    var nome = currentItem["Nome_normalizzato"];
    var data = currentItem["Data_display"];
    var localita = currentItem["Localita"];
    var codice = currentItem["Codice"];    

    if(nome!= undefined && data != undefined && localita != undefined && codice != undefined && nome != "" && nome != null && data != "" && data != null && localita != "" && localita != null && codice != "" && codice != null){
        return true;
    }else{
        return false
    }
}