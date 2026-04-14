document.addEventListener("DOMContentLoaded", () => {
    let añadirPelicula = document.getElementById("añadirPelicula");
    let volverInicio = document.getElementById("inicio");
    let añadirNoticia = document.getElementById("añadirNoticia");

    añadirPelicula.addEventListener("click", function(){
        let contenedor = document.getElementById("cuerpo");
        contenedor.innerHTML = `
        <section id="nuevaPelicula" class="contenedor-cristal">
            <h2>Añadir Nueva Película</h2>
            <input type="text" id="tituloPeli" placeholder="Título...">
            <div class="dropdown">
            <label for="generos">Elige un género:</label>
            <select name="generos" id="generos">
                <option value="" selected disabled hidden>Géneros</option>

                <option value="accion">Acción</option>
                <option value="comedia">Comedia</option>
                <option value="drama">Drama</option>
            </select>
            </div>
            <div class="contenedor-archivo">
                <label for="portadaPeli" class="label-archivo">Seleccionar Portada</label>
                <input type="file" id="portadaPeli" accept="image/*">
            </div>
            <div id="vistaPrevia">
                    <img id="imgPreview" src="" alt="Vista previa" style="display: none;">
            </div>
            <textarea id="sinapsis" placeholder="Sinapsis..."></textarea>
            <button id="enviar">Enviar al Servidor</button>
        </section>
    `;
    })

    añadirNoticia.addEventListener("click", function(){
        let contenedor = document.getElementById("cuerpo");
        contenedor.innerHTML = `
        <section id="nuevaNoticia" class="contenedor-cristal">
            <h2>Añadir Nueva Noticia</h2>
            <div id="titulo"><input type="text" id="tituloNoticia" placeholder="Título..."></div>
            <div id="texto"><textarea placeholder="Escribe aquí el cuerpo de la noticia..."></textarea></div>
            <div id="boton"><button onclick="guardarNoticia()">Enviar al Servidor</button></div>
        </section>
    `;
    })

    volverInicio.addEventListener("click", function() {
        let contenedor = document.getElementById("cuerpo");
        
        contenedor.innerHTML = `
            <section id="noticias">
                <h4>Ultimas Noticias</h4>
            </section>
            <main id="peliculas">
                <h4>Ultimas Peliculas</h4>
            </main>
        `; 
    });
})

