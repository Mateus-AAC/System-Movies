const fs = require('fs');

module.exports = (req, res, next) => {


    let trechoBuscado = req.query.busca + "\n";

    fs.writeFileSync("./trechosBuscados.txt", trechoBuscado,{flag:'a+'});

    next()
}