const { rejects } = require("assert");
const { copyFileSync } = require("fs");
const { resolve } = require("path");

function multiplicarPromise(a, b) {
    return new Promise((resolve, reject) => {
        const resultado = a * b;
        if (isNaN(resultado)) {
            reject('Error no hay argumentos')
        } else {
            resolve(resultado)
        }

    }
    )
}
multiplicarPromise(2, 3)
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((error) => {
        console.error(error)
    }

    )