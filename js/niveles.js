$("button").click(function(){
let nivel = $("input").val()
nivel = JSON.stringify(nivel)
localStorage.setItem('nivel', nivel)
})
