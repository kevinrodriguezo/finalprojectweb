$(document).ready(function () {
	debugger;
$('#proyectos').click(function() {
debugger;
	 var index = $(this).index()-2;
	var proyectos = Persister.loadObj('proyectos', '[]');
	for (var i = 0;i < proyectos.length; i++) {
		if (i == index) {
			$('#NombreProyectoE').val("	nombre");
			var a = proyectos[i].nombre;
			$('#NombreProyecto')document.setElementById.innerHTML = a;
			$('#formulario').append('<input id=' +i+ ' type="text" value=' +a+ '>');
			$('#NombreProyectoE').text('some text');
			$('#NombreProyectoE').html('<p>' +proyectos[i].nombre+' </p>');
		}

	}




/*
$('#NombreProyecto').val(localStorage[NombreProyecto]);
	{

	}
if (localStorage[i].NombreProyecto) {
$('#NombreProyecto').val(localStorage[NombreProyecto]);
}
if (localStorage["fecha"]) {
$('#fecha').val(localStorage["email"]);
}
if (localStorage["message"]) {
$('#message').val(localStorage["message"]);
}
*/
});
});