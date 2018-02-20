<?php
date_default_timezone_set("America/Costa_Rica");

$usuario = "root";
$password = "Solorzano84";
$servername = "18.219.254.158";
$dbname = "proyecto_lunes_noche";
$conn = new mysqli($servername, $usuario, $password, $dbname);
mysqli_set_charset($conn,"utf8");
if($_POST["metodo"] == "select"){
    $sql = "select * from Usuarios where usuario ='".$_POST["usuario"]."'";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        echo json_encode(mysqli_fetch_assoc($result));
    }else{
        echo "Error";
    }
}else if($_POST["metodo"] == "traerProducto"){
    $sql = "select * from productos where idproductos =".$_POST["id"];
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        echo json_encode(mysqli_fetch_assoc($result));
    }else{
        echo "Error";
    }
}else if($_POST["metodo"] == "listar"){
    $sql = "select * from productos";
    $productos = array();
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        while($row = mysqli_fetch_assoc($result)){
            array_push($productos, $row);
        }
        echo json_encode($productos);
    }else{
        echo "Error";
    }
}else{
    if($_POST["metodo"] == "registrar"){
        $target_dir = "../imgs/";
        $target_file = $target_dir . basename($_FILES["imagen"]["name"]);
        if ( 0 < $_FILES['imagen']['error'] ) {
            echo 'Error: ' . $_FILES['imagen']['error'] . '<br>';
        }
        else {
            move_uploaded_file($_FILES['imagen']['tmp_name'], $target_file);
            echo "Exito";
        }
        $caracteristicas = array();
        foreach ($_POST as $key => $value){
            if(preg_match('/carac/',$key)){
                array_push($caracteristicas, $value);
            }
        }
        $caracteristicas = join(';', $caracteristicas);
        $sql = "insert into productos (nombre,descripcion,modelo,idCategoria,precio,caracteristicas,cantidad,imagen,marca,fechaIngreso) values ('"
        .$_POST["nombre"]."', '"
        .$_POST["descripcion"]."', '"
        .$_POST["modelo"]."', "
        .$_POST["categoria"].", '"
        .$_POST["precio"]."', '"
        .$caracteristicas."', "
        .$_POST["cantidad"].", '"
        .$_FILES['imagen']['name']."', '"
        .$_POST["marca"]."', '"
        .date("d/m/Y")."')";
    }else if($_POST["metodo"] == "editar"){
        $sql = "update Usuarios set 
        nombre='".$_POST["nombre"]."',
        direccion='".$_POST["direccion"]."',
        telefono='".$_POST["telefono"]."',
        correo='".$_POST["correo"]."',
        pregunta_secreta='".$_POST["pregunta_secreta"]."',
        respuesta='".$_POST["respuesta"]."',
        usuario='".$_POST["usuario"]."',
        password='".$_POST["password"]."'
         where idUsuarios = ".$_POST["idUsuarios"];
    }

    if($conn->query($sql) === TRUE){
        echo "Exito";
    }else{
        echo "Error";
    }
    

}

$conn->close();
?>