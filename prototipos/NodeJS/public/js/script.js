
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
    var fondo = document.getElementById("fondo_oscuro");
    if (menu.style.display === "none" && fondo.style.display === "none") {
        fondo.style.display = "block";
        fondo.style.position = "fixed";
        menu.style.position = "absolute";
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
        fondo.style.display = "none";
    }
}

// Función para cerrar el menú desplegable
function cerrar_menu() {
    var menu = document.getElementById("menu_desplegable");
    var fondo = document.getElementById("fondo_oscuro");
    menu.style.display = "none";
    var fondo = document.getElementById("fondo_oscuro");
    fondo.style.display = "none";
}