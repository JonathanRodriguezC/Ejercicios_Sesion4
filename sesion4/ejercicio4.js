function retrasarPromesa(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`La promesa se ha resuleto en ${ms} milisegundos`)

        }, ms)
    })
}
retrasarPromesa(200)
    .then((mensaje) => {
        console.log(mensaje);
    })