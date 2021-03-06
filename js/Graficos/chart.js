$(document).ready(function() {
	var data = [
        { name: 'Recoger Basura', y: 20 },
        {name: 'Hacer hueco', y: 20},
        {name: 'Pegar Clavos', y: 20 },
        {name: 'Comprar Concreto', y: 20 },
        {name: 'Francisco', y: 20 },
        {name: 'Pintar pared', y: 20 }
    ]
    draw_chart('chart-container', data);
});

function draw_chart(selector, data) {
	Highcharts.chart(selector, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Porcentaje de tareas por estado'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: data
        }]
    });
}
