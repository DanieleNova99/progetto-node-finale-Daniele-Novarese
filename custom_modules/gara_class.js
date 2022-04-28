module.exports = class gara_class{
    constructor(nome,data,luogo,codice){
        this.nome = nome.replace(/-/g, " ");
        this.data = data;
        this.luogo = luogo;
        this.codice = codice;
    }
}

