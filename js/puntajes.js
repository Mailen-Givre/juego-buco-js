let usuariosTotales = []
let nivel = 1
nivel1()
$("#nivel1").click(nivel1)
$("#nivel2").click(nivel2)
$("#nivel3").click(nivel3)


function nivel1 (){
    nivel = 1
    muestroPuntaje()
}

function nivel2 (){
    nivel = 2
    muestroPuntaje()
}

function nivel3 (){
    nivel = 3
    muestroPuntaje()
}

function muestroPuntaje() {
    for (let i = 1; i < 4; i++) {
        if ($(`#nivel${i}`).hasClass('btn__seleccionado')){
            $(`#nivel${i}`).removeClass('btn__seleccionado')
        }
    }
    $(`#nivel${nivel}`).addClass('btn__seleccionado');
    $('#puntajes').html("")
    let valorUsuarioEnElStorage = localStorage.getItem('usuarioTotal') //  getItem string
    if (valorUsuarioEnElStorage != null){
        usuariosTotales= JSON.parse(valorUsuarioEnElStorage) // objeto
    } 
    usuariosTotales = usuariosTotales.filter(element => element.nivel == nivel) 
    usuariosTotales.sort(function (a, b) { // ordena el array primero por intentos y luego por tiempo de juego de manera descendente
        return a.intentos - b.intentos || a.tiempo - b.tiempo ;
    });
    
    usuariosTotales.forEach((element,i) => {

/*         let info = `${element.nombre} ${element.fecha}  ${element.intentos} ${convertirTiempo(element.tiempo)}` */
        $('#puntajes').append(`<p class="flex"><span class="centrar width">${i+1}</span><span class="centrar width">${element.nombre}</span><span class="centrar width">${element.fecha}</span><span class="centrar width">${element.intentos}</span><span class="centrar width">${convertirTiempo(element.tiempo)}</span></p>`)
    });

}

function convertirTiempo(tiempo){
    let segundos = tiempo
    let minutos = Math.trunc(segundos/60)
    segundos = segundos%60
    let hora = Math.trunc(minutos/60)
    minutos = minutos%60

    hora = ("0" + hora).slice(-2);
    minutos = ("0" + minutos).slice(-2);
    segundos = ("0" + segundos).slice(-2);
    let tiempoJuego = `${hora}:${minutos}:${segundos}`
    return tiempoJuego
}



  
