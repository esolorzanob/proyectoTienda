var usuarioGuardado = sessionStorage.getItem('usuarioLogueado');
if (usuarioGuardado) {
    usuarioGuardado = JSON.parse(usuarioGuardado);
    $('#login').text(usuarioGuardado.usuario);
    $('#login').parent().addClass('dropdown');
    $('#login').addClass('dropdown-toggle');
    $('#login').attr('href', '#');
    $('#login').attr('data-toggle', 'dropdown');
    $('#login').attr('aria-haspopup', 'true');
    $('#login').attr('aria-expanded', 'false');
    var div = document.createElement('div');
    $(div).addClass('dropdown-menu', 'dropdown-menu-right');
    $(div).attr('aria-labelledby', 'login');
    $('<a class="dropdown-item" href="miperfil.html">Mi Perfil</a>').appendTo(div);
    $('<a class="dropdown-item" href="misordenes.html">Mis Ordenes</a>').appendTo(div);
    $('<a class="dropdown-item" href="javascript:void(0);" onclick="logout()">Logout</a>').appendTo(div);
    $('#login').parent().append(div);
    $('#nombre').text(usuarioGuardado.nombre);
    $('#usuario').append(usuarioGuardado.usuario);
    $('#correo').append(usuarioGuardado.correo);
    $('#direccion').append(usuarioGuardado.direccion || 'No especificado');
    $('#telefono').append(usuarioGuardado.telefono || 'No especificado');
}
