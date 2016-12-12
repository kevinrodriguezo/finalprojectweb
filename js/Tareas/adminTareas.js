var tareas = [];

var Persister = {
	save: function (key, value) {
		localStorage.setItem(key, value);
	},
	load: function(key, default_value) {
		return localStorage.getItem(key) || default_value;
	},
	saveObj: function(key, value) {
		var json_string = JSON.stringify(value);
		this.save(key, json_string);
	},
	loadObj: function(key, default_value) {
		var json_string = this.load(key, default_value);
		return JSON.parse(json_string);
	}
};

function load_data() {
	tareas = Persister.loadObj('tareas', "[]");
	$('#tarea').html('');
	for (var i = 0; i < tareas.length; i++) {
		var link = '<a href="editProyectos.html">'+tareas[i].nombre+'</a>';
		$('#tarea').append('<div>' + tareas[i].nombre + '</div>');
			
	}
}

$(document).ready(function() 
{
	load_data();
	debugger;
	$('#guardar').click(function() {
		debugger;
		var id = $('#NombreProyecto').val();
		var nombre = $('#NombreProyecto').val();
		var descripcion = $('#fecha').val();
		var orden = $('#NumeroPersonas').val();
		var estado = "Start";
		tareas.push({id: id, desc: descripcion, orden: orden, estado:estado});
		Persister.saveObj('tareas', tareas);

		$('#tarea').append('<div>'+ nombre +'</div>');
	});
		
	function CerrarVentanaActual()
{
  window.close();
}
function AbrirNuevaVentana() {
	window.open("index.html");
}


});


