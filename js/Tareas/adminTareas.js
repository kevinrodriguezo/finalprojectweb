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
		debugger;
		
		$('#tarea').append('<div id= ' +i+'  class="itemAdd" draggable="true" ondragstart="drag(event)" >' + tareas[i].nombre + '</div>');
		
			/*
		$('#tarea').append('<div id=' + i +'class="itemAdd" draggable="true" ondragstart="drag(event)"' '>' + tareas[i].nombre + '</div>');
		*/	
	}
}

$(document).ready(function()  
{
	load_data();
	debugger;
	$('#guardarTarea').click(function() {
		debugger;
		var nombre = $('#NombreTarea').val();
		var id = $('#Id').val();
		var descripcion = $('#Descripcion').val();
		var orden = $('#orden').val();
		tareas.push({nombre: nombre, id: id, descripcion: descripcion,
			orden: orden});
		Persister.saveObj('tareas', tareas);

		$('#tarea').append('<div class="itemAdd" draggable="true" ondragstart="drag(event)">'+ nombre +'</div>');
		AbrirNuevaVentana();
		CerrarVentanaActual();
	});

		
	function CerrarVentanaActual()
{
  window.close();
}
function AbrirNuevaVentana() {
	window.open("index.html");
}


});



