<?php

// isset: Determina si una variable está definida o no, es null
// empty: Determina si una variable está vacía
// trim: Elimina el espacio en blanco (u otro tipo de caracter) del inicio y del final de la cadena

if($_POST){
    $usuario = "";
    $correo = "";
    $mensaje = "";

    if(isset($_POST['usuario'])){
        $usuario = filter_var(trim($_POST['usuario']), FILTER_SANITIZE_STRING);
    }

    if(isset($_POST['correo'])){
        $usuario = filter_var(trim($_POST['correo']), FILTER_VALIDATE_EMAIL);
    }

    if(isset($_POST['mensaje'])){
        $usuario = filter_var(trim($_POST['mensaje']), FILTER_SANITIZE_STRING);
    }

    if(empty($usuario)){
        echo json_encode('usuario en blanco');
    }
}
// echo json_encode($usuario);
