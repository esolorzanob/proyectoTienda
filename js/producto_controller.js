function catalogo() {
    var producto = {
        metodo: "listar"
    }
    $.ajax({
        url: "../php/producto.php",
        method: "POST",
        data: producto,
        error: function (xhr) {
            console.log(xhr.statusText)
        },
        success: function (producto_response) {
            var productos = JSON.parse(producto_response)
            $('#catalogoContainer').hide()
            var contador = 0
            var numPagina = 1
            productos.map(function (producto) {
                $('<div class="col-lg-4 col-sm-6 portfolio-item pagina' + numPagina + '"><div class="card h-100"><a href="producto.html?' + producto.idproductos + '"><img class="card-img-top" src="imgs/' + producto.imagen + '" alt=""></a><div class="card-body"><h4 class="card-title"><a href="producto.html?' + producto.idproductos + '" class="nombre">' + producto.nombre + '</a></h4><p class="card-text" class="descripcion">' + producto.descripcion + '</p><p class="card-text" class="precio">Precio: ' + producto.precio + ' colones</p></div></div></div>').appendTo('#catalogoContainer')
                contador++
                if (contador == 6) {
                    contador = 0
                    numPagina++
                }
            })
            $('.portfolio-item').hide()
            $('.pagina1').show()
            $('#catalogoContainer').show()
            var totalPaginas = Math.ceil(productos.length / 6)
            for (var i = 1; i <= totalPaginas; i++) {
                $(' <li class="page-item"><a class="page-link" onclick="paginacion(' + i + ')">' + i + '</a></li>').appendTo('.pagination')
            }
        }
    })
}
function traerProducto(id) {
    var producto = {
        id: id,
        metodo: "traerProducto"
    }
    $.ajax({
        url: "../php/producto.php",
        method: "POST",
        data: producto,
        error: function (xhr) {
            console.log(xhr.statusText)
        },
        success: function (producto_response) {
            sessionStorage.setItem('productoActual', producto_response);
            var producto = JSON.parse(producto_response)
            $('#imagen').attr('src', 'imgs/' + producto.imagen)
            $('#nombre').text(producto.nombre)
            $('#descripcion').text(producto.descripcion)
            $('#marca').append(producto.marca)
            $('#modelo').append(producto.modelo)
            $('#precio').append(producto.precio + " colones i.v.i")
            var caracteristicas = producto.caracteristicas.split(';')
            caracteristicas.map(function (caracteristica) {
                if (caracteristica.trim())
                    $('<li>' + caracteristica + '</li>').appendTo('#caracteristicas')
            })
        }
    })
}
function paginacion(numero) {
    $('.portfolio-item').hide()
    $('.pagina' + numero).show()
    window.scrollTo(0, 0)
}
function agregar() {
    if (sessionStorage.getItem('carrito')) {
        var carrito = JSON.parse(sessionStorage.getItem('carrito'));
    } else {
        var carrito = [];
    }
    var productoActual = JSON.parse(sessionStorage.getItem('productoActual'))
    var producto = {
        nombre: productoActual.nombre,
        marca: productoActual.marca,
        imagen: productoActual.imagen,
        precio: productoActual.precio
    }
    carrito.push(producto);
    sessionStorage.setItem('carrito', JSON.stringify(carrito));
    alert("El producto se agregó a su carro de compras")
}

function traerCategorias() {
    var categoria = {
        metodo: "listar"
    }
    $.ajax({
        url: "../php/categoria.php",
        method: "POST",
        data: categoria,
        error: function (xhr) {
            console.log(xhr.statusText)
        },
        success: function (categoria_response) {
            var categorias = JSON.parse(categoria_response);
            categorias.map(function (categoria) {
                $('<option value="' + categoria.idcategoria + '">' + categoria.nombre + '</option>').appendTo('#categoria');
            })
        }
    })
}

$("form#producto").submit(function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
        url: "../php/producto.php",
        type: 'POST',
        data: formData,
        success: function (data) {
            alert(data)
        },
        cache: false,
        contentType: false,
        processData: false
    });
});
