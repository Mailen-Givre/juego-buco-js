function crearAdivinarNumero() { //Genero los inputs para que el usuario escriba su numero
    let acumulador = ``;
    for (let i = 0; i < cantidadNumeros; i++) {
        acumulador += `<input id='adivinarNumero${i}' class='adivinarNumero' type="text" maxlength="1" name="numero"/>`; 
      }
      /* document.getElementById("contenedorAdivinarNum").innerHTML = acumulador; */ //SIN JQUERY
      $("#contenedorAdivinarNum").html(`${acumulador}`); //Lo mismo con JQUERY

}

function borrarInput(){ //Borra el valor de los inputs
    for (let i = 0; i < cantidadNumeros; i++) {
    document.getElementById(`adivinarNumero${i}`).value='';
    }
}

function siguienteInput(){ //Avanza al siguiente input cuando lleno
    for (let i = 0; i < cantidadNumeros-1 ; i++) {
        $(`#adivinarNumero${i}`).on("input", function(event){verSiAvanzo(i)});
     }
}

function verSiAvanzo (j){ //Chequea si el input esta lleno para avanzar o no
    if(document.getElementById(`adivinarNumero${j}`).length = 1){
        document.getElementById(`adivinarNumero${j+1}`).focus()
    }
}

function sobreescribirInput(){ 
    for (let i = 0; i < cantidadNumeros ; i++) {
        $(`#adivinarNumero${i}`).focus(function () {
            $(this).select();
         });
     }
}

function borrarInputAnterior(){ //con backspace borra y retrocede al input anterior
    for (let i = 1; i < cantidadNumeros ; i++) {
        let backspace = document.getElementById(`adivinarNumero${i}`);
        backspace.addEventListener("keydown", function(event) {
            if (event.keyCode === 8) { //el numero 8 es backspace
                event.preventDefault();
                if (document.getElementById(`adivinarNumero${i}`).value == ""){
                    document.getElementById(`adivinarNumero${i-1}`).focus()
                    $(`#adivinarNumero${i-1}`).val("");
                }  else {
                    $(`#adivinarNumero${i}`).val(""); //Si el campo del imput esta lleno solo borro sin retroceder
                }
            }
         });
     }
}

function enterAdivinar() { // si estas en el ultimo input el enter = click Adivinar
    let enter = document.getElementById(`adivinarNumero${cantidadNumeros-1}`);
    enter.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) { //el numero 13 es carriage return (enter)
        event.preventDefault(); 
        document.getElementById("adivinar").click();
      }
    });
}

function borrarErrores(){ //Borra los bordes rojos y los textos
    if (errorVacio != ""){
        document.getElementById("errores").removeChild(errorVacio);
        errorVacio = ""
    }
    if (errorRepetido != ""){
        document.getElementById("errores").removeChild(errorRepetido);
        errorRepetido = ""
    }
    if (errorNoNumero != ""){
        document.getElementById("errores").removeChild(errorNoNumero);
        errorNoNumero = ""
    }
    for (let i = 0; i < cantidadNumeros; i++){
    document.getElementById(`adivinarNumero${i}`).style.border = "none";
    }
}