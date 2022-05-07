const filmes = require('../database/filmes.json');
const uniqid = require('uniqid');
const fs = require('fs');

const services = {
    listar: function(){
        return filmes;
    },
    getTitulos: function(){
        let titulos = [];
        for(let f of filmes){
            titulos.push(f.titulo);
        }
        return titulos;
    }
    ,
    create: function(
                cartaz,
                titulo,
                censura,
                trailer,
                sinopse,
                generos){

        let id = uniqid();

        let novoFilme = {
            id, cartaz, titulo, generos, censura, trailer, sinopse
        }
        console.log(novoFilme);

        filmes.push(novoFilme);

        fs.writeFileSync(
            __dirname+'/../database/filmes.json',
            JSON.stringify(filmes,null,4)
        )

    },
    apagar: function(){},
    editar: function(){}
};

module.exports = services;