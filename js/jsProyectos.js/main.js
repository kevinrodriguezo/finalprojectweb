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
		$('#proyectos').append('<li>' + proyectos[i].nombre + '</li>');
	}
}

$(document).ready(function() 
{
	load_data();
	$('#guardar').click(function(event) {
		var proyecto = $('#NombreProyecto').val();
		animales.push({nombre: proyecto});
		Persister.saveObj('animales', animales);
		$('#proyectos').append('<li>' + proyecto + '</li>');
	});

});

