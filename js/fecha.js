const fecha = new Date()

const fechaDeHoy = `${fecha.getDate()}/${Number(fecha.getMonth())+1}/${fecha.getFullYear()}`

let inicio
let hora
let minutos
let segundos
let segundosTranscurridos 

function iniciarIntervalo(){
    inicio = new Date();
}
function calcularTiempoTranscurrido(){
    let fin = new Date();
    let transcurso = fin.getTime() - inicio.getTime(); // calculo tiempo en milisegundos

    segundosTranscurridos = Math.round(transcurso / 1000)
    segundos = Math.round(transcurso / 1000)
    minutos = Math.trunc(segundos/60)
    segundos = segundos%60
    hora = Math.trunc(minutos/60)
    minutos = minutos%60
}