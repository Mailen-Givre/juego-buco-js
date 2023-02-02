let usuariosTotales = []

/* Niveles */
let nivel = 2
let nivelCantidad = 4

/* La computadora genera un número de "x" cantidad de cifras que no se repiten */
let cantidadNumeros // Cantidad de numeros a adivinar. Varia segun el nivel elegido en el hrml niveles
let arrayNumerosPc = new Array(cantidadNumeros); //Crear array del numero de la PC
let numeroPC = 0
let cantidadDeIntentos = 0
let respuestaPC

/* Pedirle numeros al usuario */
let arrayNumerosUsuario = new Array(cantidadNumeros); // Crear array del numero del usuario

/* Errores */
const arrayTextoErrores = ["*Falta llenar casilleros","*Solo pueden ser números","*Estas repitiendo un número"]
let errorVacio = ""
let errorRepetido = ""
let errorNoNumero = ""

/* Comparacion */
let buenas
let regulares

/* Curiosidades "AJAX" */
const URLGET = "/json/curiosidades.json"