$(document).ready(function() {
	var data = [
        { name: 'Chucas', y: 20 },
        {name: 'Reventazon', y: 20},
        {name: 'San Carlos', y: 20 },
        {name: 'Regional Liberia', y: 20 },
        {name: 'Moin Limon', y: 20 },
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
            text: 'Porcentaje reportes por proyecto'
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
