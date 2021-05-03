const fecha = new Date()
console.log (fecha)

const fechaDeHoy = fecha.getDate() + '/' + fecha.getMonth() + '/' + fecha.getFullYear()
console.log (fechaDeHoy)

let inicio
let hora
let minutos
let segundos
iniciarIntervalo()
calcularTiempoTranscurrido()

function iniciarIntervalo(){
    inicio = new Date();
}
function calcularTiempoTranscurrido(){
    alert()
    let fin = new Date();
    let transcurso = fin.getTime() - inicio.getTime(); // calculo tiempo en milisegundos
    console.log (transcurso)
    
    segundos = Math.round(transcurso / 1000)
    minutos = Math.trunc(segundos/60)
    segundos = segundos%60
    hora = Math.trunc(minutos/60)
    minutos = minutos%60
    console.log (segundos)
    console.log (minutos)
    console.log (hora)
}