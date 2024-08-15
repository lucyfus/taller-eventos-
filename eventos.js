document.addEventListener("DOMContentLoaded", function() {
    const divA = document.querySelector("div");
    
    divA.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });
});