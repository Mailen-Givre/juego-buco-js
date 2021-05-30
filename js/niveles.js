let nivel= 2
getNivel()
cuadrados()
botones()
$("#nivelTitulo").html(`Nivel ${nivel}`)
$("#mas").click(agregarNiveles)
$("#menos").click(restarNiveles)

function getNivel(){
    let nivelString = localStorage.getItem('nivel')
    if (nivelString != null || nivelString != undefined){
        nivel= JSON.parse(nivelString)
    }
}

function agregarNiveles(){
    if (nivel<3){
        nivel += 1
    }
 cuadrados()
 $("#nivelTitulo").html(`Nivel ${nivel}`)
 botones()
}

function restarNiveles(){
    if (nivel>1){
    nivel -= 1
    }
    cuadrados()
    $("#nivelTitulo").html(`Nivel ${nivel}`)
    botones()
}

function cuadrados(){
    if (nivel == 1){
        $("#nivel2").removeClass('nivelCuadrados').addClass('nivelLineas');
        $("#nivel3").removeClass('nivelCuadrados').addClass('nivelLineas');
    } else if (nivel == 2){
        $("#nivel2").removeClass('nivelLineas').addClass('nivelCuadrados');
        $("#nivel3").removeClass('nivelCuadrados').addClass('nivelLineas');
    } else if (nivel == 3){
        $("#nivel2").removeClass('nivelLineas').addClass('nivelCuadrados');
        $("#nivel3").removeClass('nivelLineas').addClass('nivelCuadrados');
    }
}

$("button").click(function(){
nivel = JSON.stringify(nivel)
localStorage.setItem('nivel', nivel)
})

function botones(){
    if (nivel==1){
        $("#menos").html("")
    } else {$("#menos").html("-")}
    
    if (nivel==3){
        $("#mas").html("")
    } else {$("#mas").html("+")}
}

