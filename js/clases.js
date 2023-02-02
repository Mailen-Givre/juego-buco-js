/* Objeto Usuario */
class Usuario {
    constructor (nombre,intentos,fecha,tiempo,nivel){
        this.nombre = nombre;
        this.intentos = intentos;
        this.fecha = fecha;
        this.tiempo = tiempo;
        this.nivel = nivel;
    }
    mostrarJugador () {
        console.log('nombre '+ this.nombre);
        console.log('intentos '+ this.intentos);
        console.log('fecha '+ this.fecha);
        console.log('tiempo '+ this.tiempo);
    }
}