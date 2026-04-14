document.addEventListener("DOMContentLoaded", ()=>{
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


    });



})