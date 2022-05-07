const FilmesController = {
    index: (req,res)=>{

        const filmes = require("../database/filmes.json");

        res.render('index.ejs', {filmes: filmes});
    },
    listarFilmes: (req,res) => {
        const filmes = require('../database/filmes.json');

        res.send(filmes);

    },
    buscaPorPosicao: (req, res) => {

        let posicao = req.params.posicao;

        const filmes = require('../database/filmes.json');

        let filme = filmes[posicao];
        res.render('filme.ejs',{filme})

    },
    buscaPorTrecho: (req, res) => {

        let trecho = req.query.busca;

        const filmes = require("../database/filmes.json");

        let filtradora = filme => {
            return filme.titulo.includes(trecho);
        }
        let resultadoDaBusca = filmes.filter(filtradora);

        res.render('index.ejs',{filmes: resultadoDaBusca});
    },
    buscaPorId: (req, res) => {

        let id = req.params.id;

        const filmes = require("../database/filmes.json");

        let filtradora = filme => {
            if(filme.id == id){
                return true;
            } else {
                return false;
            }
        }

        const filme = filmes.find(filtradora);

        res.render('filme.ejs',{filme})

    },
    buscaPorGenero: (req, res) => {

    },
    addFilme: (req, res) => {
        res.send(req.body);
    }

}

module.exports = FilmesController;