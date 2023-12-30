
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
    var circle_opc = document.getElementById("circle_opc");
    var menuDos = document.getElementById("menu_desplegable_2");

    if ((menu.style.display === "none" && fondo.style.display === "none" && menuDos.style.display==="none")){
        fondo.style.display = "block";
        fondo.style.position = "fixed";
        menu.style.position = "absolute";
        menu.style.display = "flex";
        circle_opc.style.display = "none";
  
    } else {
        menu.style.display = "none";
        fondo.style.display = "none";
        circle_opc.style.display = "flex";
        menuDos.style.display = "none";
    }
    
}

// Función para cerrar el menú desplegable
function cerrar_menu() {
    var menu = document.getElementById("menu_desplegable");
    var fondo = document.getElementById("fondo_oscuro");
    var circle_opc = document.getElementById("circle_opc");
    menu.style.display = "none";
    circle_opc.style.display = "flex";
    var fondo = document.getElementById("fondo_oscuro");
    fondo.style.display = "none";
    menuDos.style.display = "flex";
}

function toggleMenu() {
    var menu = document.getElementById("menu_desplegable_2");
    menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "flex" : "none";
}


