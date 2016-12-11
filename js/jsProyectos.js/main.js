var proyectos = [];

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
	proyectos = Persister.loadObj('proyectos', "[]");
	$('#proyectos').html('');
	for (var i = 0; i < proyectos.length; i++) {
		var link = '<a href="editProyectos.html">'+proyectos[i].nombre+'</a>';
		$('#proyectos').append('<li id=' + i + '>' + link + '</li>');
			
	}
}

$(document).ready(function() 
{
	load_data();
	debugger;
	$('#guardar').click(function() {
		debugger;
		var proyecto = $('#NombreProyecto').val();
		var fecha = $('#fecha').val();
		var per = $('#NumeroPersonas').val();
		var numPersonas = parseInt(per);
		var icon = $('#subirIcon').val();
		var estado = $('#Estado').val();
		proyectos.push({nombre: proyecto, fecha: fecha, numeroPers: numPersonas,
			icon: icon, estado: estado});
		Persister.saveObj('proyectos', proyectos);

		$('#proyectos').append('<li>'+ proyecto +'</li>');
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


