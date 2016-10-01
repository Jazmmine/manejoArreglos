var array=[];
window.addEventListener('load', function(){
    var button = document.querySelector(".js-add form input[type='submit']");
    var input = document.getElementsByName("inputText")[0];
    var spotlight = document.createElement("div");
    var sortButton = document.getElementById("sortButton");
    var inputEliminar = document.getElementsByName("inputText")[1];
    var buttonEliminar = document.querySelector(".js-add #deleteForm input[type='submit']");
    spotlight.setAttribute("id", "array-spotlight"); 

    button.addEventListener('click', function(event){
        event.preventDefault();
        var valor = parseInt(input.value);
        array.push(valor);
        imprimirArray();
        input.value = "";
        input.focus();
    });

    sortButton.addEventListener("click", function(event){
        event.preventDefault();
        array.sort(sortComparison);
        imprimirArray();
    });

    buttonEliminar.addEventListener("click", function(event){
        event.preventDefault();
        var valorEliminar = parseInt(inputEliminar.value);
        var indiceEliminar = null;
        for (var i = 0; i < array.length; i++) {
            if (valorEliminar == array[i]) {
                indiceEliminar = i;
            }                      
        }
        if (indiceEliminar != null) {
            array.splice(indiceEliminar,1);
        }

        imprimirArray();
        inputEliminar.value = "";
        inputEliminar.focus();
    });

    function imprimirArray(){
        var section = document.getElementsByClassName("js-add")[0];
        section.insertBefore(spotlight, section.children[2]);   
        spotlight.innerHTML = array.join(", ");
    }

    function sortComparison(a, b){
        return a - b;
    }

});