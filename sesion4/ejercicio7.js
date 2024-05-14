function dividir(a, b, callback) {
    if (b === 0) {
        callback('Error: el divisor es cero')
    } else {
        const resultado = a / b;
        callback(null, resultado)
    }
}

dividir(10, 0, (error, resultado) => {
    if (error) {
        console.error(error);
    } else {
        console.log(`El resultado es ${resultado}`);
    }
})