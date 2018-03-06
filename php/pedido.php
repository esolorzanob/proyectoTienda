<?php
date_default_timezone_set("America/Costa_Rica");
$usuario = "root";
$password = "Solorzano84";
$servername = "18.219.254.158";
$dbname = "proyecto_lunes_noche";
$conn = new mysqli($servername, $usuario, $password, $dbname);
mysqli_set_charset($conn,"utf8");
if(isset($_POST["metodo"]) && $_POST["metodo"] == "select"){
    $sql = "select * from Usuarios where usuario ='".$_POST["usuario"]."'";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        echo json_encode(mysqli_fetch_assoc($result));
    }else{
        echo "Error";
    }
}else if(isset($_POST["metodo"]) && $_POST["metodo"] == "listar"){
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
    $sql = "insert into Pedidos (fecha, estado, idUsuarios, total) values(
     '".$_POST["fecha"]."',
     '".$_POST["estado"]."',
     ".$_POST["idUsuarios"].",
     '".$_POST["total"]."'
    )";
    if($conn->query($sql) === TRUE){
        $ultimo_id = $conn->insert_id;
    }else{
        die('Error al registrar pedido');
    }
    $productoIds = $_POST["productoIds"];
    $actual = current($productoIds);
    while($actual){
        $sql = "insert into pedido_has_productos (idProductos, idPedido) values(
            ".$actual.",
            ".$ultimo_id."
        )";
        if($conn->query($sql) === TRUE){
            
        }else{
            die('Error al registrar pedido');
        }
        $actual = next($productoIds);
    }
    echo "Pedido registrado con éxito";
}

$conn->close();
?>