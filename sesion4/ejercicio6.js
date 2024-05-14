function paso1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Paso1 funcionando")
            resolve(5)
        }, 5000)
    })
}

function paso2(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Paso2 funcionando")
            resolve(num * 5)
        }, 5000)
    })
}
function paso3(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Paso3 funcionando")
            resolve(num + 5)
        }, 5000)
    })
}

paso1()
    .then(paso2)
    .then(paso3)
    .then((resultado) => {
        console.log(`EL resultado es: ${resultado}`)
    })