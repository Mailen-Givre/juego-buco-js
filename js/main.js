/* Juego de los números - Bulls and Cows - Buco - By Mailen Givré*/
instrucciones()

getUsuarios()
getNivel() //trae el nivel del local storage

/* Pedirle numeros al usuario */
crearAdivinarNumero() //Crear inputs para que el usuario escriba sus numeros
siguienteInput() //Pasa al siguiente input al estar lleno
borrarInputAnterior() //Backspace borra input o va al anterior
sobreescribirInput()
enterAdivinar() //Enter = boton adivinar
$("#adivinar").click(adivinar); //Cuando se hace click en el boton adivinar // EVENTO CON JQUERY 
$("#reiniciar").click(resetear); //Se resetea al hacer click en reiniciar
$("#rendirse").click(rendirse)

resetear()


/* FUNCIONES */

/* Arranca de 0 */
function resetear(){
    borrarJuego ()
    generarNumeros()
    iniciarIntervalo()
    console.log ('Numero a adivinar ' + arrayNumerosPc)
    document.getElementById(`adivinarNumero0`).focus()
}

/* Usuario escribe numero */
function adivinar(){ //Cuando hace click en el boton adivinar
    document.getElementById(`adivinarNumero0`).focus()
    borrarErrores()
    if (validarNumeroUsuario()){
          crearArrayNumUsuario()
          comparar()
          borrarInput()
      }  
}

function validarNumeroUsuario(){ //Chequeo si completo correctamente los inputs
    let esValido = true
    for (let i = 0; i < cantidadNumeros; i++){
      let numUsuario=document.getElementById(`adivinarNumero${i}`).value
      if (numUsuario == ''|| numUsuario==' '){ //Si algun casillero esta vacio o tiene un espacio
          esValido = false
          document.getElementById(`adivinarNumero${i}`).style.border = "5px solid red";
          if (errorVacio ==""){
          errorVacio = document.createElement("p")
          errorVacio.innerText = arrayTextoErrores[0]; 
          document.getElementById("errores").appendChild(errorVacio)
          }

      } else if (isNaN (numUsuario)){ //Si alguno de los caracteres no es numerico salta error
          esValido = false
          document.getElementById(`adivinarNumero${i}`).style.border = "5px solid red";
          if (errorNoNumero == ""){            
          errorNoNumero = document.createElement("p")
          errorNoNumero.innerText = arrayTextoErrores[1]; 
          document.getElementById("errores").appendChild(errorNoNumero)
          }
      }
    }
    if (esValido){
      if (validarSiRepetido() == false){ //Si alguno de los numeros se repite
          esValido = false
          errorRepetido = document.createElement("p")
          errorRepetido.innerText = arrayTextoErrores[2];  
          document.getElementById("errores").appendChild(errorRepetido)
        }
    }
    if (esValido){
        return true
    } else {
        return false}
}

function validarSiRepetido (){ //Chequea si alguno de los numeros se repite 
    let noSeRepite = true
    for (let i=0; i < cantidadNumeros-1; i++){
        if (noSeRepite == false){
            return false
        } for (let j=i+1; j < cantidadNumeros; j++){
            if (document.getElementById(`adivinarNumero${i}`).value==document.getElementById(`adivinarNumero${j}`).value){
            noSeRepite = false;
            document.getElementById(`adivinarNumero${i}`).style.border = "5px solid red";
            document.getElementById(`adivinarNumero${j}`).style.border = "5px solid red";
            return false
            }
        }
    }
}

function crearArrayNumUsuario(){ //Array que guarda el numero dado por el usuario
    arrayNumerosUsuario = []
  for (let i = 0; i < cantidadNumeros; i++){
      arrayNumerosUsuario.push(parseInt(document.getElementById(`adivinarNumero${i}`).value))
  }
}

function rendirse(){    //muestra y oculta el modal rendirse
    $("#rtaRendirse").html(`Número: ${respuestaPC}`);
    $("#modalRendirse").show(); 
    $(".close").click(function(){ //cierra el modal en la X pero no resetea el juego
        $("#modalRendirse").hide();
    })
    $("#salirRendirse").click(function(){
        $("#modalRendirse").hide();
    })
    $("#jugarNuevamente").click(resetear)
    $("#jugarNuevamente").click(function(){
        $("#modalRendirse").hide();
    })
}

/* Respuestas */
function comparar(){ //Compara el numero del usuario con el de la PC
    buenas=0
    regulares=0
    for (let i=0; i < cantidadNumeros; i++){
        for (let j=0; j < cantidadNumeros; j++){
            if (arrayNumerosUsuario[i]==arrayNumerosPc[j]){
                if(i==j){
                    buenas += 1
                } else {
                    regulares += 1
                } 
            }
        }
    }
    cantidadDeIntentos += 1
    crearFilaAdivinada() // Muestra las respuestas
    if (buenas == cantidadNumeros) {
        ganaste()
    } 
}

function crearFilaAdivinada() { // Muestra las respuestas
    document.getElementById("respuestas").innerHTML += `<div id='filaAdivinada${cantidadDeIntentos}' class="flex filaAdivinada"></div>`; //genera div
    let acumulador = ``;
    for (let i = 0; i < cantidadNumeros; i++) { //muestra los mismos numeros que pregunto
        let valor = document.getElementById(`adivinarNumero${i}`).value
        acumulador += `<p id='numeroAdivinado${cantidadDeIntentos}${i}' class='numeroAdivinado flexColumn'>${valor}<p/>`;
      }
    acumulador += `<p id='numberAnswer${cantidadDeIntentos}' class='numberAnswer'><span title='Cantidad de números que están en la posición correcta'>${buenas}</span> - <span title='Cantidad de números que están en la posición incorrecta'>${regulares}</span><p/>` //muestra la respuesta
      document.getElementById(`filaAdivinada${cantidadDeIntentos}`).innerHTML = acumulador;
      for (let i = 0; i < cantidadNumeros; i++) {
        document.getElementById(`numeroAdivinado${cantidadDeIntentos}${i}`).style.backgroundImage = "linear-gradient(to bottom, #d798ff, #9f77fe)"; //cambia el color de los ultimos numeros preguntados
        if (cantidadDeIntentos!=1){
            document.getElementById(`numeroAdivinado${cantidadDeIntentos-1}${i}`).style.backgroundImage = "linear-gradient(to top, #4b99fd, #4185f7)"; //cambia el color de los numeros preguntados anteriormente
          }
    }
      document.getElementById(`numberAnswer${cantidadDeIntentos}`).style.backgroundImage = "linear-gradient(to bottom, #d798ff, #9f77fe)"; //cambia el color de las ultimas rtas
      if (cantidadDeIntentos!=1){
        document.getElementById(`numberAnswer${cantidadDeIntentos-1}`).style.backgroundImage = "linear-gradient(to top, #4b99fd, #4185f7)"; //cambia el color de las rtas anteriores
      }

    // $('#respuestas').animate({scrollTop:$('#respuestas').height()}, 100);
    /* $('#respuestas').animate({scrollTop: $('#respuestas').offset().top}, 1000); */
    /* document.getElementById('respuestas').scrollTop = document.getElementById('respuestas').scrollHeight */
    document.getElementById('respuestas').scrollTo({top: document.getElementById('respuestas').scrollHeight, behavior: 'smooth'}); // autoscroll de las rtas para que muestre la ultima
}

//TODO diseno
//TODO responsive
//TODO repetidos mas
//TODO limpiar comentarios

//Forma vieja en que validaba datos del input

/* function validarNumeroUsuario (){
    let noSeRepite = true
    for (let i=0; i < arrayNumerosUsuario.length-1; i++){
        if (noSeRepite == false){
            return false
        } for (let j=i+1; j < arrayNumerosUsuario.length; j++){
            if (arrayNumerosUsuario[i]==arrayNumerosUsuario[j]){
            noSeRepite = false;
            return false
            }
        }
    }
} */

/* function pedirNumero(){
    let numeroUsuario = 0 // numero que escribe el usuario
    alert ('Intentá adivinar el número. Elegí 4 números que no se repitan.')
    let numeroCorrecto = false
    while (numeroCorrecto == false){  
        numeroUsuario = prompt('Numero:'); //Pedir numero nuevamente
        let siEsNumero = true
        if (isNaN (numeroUsuario)){ //Si alguno de los caracteres no es numerico salta error
            siEsNumero = false
            alert('Tiene que ser un numero');
        }
        let siEsCantidadNumeros = true
        separador = '';
        arrayNumerosUsuario = numeroUsuario.split (separador) //Separa el numero del prompt en cant de numeros del array 

        if (arrayNumerosUsuario.length!= cantidadNumeros){ //Si el numero es mas corto o mas largo que la cant de numeros del array
            siEsCantidadNumeros = false
            alert(`Tienen que ser ${cantidadNumeros} numeros`);
        }
        let siEsRepetido = true
        if (validarNumeroUsuario() == false){ //Si alguno de los numeros se repite
            siEsRepetido = false 
            alert('Estas repitiendo un numero');
        }
        if(siEsNumero==true && siEsRepetido==true && siEsCantidadNumeros==true) 
        {numeroCorrecto= true} //Tiene que cumplir todas las condiciones para que se apruebe
    }
} */