/* Objeto usuario */
class usuario {
    constructor (nombre,intentos,fecha,tiempo){
        this.nombre = nombre;
        this.intentos = intentos;
        this.fecha = fecha;
        this.tiempo = tiempo;
    }
    
    mostrarJugador () {
        console.log('nombre '+ this.nombre);
        console.log('intentos '+ this.intentos);
        console.log('fecha '+ this.fecha);
        console.log('tiempo '+ this.tiempo);
    }
}

let usuariosTotales = []
muestroPuntaje()

function muestroPuntaje() {
    let valorUsuarioEnElStorage = localStorage.getItem('usuarioTotal') //  getItem string
    if (valorUsuarioEnElStorage != null){
        usuariosTotales= JSON.parse(valorUsuarioEnElStorage) // objeto
    } 
    
    usuariosTotales.sort(function (a, b) { // ordena el array primero por intentos y luego por tiempo de juego de manera descendente
        return a.intentos - b.intentos || a.tiempo - b.tiempo ;
    });
    
    usuariosTotales.forEach(element => {
        let info = `Nombre: ${element.nombre} Fecha: ${element.fecha} Intentos: ${element.intentos} Tiempo: ${convertirTiempo(element.tiempo)}`
        $('#puntajes').append(`<p>${info}</p>`)
    });
    
}

function convertirTiempo(tiempo){
    let segundos = tiempo
    let minutos = Math.trunc(segundos/60)
        segundos = segundos%60
    let hora = Math.trunc(minutos/60)
    minutos = minutos%60
    let tiempoJuego =''
    if(hora>1){
       tiempoJuego += `${hora} Horas `
    } else if (hora==1){
       tiempoJuego += `${hora} Hora `
    }
    if (minutos>0){
       tiempoJuego += `${minutos} Minutos `
    }
    tiempoJuego += `${segundos} Segundos`
    return tiempoJuego
   }


  
