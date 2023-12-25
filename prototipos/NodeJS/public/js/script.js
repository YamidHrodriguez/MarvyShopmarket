
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

//función para mostrar cargando...  animacion de puntos suspensivos
