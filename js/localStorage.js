/* Niveles */
function getNivel(){
    let nivelString = localStorage.getItem('nivel') //  getItem string
    if (nivelString != null){
        nivel= JSON.parse(nivelString)
        $("#nivelnro").html(`Nivel ${nivel}`)
        if (nivel==1){
            nivelCantidad = 3
        } else if (nivel==2){
            nivelCantidad = 4
        } else {nivelCantidad = 5}
    }
    cantidadNumeros = nivelCantidad
}

function getUsuarios() { // Consigue la info de los puntajes del storage y genera un objeto
    let valorUsuarioEnElStorage = localStorage.getItem('usuarioTotal') //  getItem string
    if (valorUsuarioEnElStorage != null){
        usuariosTotales= JSON.parse(valorUsuarioEnElStorage) // objeto
    } 
}

function getNombre(){
    let nombreString = localStorage.getItem('nombre')
    if (nombreString != null){
        nombre= JSON.parse(nombreString)
    } 
}

/* Set local storage */
function agregarUsuario (usuarioNuevo){ // Agrega info de puntajes al storage
    usuariosTotales.push (usuarioNuevo)
    // localStorage.usuariosTotales = JSON.stringify(usuariosTotales) // setItem string
    let usuariosString = JSON.stringify(usuariosTotales)
    localStorage.setItem('usuarioTotal', usuariosString)
}

/* Instrucciones */
function instrucciones(){
    if (localStorage.getItem('instrucciones')!='true'){
        animacionInstrucciones()
    }
}

function animacionInstrucciones(){ 
    $("#modalInstrucciones").show(); 
    $(".close").click(function(){ 
        $("#modalInstrucciones").hide();
        if($("#checkbox").is(":checked")){
            localStorage.setItem('instrucciones', 'true')
    }})
    $("#salirInstrucciones").click(function(){ 
        $("#modalInstrucciones").hide();
        if($("#checkbox").is(":checked")){
            localStorage.setItem('instrucciones', 'true')
        }
    })
}