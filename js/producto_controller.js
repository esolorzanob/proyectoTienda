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
                $('<div id="' + producto.idproductos + '" class="col-lg-4 col-sm-6 portfolio-item pagina' + numPagina + '"><div class="card h-100"><a href="producto.html?' + producto.idproductos + '"><img class="card-img-top" src="imgs/' + producto.imagen + '" alt=""></a><div class="card-body"><h4 class="card-title"><a href="producto.html?' + producto.idproductos + '" class="nombre">' + producto.nombre + '</a></h4><p class="card-text" class="descripcion">' + producto.descripcion + '</p><p class="card-text precio">Precio: ' + producto.precio + ' colones</p></div></div></div>').appendTo('#catalogoContainer')
                if (producto.precioOferta) {
                    var inicio = producto.fechaInicioOferta.replace(/\-/g, ',');
                    inicio = new Date(inicio);
                    var fin = producto.fechaFinOferta.replace(/\-/g, ',');
                    fin = new Date(fin);
                    var hoy = new Date();
                    hoy.setHours(0, 0, 0, 0);
                    if (inicio <= hoy && fin >= hoy) {
                        $('#' + producto.idproductos).find('.precio').addClass('precioSinOferta');
                        $('<p class="precioConOferta">Oferta: ' + producto.precioOferta + '</p>').appendTo('#' + producto.idproductos + ' .card-body');
                    }
                }
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
            if (producto.precioOferta) {
                var inicio = producto.fechaInicioOferta.replace(/\-/g, ',');
                inicio = new Date(inicio);
                var fin = producto.fechaFinOferta.replace(/\-/g, ',');
                fin = new Date(fin);
                var hoy = new Date();
                hoy.setHours(0, 0, 0, 0);
                if (inicio <= hoy && fin >= hoy) {
                    $('#precio').addClass('precioSinOferta');
                    $('<h3 id="oferta" class="precioConOferta">Oferta: ' + producto.precioOferta + '</h3>').insertAfter('#precio')
                }
            }
        }
    })
}
function paginacion(numero) {
    $('.portfolio-item').hide()
    $('.pagina' + numero).show()
    window.scrollTo(0, 0)
}
function agregarCarrito() {
    if (sessionStorage.getItem('carrito')) {
        var carrito = JSON.parse(sessionStorage.getItem('carrito'));
    } else {
        var carrito = [];
    }
    var productoActual = JSON.parse(sessionStorage.getItem('productoActual'))
    var producto = {
        id: productoActual.idproductos,
        nombre: productoActual.nombre,
        marca: productoActual.marca,
        imagen: productoActual.imagen,
    }
    if ($('#oferta').text()) {
        producto.precio = productoActual.precioOferta;
    } else {
        producto.precio = productoActual.precio;
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
//registrar Producto
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
function listarProductos() {
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
            productos.map(function (e) {
                var tr = document.createElement('tr');
                var nombre = document.createElement('td');
                $(nombre).text(e.nombre);
                $(tr).append(nombre);
                var descripcion = document.createElement('td');
                $(descripcion).text(e.descripcion);
                $(tr).append(descripcion);
                var modelo = document.createElement('td');
                $(modelo).text(e.modelo);
                $(tr).append(modelo);
                var precio = document.createElement('td');
                $(precio).text(e.precio);
                $(tr).append(precio);
                var marca = document.createElement('td');
                $(marca).text(e.marca);
                $(tr).append(marca);
                $('<td class="center"><a href="editarProducto.html?' + e.idproductos + '"><i class="far fa-edit fa-lg verde"></i></a></td>').appendTo(tr);
                $('<td class="center"><a href="agregarOferta.html?' + e.idproductos + '"><i class="fas fa-tags fa-lg azul"></i></a></td>').appendTo(tr);
                $('<td class="center"><a class="block" onclick="borrarProducto(' + e.idproductos + ')"><i class="fas fa-trash fa-lg rojo"></i></a></td>').appendTo(tr);
                $('#listaProductos').append(tr);
            })
        }
    });
}

function logout() {
    sessionStorage.removeItem('usuarioLogueado');
    window.location.href = 'index.html';
}
function traerProductoEditar(id) {
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
            const traerCategorias = async () => {
                const res = await fetch('../php/categoria.php?metodo=listar')
                const json = await res.json();
                json.map(function (e) {
                    $('<option value="' + e.idcategoria + '">' + e.nombre + '</option>').appendTo('#categoria');
                })
                $('select[name="categoria"]').val(producto.idCategoria);
            }
            traerCategorias();
            var producto = JSON.parse(producto_response);
            $('input[name="nombre"]').val(producto.nombre);
            $('input[name="descripcion"]').val(producto.descripcion);
            $('input[name="modelo"]').val(producto.modelo);
            $('input[name="marca"]').val(producto.marca);
            $('input[name="precio"]').val(producto.precio);
            $('input[name="cantidad"]').val(producto.cantidad);
            $('input[name="idproductos"]').val(producto.idproductos);
            var caracteristicas = producto.caracteristicas.split(';');
            $('input[name="carac1"]').val(caracteristicas[0]);
            if (caracteristicas.length > 1) {
                for (var i = 1; i < caracteristicas.length; i++) {
                    $('<div class="controls" ><input class="caracteristica" name="carac' + (i + 1) + '" type="text" value="' + caracteristicas[i] + '"><label id="quitar" onclick="quitar(this)"> <i class="fas fa-minus-square fa-lg"></i></label></div>').appendTo('#caracteristicas');
                }
            }
        }
    })
}
$("form#editarProducto").submit(function (e) {
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
function traerProductoOferta(id) {
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
            var productoActual = JSON.parse(producto_response);
            $('#nombre').append(productoActual.nombre);
            $('#modelo').append(productoActual.modelo);
            $('#marca').append(productoActual.marca);
            $('#id').val(productoActual.idproductos);
            $('#precio').append(productoActual.precio);
        }
    })
}

function agregarOferta() {
    var producto = {
        fechaInicioOferta: $('#fechaInicioOferta').val(),
        fechaFinOferta: $('#fechaFinOferta').val(),
        precioOferta: $('#precioOferta').val(),
        id: $('#id').val(),
        metodo: "agregarOferta"
    }
    $.ajax({
        url: "../php/producto.php",
        method: "POST",
        data: producto,
        error: function (xhr) {
            console.log(xhr.statusText)
        },
        success: function (producto_response) {
            alert(producto_response)
        }
    })
    return false;
}
function traerProductosPrincipal() {
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
            var i = 0;
            productos.map(function (producto) {
                if (producto.precioOferta) {
                    var inicio = producto.fechaInicioOferta.replace(/\-/g, ',');
                    inicio = new Date(inicio);
                    var fin = producto.fechaFinOferta.replace(/\-/g, ',');
                    fin = new Date(fin);
                    var hoy = new Date();
                    hoy.setHours(0, 0, 0, 0);
                    if (inicio <= hoy && fin >= hoy) {
                        $(`<div id="` + producto.idproductos + `" class="carousel-item" style="background-image: url('imgs/` + producto.imagen + `')">
                            <div class="carousel-caption d-none d-md-block">
                               <a href="producto.html?`+ producto.idproductos + `"> <h3 class="amarillo">` + producto.nombre + `</h3></a>
                                <p class="amarillo">`+ producto.descripcion + `</p>
                                <p class="amarillo">Oferta: `+ producto.precioOferta + `</p>
                            </div>
                        </div>`).appendTo('#carouselExampleIndicators .carousel-inner');
                        if (i == 0) {
                            $('#' + producto.idproductos).addClass('active');
                        }
                        $('<li data-target="#carouselExampleIndicators" data-slide-to="' + i + '" ></li>').appendTo('#carouselExampleIndicators .carousel-indicators');
                        i++;
                    }
                }
            })
        }
    });
}