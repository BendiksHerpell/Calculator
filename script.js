//Make input appear on the screen via event listeners and DOM manipulation
let currentEquation = "";
let Buttons = document.querySelectorAll(".button");


Buttons.forEach(function(button){
    button.addEventListener("click", function(){
        currentEquation += button.innerHTML;
        updateCurrentNumber(currentEquation);
    });
});


function updateCurrentNumber(value) {
    let currentNumberDiv = document.getElementById("currentNumber");
    currentNumberDiv.textContent = value;
}