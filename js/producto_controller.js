function catalogo() {
    var producto = {
        metodo: "listar"
    }
    $.ajax({
        url: "../php/producto.php",
        method: "POST",
        data: producto,
        error: function (xhr) {
            console.log(xhr.statusText);
        },
        success: function (producto_response) {
            var productos = JSON.parse(producto_response);
            productos.map(function (producto) {
                $('<div class="col-lg-4 col-sm-6 portfolio-item"><div class="card h-100"><a href="#"><img class="card-img-top" src="imgs/' + producto.imagen + '" alt=""></a><div class="card-body"><h4 class="card-title"><a href="#" class="nombre">' + producto.nombre + '</a></h4><p class="card-text" class="descripcion">' + producto.descripcion + '</p><p class="card-text" class="precio">Precio: ' + producto.precio + ' colones</p></div></div></div>').appendTo('#catalogoContainer');
            })
        }
    });
}