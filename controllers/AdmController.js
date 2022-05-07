module.exports = {
    
    mostraLogin: (req,res)=>{
        res.render('login.ejs',{erro:0})
    },

    login: (req, res) => {

        const usuarios = require("../database/usuarios.json");

        let emailDigitado = req.body.email;
        let senhaDigitada = req.body.senha;

        let usuario = usuarios.find(
            u => {
                if(emailDigitado == u.email && senhaDigitada == u.senha){
                    return true;
                } else {
                    return false;
                }
            }
        );


        if(usuario == undefined) {
            res.render('login.ejs', {erro:1});
        } else {

            req.session.usuario = usuario;

            res.redirect('/admin');
        }

    },

    mostraEsqueci: (req, res) => {
        res.render('esqueci.ejs');
    },

    lembrarSenha: (req,res) => {
        res.send(req.body);
    },

    mostraAdmin: (req, res) => {
        res.render('admin.ejs');
    }


    
}