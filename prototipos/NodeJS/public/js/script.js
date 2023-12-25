
// Aquí se agregará la fecha y hora actual
var fechaYHoraElemento = document.getElementById("fechaYHora");
    
// Función para actualizar la fecha y hora
function actualizarFechaYHora() {
    var fechaHoraActual = new Date();
        fechaYHoraElemento.innerHTML = fechaHoraActual.toLocaleString();
    }

// Actualiza la fecha y hora cada segundo
setInterval(actualizarFechaYHora, 1000);

// Llama a la función para mostrar la fecha y hora inicial
actualizarFechaYHora();

// Función para el menú desplegable
function menu_desplegable() {
    var menu = document.getElementById("menu_desplegable");
    if (menu.style.display === "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}

// Función para cerrar el menú desplegable
function cerrar_menu() {
    var menu = document.getElementById("menu_desplegable");
    menu.style.display = "none";
}