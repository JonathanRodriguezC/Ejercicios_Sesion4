const { isModuleNamespaceObject } = require("util/types")

function operacionAsincrona(callback) {
    setTimeout(() => {

        callback('Operacion asincrona completada')
    }, 2000)
}

operacionAsincrona((mesaje) => {
    console.log(mesaje);
})