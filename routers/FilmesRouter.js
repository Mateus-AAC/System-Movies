const express = require("express");

const middlewareGuardaBusca = require("../middlewares/middlewareGuardaBusca");

const router = express.Router();

const FilmesController = require('../controllers/FilmesController');

router.get('/', FilmesController.index);
router.get('/filmes/:id', FilmesController.buscaPorId);
router.get('/busca', middlewareGuardaBusca, FilmesController.buscaPorTrecho);
router.get('/buscaporid/:id',FilmesController.buscaPorId);
router.get('/generos/:genero',FilmesController.buscaPorGenero);

module.exports = router;