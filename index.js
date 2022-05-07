const express = require('express');
const session = require('express-session');
const path = require('path');
const middlewareGlobal = require('./middlewares/middlewareGlobal');

const FilmesRouter = require('./routers/FilmesRouter');
const AdmRouter = require('./routers/AdmRouter');

const servidor = express();

servidor.set('view engine','ejs');

servidor.use(express.static(path.join(__dirname, 'public')));

servidor.use(session({secret:"SEGREDO", saveUninitialized: false, resave: true}));

servidor.use(express.urlencoded({ extended: false }));

servidor.use(middlewareGlobal)

servidor.use('/', FilmesRouter);
servidor.use('/', AdmRouter);

servidor.listen(3000);