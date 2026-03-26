document.addEventListener("DOMContentLoaded", () => {
    let añadirPelicula = document.getElementById("añadirPelicula");

    añadirPelicula.addEventListener("click", function(){
        let contenedor = document.getElementById("cuerpo");
        contenedor.innerHTML = `
        <section id="nuevaPelicula" class="contenedor-cristal">
            <h2>Añadir Nueva Película</h2>
            <input type="text" id="tituloPeli" placeholder="Título...">
            <button onclick="guardarPeli()">Enviar al Servidor</button>
        </section>
    `;
    })
})