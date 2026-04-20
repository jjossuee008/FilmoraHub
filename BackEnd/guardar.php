<?php
    include "conexion.php";

    $titulo = $_POST["titulo"];
    $genero = $_POST["genero"];
    $sinapsis = $_POST["sinapsis"];
    

    $nombreImg = $_FILES["img"]["name"];
    $rutaTemporal = $_FILES["img"]["tmp_name"];

    $carpetaDestino = "../img-portadas/" . $nombreImg;
    move_uploaded_file($rutaTemporal, $carpetaDestino);

    $sql = "INSERT INTO peliculas
                VALUES ("$titulo","$genero","$sinapsis","$nombreImg")";
    
    if(mysqli_query($conexion, $sql)){
        echo "Pelicula guardada con exito";
    } else {
        echo "Error:" . mysqli_error($conexion);
    }
?>