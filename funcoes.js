const cachorros = require('./database/cachorros.json');
const fs = require('fs')

module.exports = {
    listar: function () {
        console.table(cachorros)
    },
    descrever: function (pos) {
        if (pos >= cachorros.length || pos < 0) {
            console.error("Cachorro inexistente")
            return;
        }

        let c = cachorros[pos]
        console.log(`Nome ${c.nome}`)
        console.log(`sexo ${c.sexo}`)
        console.log(`peso ${c.peso}`)
        console.log(`data de nascimento ${c.dataDeNascimento}`)
        console.log("vacinas: ")
        console.table(c.vacinas)
        console.log("serviços: ")
        console.table(c.servicos)

        if (c.castrado) {
            console.log("castrado: sim")
        } else {
            console.log("castrado: não")
        }
    },

    adicionar: function ($nome, $sexo, $castrado, $dataDeNascimento, $peso) {
        let dog = {
            nome: $nome,
            sexo: $sexo,
            dataDeNascimento: $dataDeNascimento,
            peso: $peso,
            castrado: $castrado,
            vacinas: [],
            servicos: []
        }
        cachorros.push(dog)
        fs.writeFileSync('./database/cachorros.json', JSON.stringify(cachorros))
    }
}



















    // //     },
    // //         vacinar: function(pos, vacina){
    // //             let cachorro = {
    // //                 nomeDaVacina: vacina
    // }
    // }

    // // 
