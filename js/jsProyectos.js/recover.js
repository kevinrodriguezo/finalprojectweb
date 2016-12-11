
$(document).ready(function () {
	debugger;
$('#proyectos').click(function() {
debugger;
	
	var proyectos = Persister.loadObj('proyectos', '[]');
	for (var i = 0;i < proyectos.length; i++) {
	var name = $(#i).val();
		if (i.NombreProyecto == name) {

		}
$('#NombreProyecto').val(localStorage[NombreProyecto]);
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
});
});