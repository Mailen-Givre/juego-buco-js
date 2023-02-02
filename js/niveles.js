let nivel= 2
getNivel()
cuadrados()
botones()
$("#nivelTitulo").html(`Nivel ${nivel}`)
$("#mas").click(agregarNiveles)
$("#menos").click(restarNiveles)
$("#masN").click(agregarNiveles)
$("#menosN").click(restarNiveles)

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
        $("#menosN").css({
            'color': '#4185f7',
            'cursor': 'default'
        });
        $("#menos").css({
            'color': '#4185f7',
            'cursor': 'default'
        });
     } else {
        $("#menosN").css({
            'color': 'white',
            'cursor': 'pointer'
        });
        $("#menos").css({
        'color': 'white',
        'cursor': 'pointer'
        });}
    if (nivel==3){
        $("#masN").css({
        'color': '#4185f7',
        'cursor': 'default'
        });
        $("#mas").css({
            'color': '#4185f7',
            'cursor': 'default'
        });
    } else {
        $("#masN").css({
            'color': 'white',
            'cursor': 'pointer'
        });
        $("#mas").css({
        'color': 'white',
        'cursor': 'pointer'
        });}
}
