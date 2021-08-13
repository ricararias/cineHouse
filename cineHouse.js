var cinema = "cineHouse"
//console.log(cinema)

let filmes = require("./database/catalogo.json");

console.log(filmes)

let procurarFilme = BuscarFilme(12345)
//console.log(procurarFilme)

let procuraFilme = AdicionarFilme(9999,'Titanic','150 minutos','Leonardo Dicaprio, Kate Winslet','2005',false);


function AdicionarFilme(novoCodigo, novoTitulo, novoDuracao, novoAtores, novoAnoDeLancamento, novoEmCartaz){
    let novoFilme = {
        codigo: novoCodigo,
        titulo: novoTitulo,
        duracao: novoDuracao,
        atores: novoAtores,
        anoDeLancamento: novoAnoDeLancamento,
        emCartaz: novoEmCartaz,
    }
    filmes.push(novoFilme);
}

function BuscarFilme(codigoFilme){
    let filmeBuscado = filmes.find(function(filme){
        return filme.codigo == codigoFilme
    });
    return filmeBuscado
}


function listarFilmesEmCartaz(){
    for(let i=0; i < filmes.length; i++){
        if filme.emCartaz = true{

        }

    }
}
