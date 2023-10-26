//alert


function generarNumeroAleatorio(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}
const numeroMin = 1;
const numeroMax = 30;
const intentosPermitidos = 5;

function jugarAdivinanza(numeroMin, numeroMax, intentosPermitidos) {
    let numeroRandom = generarNumeroAleatorio(numeroMin, numeroMax);
    let intentos = 0;
    let nombre = prompt("¡Hola! Bienvenido a mi primer proyecto de JavaScript. Este consiste en una adivinanza. ¿Cuál es tu nombre?");
    let numero;

    while (intentos < intentosPermitidos) {
        numero = prompt("Hola " + nombre + ". Ingresa un número del " + numeroMin + " al " + numeroMax + ".");

        if (numero >= numeroMin && numero <= numeroMax) {
            if (numero < numeroRandom) {
                alert("El número que ingresaste es menor");
            } else if (numero > numeroRandom) {
                alert("El número que elegiste es mayor");
            } else if (numero == numeroRandom) {
                alert("Felicidades. Adivinaste el número en " + (intentos + 1) + " intentos. Ahora podrás acceder al video B)");
                return;
            }
        } else {
            alert("Te dije que elijas un número entre " + numeroMin + " y " + numeroMax + ". Vamos de nuevo");
        }

        intentos++;
    }

    alert("Te quedaste sin intentos :(");
}

jugarAdivinanza(numeroMin, numeroMax, intentosPermitidos);