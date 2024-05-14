function tarea1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Tarea 1 completada')
        }, 1500)
    })
}
function tarea2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Tarea 2 completada')
        }, 3000)
    })
}
function tarea3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Tarea 3 completada')
        }, 2000)
    })
}
Promise.all([tarea1(), tarea2(), tarea3()])
    .then((resultado) => {
        console.log("Las tareas han terminado")
        resultado.forEach((resultado) => {
            console.log(resultado)
        })
        console.log('Accion final ejecutada')
    })
    .catch((error) => {
        console.error(`Error: ${error}`)
    })