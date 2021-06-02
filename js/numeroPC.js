function generarNumeros() { //Genera x cantidad de numeros que no se repiten entre si
    numeroPC = randomNumber () //Pide por primera vez un numero random
    let posicion=0
    while (posicion < cantidadNumeros) { 
        if (validarPC(posicion)) { //valida si no se repite el numero
            arrayNumerosPc[posicion]= numeroPC //rellena el array con el numero random
            posicion += 1 //avanza a la siguiente posicion del array
            numeroPC=randomNumber() //propone un nuevo numero para la siguiente posicion
        }
    }
    respuestaPC = JSON.stringify(arrayNumerosPc).replace(/,/g, '').replace('[', '').replace(']', '')
}

function randomNumber() { //Genera 1 numero al azar
    return Math.floor(Math.random() * 10);
}

function validarPC(posicionf){ //Se fija que no se repita el numero
    if (posicionf == 0) {return true}  // Primer numero : aun no tiene para comparar con uno anterior.
    for (let i = 0; i < posicionf; i++) {
        if (arrayNumerosPc[i] == numeroPC) { //compara si el numero anterior guardado en el array es igual al nuevo numero propuesto
            numeroPC=randomNumber() // si es igual propone un nuevo numero
            return false
        }
    }
    return true // numero validado
}