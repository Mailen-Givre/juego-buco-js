function borrarJuego(){ //Borrar datos de pantalla y variables
    cantidadDeIntentos = 0
    arrayNumerosPc = []
    $("#respuestas").html('')
    borrarErrores()
    for (let i = 0; i < cantidadNumeros; i++){ //borro los numeros del input del usuario
        document.getElementById(`adivinarNumero${i}`).value='' 
    }
    $("#intentos").html('')
    $("#tiempoJuego").html('')
}
