var personas = [];

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
	personas = Persister.loadObj('personas', "[]");
	$('#personas').html('');
	for (var i = 0; i < personas.length; i++) {
		var link = '<a href="editarPersona.html">'+personas[i].nombre+'</a>';
		$('#personas').append('<li id=' + i + '>' + link + '</li>');
			
	}
}

$(document).ready(function() 
{
	load_data();
	debugger;
	$('#guardar').click(function() {
		debugger;
		var nombre = $('#Nombre').val();
		var avatar = $('#subirAvatar').val();
		var proyectoAsoc = $('#ProyectoAsociar').val();
		personas.push({nombre: nombre, avatar: avatar, proyectoAsociado: proyectoAsoc});
		Persister.saveObj('personas', personas);

		$('#personas').append('<li>'+ nombre +'</li>');
		AbrirNuevaVentana();
		CerrarVentanaActual();
	});

	
	function CerrarVentanaActual()
{
  window.close();
}
function AbrirNuevaVentana() {
	window.open("indexPers.html");
}


});


