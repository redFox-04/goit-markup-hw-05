var openModalBtn = document.getElementById("openModalBtn");
// Asigna la apertura de la ventana modal al evento click del botón
openModalBtn.onclick = function() {
    modal.style.display = "block";
}
// Obtiene el elemento de cierre de la ventana modal
var closeBtn = document.getElementsByClassName("close")[0];

// Obtiene la ventana modal por su id
var modal = document.getElementById("myModal");

// Abre la ventana modal cuando se hace clic en un elemento específico
var openModalBtn = document.getElementById("openModalBtn");
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Cierra la ventana modal cuando se hace clic en el botón de cierre
closeBtn.onclick = function() {
    modal.style.display = "none";
}
// Cierra la ventana modal cuando se hace clic fuera de ella
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}