console.log("Hello friend!");

function aquiAleatorioText(){
    $.ajax({
        type: "GET",
        url: "https://api.chucknorris.io/jokes/random",
        dataType: "json",
        success: function(data){
            var textRandom = document.getElementById("aquiRandomWord");
            var createChisteChuck = data.value;
            textRandom.textContent = createChisteChuck
        },
        error: function(error) {
            console.log("Esto es un " + error);
        }
    })
}
    
$(document).ready(aquiAleatorioText) //declarar función afuera, para usarla después