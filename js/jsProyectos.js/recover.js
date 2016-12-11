$(document).ready(function () {
	debugger;
function init() {
if (localStorage["nombre"]) {
$('#NombreProyecto').val(localStorage["nombre"]);
}
if (localStorage["fecha"]) {
$('#fecha').val(localStorage["email"]);
}
if (localStorage["message"]) {
$('#message').val(localStorage["message"]);
}
}
init();
});