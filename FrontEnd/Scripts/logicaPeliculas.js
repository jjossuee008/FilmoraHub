document.addEventListener("DOMContentLoaded", ()=>{

    let añadirPelicula = document.getElementById("añadirPelicula");

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

        const titulo = document.getElementById("tituloPeli");
        const genero = document.getElementById("generos");
        const sinapsis = document.getElementById("sinapsis");
        const img = document.getElementById("portadaPeli");

        const enviar = document.getElementById("enviar");

        enviar.addEventListener("click", function() {
            let valorTitulo = titulo.value;
            let generoElegido = genero.value;
            let valorSinapsis = sinapsis.value;
            let archivoImg = img.files[0];
    
            const archivador = new FormData();
    
            if(titulo === ""){
                console.log("Falta el titulo");
            } else {
                console.log("Datos listos para enviar:", valorTitulo, generoElegido);
            }
    
            archivador.append("titulo",valorTitulo);
            archivador.append("genero",generoElegido);
            archivador.append("sinapsis",valorSinapsis);
            archivador.append("img",archivoImg);
    
            fetch("http://localhost:8080/FilmoraHub/guardar.php", { 
                method: "POST",
                body: archivador
            });
        });
    })

    document.addEventListener("change", (event) => {

        if(event.target.id === "portadaPeli"){
            const archivo = event.target.files[0];
            const preview = document.getElementById("imgPreview");

            if(archivo){
                const lector = new FileReader();

                lector.onload = function(e){
                    preview.src = e.target.result;
                    preview.style.display = "block";
                }
                lector.readAsDataURL(archivo);
            }
        }
    });

})