/* Juego de los números - Bulls and Cows - Buco */


//TODO salir del juego
//TODO niveles
//TODO preguntar info del usuario


/* Objeto Usuario */
class USUARIO {
    constructor (nombre,puntaje,fecha){
        this.nombre = nombre;
        this.puntaje = puntaje;
        this.fecha = fecha;
    }
    
    mostrarJugador () {
        console.log('nombre '+ this.nombre);
        console.log('puntaje '+ this.puntaje);
        console.log('fecha '+ this.fecha);
    }
}

// let valorUsuarioEnElStorage = localStorage.USUARIOSTOTALES //  getItem string
let valorUsuarioEnElStorage = localStorage.getItem('usuarioTotal') //  getItem string
let USUARIOSTOTALES = []
if (valorUsuarioEnElStorage != null){
    USUARIOSTOTALES= JSON.parse(valorUsuarioEnElStorage) // objeto
} 

const USUARIO1 = new USUARIO ('Nes',25, '22/04/2021');
// USUARIO1.mostrarJugador();

agregarUsuario(USUARIO1)

USUARIOSTOTALES.forEach(myFunction);
function myFunction(item, index) {
// console.log(USUARIOSTOTALES[index].nombre);
// console.log(USUARIOSTOTALES[index].puntaje);
// console.log(USUARIOSTOTALES[index].fecha);
USUARIOSTOTALES[index].mostrarJugador
}

/* La computadora genera un número de 4 cifras que no se repiten */
let cantidadNumeros = 4 // Cantidad de numeros a adivinar. Puede variar.
let ARRAYNUMEROSPC = new Array(cantidadNumeros); //Crear array del numero de la PC
let numeroPC = 0
let cantidadDeIntentos = 0


/* Pedirle numeros al usuario */
let ARRAYNUMEROSUSUARIO = new Array(cantidadNumeros); // Crear array del numero del usuario
crearNumberGuess() //Crear inputs para que el usuario escriba sus numeros
siguienteInput() //Pasa al siguiente input al estar lleno
document.getElementById("adivinar").addEventListener("click",adivinar); //Cuando se hace click en el boton adivinar
document.getElementById("reiniciar").addEventListener("click",resetear); //Se resetea al hacer click en reiniciar

/* Errores */
const arrayTextoErrores = ["*Falta llenar casilleros","*Ingresa numeros","*Estas repitiendo un numero"]
let errorVacio = ""
let errorRepetido = ""
let errorNoNumero = ""

/* Comparacion */
let buenas
let regulares

resetear()

/* FUNCIONES */

function agregarUsuario (usuarioNuevo){
    USUARIOSTOTALES.push (usuarioNuevo)
    // localStorage.USUARIOSTOTALES = JSON.stringify(USUARIOSTOTALES) // setItem string
    let USUARIOSSTRING = JSON.stringify(USUARIOSTOTALES)
    localStorage.setItem('usuarioTotal', USUARIOSSTRING)
}

/* Numero a adivinar */
function generarNumeros () { //Genera x cantidad de numeros que no se repiten entre si
    numeroPC = randomNumber () //Pide por primera vez un numero random
    let posicion=0
    while (posicion < ARRAYNUMEROSPC.length) { 
        if (validarPC(posicion)) { //valida si no se repite el numero
            ARRAYNUMEROSPC[posicion]= numeroPC //rellena el array con el numero random
            posicion += 1 //avanza a la siguiente posicion del array
            numeroPC=randomNumber() //propone un nuevo numero para la siguiente posicion
        }
    }
}

function randomNumber() { //Genera 1 numero al azar
    return Math.floor(Math.random()*10);
}

function validarPC(posicionf){ //Se fija que no se repita el numero
    if (posicionf == 0) {return true}  // Primer numero : aun no tiene para comparar con uno anterior.
    for (let i = 0; i < posicionf; i++) {
        if (ARRAYNUMEROSPC[i] == numeroPC) { //compara si el numero anterior guardado en el array es igual al nuevo numero propuesto
            numeroPC=randomNumber() // si es igual propone un nuevo numero
            return false
        }
    }
    return true // numero validado
}

/* Numeros Usuario */
function crearNumberGuess() { //Genero los inputs para que el usuario escriba su numero
    let acumulador = ``;
    for (let i = 0; i < cantidadNumeros; i++) {
        acumulador += `<input id=numberGuess${i} class='numberGuess' type="text" maxlength="1" name="numero"/>`; 
      }
      /* document.getElementById("numberGuessContainer").innerHTML = acumulador; */ //SIN JQUERY
      $("#numberGuessContainer").html(`${acumulador}`); //Lo mismo con JQUERY

    // OTRA FORMA DE HACER LO MISMO (lo dejo adrede)
    // for (let i = 0; i < ARRAYNUMEROSUSUARIO.length; i++) {
    //     let input = document.createElement("input")
    //     document.getElementById("numberGuessContainer").appendChild(input)
    //     input.setAttribute("id", `numberGuess${i}`);
    //     input.setAttribute("class", "numberGuess");
    //     input.setAttribute("type", "text");
    //     input.setAttribute("maxlength", "1");
    //     input.setAttribute("name", "numero");
    //  }
}

function adivinar(){ //Cuando hace click en el boton adivinar
    borrarErrores()
      if (validarNumeroUsuario()){
          crearArrayNumUsuario()
          comparar()
          borrarInput()
      }  
}

function resetear(){ 
    borrarJuego ()
    generarNumeros()
    console.log ('Numero a adivinar' + ARRAYNUMEROSPC)
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
    for (let i = 0; i < ARRAYNUMEROSUSUARIO.length; i++){
    document.getElementById(`numberGuess${i}`).style.border = "none";
    }
}

function validarNumeroUsuario(){ //Chequeo si completo correctamente los inputs
    let esValido = true
    for (let i = 0; i < ARRAYNUMEROSUSUARIO.length; i++){
      let numUsuario=document.getElementById(`numberGuess${i}`).value
      if (numUsuario == ''|| numUsuario==' '){ //Si algun casillero esta vacio
          esValido = false
          document.getElementById(`numberGuess${i}`).style.border = "5px solid red";
          if (errorVacio ==""){
          errorVacio = document.createElement("p")
          errorVacio.innerText = arrayTextoErrores[0]; 
          document.getElementById("errores").appendChild(errorVacio)
          }

      } else if (isNaN (numUsuario)){ //Si alguno de los caracteres no es numerico salta error
          esValido = false
          document.getElementById(`numberGuess${i}`).style.border = "5px solid red";
          if (errorNoNumero == ""){            
          errorNoNumero = document.createElement("p")
          errorNoNumero.innerText = arrayTextoErrores[1]; 
          document.getElementById("errores").appendChild(errorNoNumero)
          }
      }
    }
    if (esValido){
      let siEsRepetido = true 
      if (validarSiRepetido() == false){ //Si alguno de los numeros se repite
          siEsRepetido = false
          esValido = false
          errorRepetido = document.createElement("p")
          errorRepetido.innerText = arrayTextoErrores[2];  
          document.getElementById("errores").appendChild(errorRepetido)
          /* alert('Estas repitiendo un numero'); */
      }
    }
    if (esValido){
        return true
    } else {
        return false}
}

function validarSiRepetido (){ //Chequea si alguno de los numeros se repite 
    let noSeRepite = true
    for (let i=0; i < ARRAYNUMEROSUSUARIO.length-1; i++){
        if (noSeRepite == false){
            return false
        } for (let j=i+1; j < ARRAYNUMEROSUSUARIO.length; j++){
            if (document.getElementById(`numberGuess${i}`).value==document.getElementById(`numberGuess${j}`).value){
            noSeRepite = false;
            document.getElementById(`numberGuess${i}`).style.border = "5px solid red";
            document.getElementById(`numberGuess${j}`).style.border = "5px solid red";
            return false
            }
        }
    }
}

function crearArrayNumUsuario(){ //Array que guarda el numero dado por el usuario
    ARRAYNUMEROSUSUARIO = []
  for (let i = 0; i < cantidadNumeros; i++){
      ARRAYNUMEROSUSUARIO.push(parseInt(document.getElementById(`numberGuess${i}`).value))
  }
}

function comparar(){ //Compara el numero del usuario con el de la PC
    buenas = 0
    regulares = 0
    for (let i=0; i < cantidadNumeros; i++){
        for (let j=0; j < cantidadNumeros; j++){
            if (ARRAYNUMEROSUSUARIO[i]==ARRAYNUMEROSPC[j]){
                if(i==j){
                    buenas += 1
                } else {
                    regulares += 1
                } 
            }
        }
    }
    cantidadDeIntentos += 1
    crearGuessLine() // Muestra las respuestas
}

function crearGuessLine() { // Muestra las respuestas
    document.getElementById("respuestas").innerHTML += `<div id=guessLine${cantidadDeIntentos} class="flex guessLine"></div>`; //genera div
    let acumulador = ``;
    for (let i = 0; i < cantidadNumeros; i++) { //muestra los mismos numeros que pregunto
        let valor = document.getElementById(`numberGuess${i}`).value
        acumulador += `<p id=numberGuessOld${cantidadDeIntentos}${i} class='numberGuessOld'>${valor}<p/>`;
      }
      acumulador += `<p id=numberAnswer${cantidadDeIntentos} class='numberAnswer'>${buenas} - ${regulares}<p/>` //muestra la respuesta
      document.getElementById(`guessLine${cantidadDeIntentos}`).innerHTML = acumulador;
      for (let i = 0; i < cantidadNumeros; i++) {
        document.getElementById(`numberGuessOld${cantidadDeIntentos}${i}`).style.backgroundImage = "linear-gradient(to top, #ffa0d4, #ff6bce)"; //cambia el color de los ultimos numeros preguntados
        if (cantidadDeIntentos!=1){
            document.getElementById(`numberGuessOld${cantidadDeIntentos-1}${i}`).style.backgroundImage = "linear-gradient(to top, #4b99fd, #4185f7)"; //cambia el color de los numeros preguntados anteriormente
          }
    }
      document.getElementById(`numberAnswer${cantidadDeIntentos}`).style.backgroundImage = "linear-gradient(to top, #ffa0d4, #ff6bce)"; //cambia el color de las ultimas rtas
      if (cantidadDeIntentos!=1){
        document.getElementById(`numberAnswer${cantidadDeIntentos-1}`).style.backgroundImage = "linear-gradient(to top, #4b99fd, #4185f7)"; //cambia el color de las rtas anteriores
      }
}
      
function borrarInput(){ //Borra el valor de los inputs
    for (let i = 0; i < cantidadNumeros; i++) {
    document.getElementById(`numberGuess${i}`).value='';
    }
}

function borrarJuego(){ //Borrar datos de pantalla y variables
    cantidadDeIntentos = 0
    ARRAYNUMEROSPC = []
    $("#respuestas").html('')
    borrarErrores()
    for (let i = 0; i < cantidadNumeros; i++){ //borro los numeros del input del usuario
        document.getElementById(`numberGuess${i}`).value='' 
    }
}

function siguienteInput(){ //Avanza al siguiente input cuando lleno
    for (let i = 0; i < ARRAYNUMEROSUSUARIO.length -1 ; i++) {
        document.getElementById(`numberGuess${i}`).addEventListener("input", function(event){verSiAvanzo(i)});
     }
}

function verSiAvanzo (j){ //Chequea si el input esta lleno para avanzar o no
    if(document.getElementById(`numberGuess${j}`).length = 1){
        document.getElementById(`numberGuess${j+1}`).focus()
    }
}


//Forma vieja en que validaba datos del input

/* function validarNumeroUsuario (){
    let noSeRepite = true
    for (let i=0; i < ARRAYNUMEROSUSUARIO.length-1; i++){
        if (noSeRepite == false){
            return false
        } for (let j=i+1; j < ARRAYNUMEROSUSUARIO.length; j++){
            if (ARRAYNUMEROSUSUARIO[i]==ARRAYNUMEROSUSUARIO[j]){
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
        ARRAYNUMEROSUSUARIO = numeroUsuario.split (separador) //Separa el numero del prompt en cant de numeros del array 

        if (ARRAYNUMEROSUSUARIO.length!= cantidadNumeros){ //Si el numero es mas corto o mas largo que la cant de numeros del array
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