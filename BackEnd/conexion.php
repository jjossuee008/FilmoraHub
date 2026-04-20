<?php
    $servidor = "localhost";
    $usuario = "root";
    $password = "";
    $base_datos = "filmora.bd";
    $puerto = 3307

    $conexion = msqli_connect($servidor,$usuario,$password,$base_datos,$puerto);

    if(!$conexion){
        die("Error de conexion: " . mysqli_connect_error());
    }

    msqli_set_charset($conexion, "utf8");
?>