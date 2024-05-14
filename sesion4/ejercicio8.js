const { error } = require("console");

function dividir(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject('Error: el divisor es cero')
        } else {
            const resultado = a / b;
            resolve(resultado)
        }
    })


}

dividir(10, 2)
    .then((resultado) => {
        console.log(`El resultado es : ${resultado}`)
    }).catch((error) => {
        console.error(error)
    })