// 1. "Atrapas" el botón y el título del DOM
let boton = document.getElementById("btn-saludo");
let titulo = document.getElementById("titulo-blog");

// 2. Creas una función para que compruebe con un if / else y classList.toggle
function cambiarMensaje() {
    // Preguntamos si ya está cambiado el texto de alerta
    if (titulo.textContent === "¡Cuidado que te quemas!") {
        // Si ya estaba cambiado, lo devolvemos al título orignal
        titulo.textContent = "Rincón Culinario"; 
        titulo.style.color = ""; // Limpia el color de alerta
    } else {
        // Si está en el original, aplicamos el mensaje de aviso
        titulo.textContent = "¡Cuidado que te quemas!";
    }

    // classList.toggle pone la clase si no está, y la quita si ya está puesta
    titulo.classList.toggle("alerta-activa");
}

// 3. Añades el evento (el "escuchador" del clic)
boton.addEventListener("click", cambiarMensaje);


// Función likes de botones
// 1. Seleccionamos TODOS los botones de like de la página
const botonesLike = document.querySelectorAll(".btn-like");

// 2. Recorremos cada botón uno por uno
botonesLike.forEach(function(boton) {

    // 3. A cada botón individual le añadimos su evento de clic
    boton.addEventListener("click", function() {

        //Buscamos el contador que está DENTRO de este botón específico
        const spanContador = boton.querySelector(".contador");

        // Convertimos el texto actual a número, le sumamos 1
        let numeroActual = parseInt(spanContador.textContent);
        let nuevoNumero = numeroActual + 1;

        // Devolvemos el número actualiado al span
        spanContador.textContent = nuevoNumero;

        // Opcional: un toque visual de que se ha pulsado (cambiar color o clase)
        boton.classList.toggle("liked");
    });
});

// Funcion Dark-theme
// 1. Seleccionamos el botón modo oscuro
const botonDarkMode = document.getElementById("btn-dark");

// 2. Añadimos el evento de clic
botonDarkMode.addEventListener("click", function() {
    // Alterna la clase dark-mode en todo el body de la página
    document.body.classList.toggle("dark-mode");
});

// Funcion barra buscadora

// 1. "Atrapas" el input del buscador y TODAS las tarjetas de recetas
const inputBuscador = document.getElementById("buscador-recetas");
const tarjetasRecetas = document.querySelectorAll(".tarjeta-receta"); // O la clase de tus tarjetas

// 2. Escuchas cuando el usuario escribe (evento "input)
inputBuscador.addEventListener("input", function(evento) {
    
    // Guardamos lo que el usuario escribe, pasándolo a minúscilas para que no importen las mayúsculas
    const textoBusqueda = evento.target.value.toLowerCase();

    // 3. Recorremos cada tarjeta de receta una por una
    tarjetasRecetas.forEach(function(tarjeta) {

        // Obtenemos el texto del título de la tarjeta y lo pasamos a minúsculas
        const tituloReceta = tarjeta.querySelector("h3").textContent.toLowerCase();

        // Comprobamos si el título incluye lo que el usuario está escribiendo
        if (tituloReceta.includes(textoBusqueda)) {
            // Si no coincide, le quitamos la clase oculto para que se muestre
            tarjeta.classList.remove("oculto");
        } else {
            // Si NO coincide, le añadimos la clase oculto para que desaparexca
            tarjeta.classList.add("oculto");
        }
    });
});