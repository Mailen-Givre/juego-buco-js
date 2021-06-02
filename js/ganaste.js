/* Ganaste */
function ganaste(){ // Al ganar muestra info de cual era el nro, en cuantos interntos y tmpo lo adivino, pide el nombre y muestra una frase de curiosidades
    document.getElementById("rta").innerHTML= respuestaPC
    calcularTiempoTranscurrido()
    animacionGanaste() // que aparezca el modal
    mostrarTiempoJuego()
    $("#intentos").html(cantidadDeIntentos)
    document.getElementById("salirGanaste").addEventListener("click", salirGanaste)
    $('#escribirNombre p').remove(); // borra error de falta nombre
    $('#nombreUsuario').css('border-color','white'); // borra bordes rojos de error
    document.getElementById("guardar").addEventListener("click", guardar)
    $("#nombreUsuario").html(getNombre())
}

function animacionGanaste(){    //muestra y oculta el modal ganaste
    $("#modalGanaste").show(); 
    $(".close").click(function(){ //cierra el modal en la X pero no resetea el juego
        $("#modalGanaste").hide();
    })
}

function mostrarTiempoJuego(){ //tiempo en horas minutos y segundos que le llevo adivinar
 let tiempoJuego =''
 if(hora>1){
    tiempoJuego += `${hora} horas `
 } else if (hora==1){
    tiempoJuego += `${hora} hora `
 }
 if (minutos>0){
    tiempoJuego += `${minutos} minutos `
 }
 tiempoJuego += `${segundos} segundos`

 $("#tiempoJuego").html(tiempoJuego)
}

function salirGanaste(){ //oculta el modal al salir y resetea el juego
    $("#modalGanaste").hide();
    resetear()
}

function guardar(){ // si esta completo el input de nombre guarda la info del usaurio
    let nombreUsuario = document.getElementById("nombreUsuario").value
    if (nombreUsuario == ''){
        $('#escribirNombre').append( "<p>*Por favor escribi tu nombre</p>" );
        $('#nombreUsuario').css('border-color','red');
    } else {
        guardando(nombreUsuario)
        let nombre = $("input").val()
        nombre = JSON.stringify(nombre)
        localStorage.setItem('nombre', nombre)
    }
}

function guardando(nombreUsuario){ //info del usuario guardada en el storage y sale
    const Usuario1 = new Usuario (nombreUsuario,cantidadDeIntentos, fechaDeHoy, segundosTranscurridos, nivel);
    agregarUsuario(Usuario1)
    salirGanaste()
}

/* Curiosidades "AJAX" */
$.get(URLGET, function (respuesta, estado) { 
    if(estado === "success"){
      let random =Math.floor(Math.random() * respuesta.length);
      $("#sabias").html(respuesta[random].curiosidad);
    }
})