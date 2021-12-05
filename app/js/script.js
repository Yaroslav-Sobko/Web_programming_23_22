$(function() {
    // Create the chart
    chart = new Highcharts.Chart({
        chart: {
            color: '#fff',
            backgroundColor: '#ffffff',
            renderTo: 'container',
            type: 'pie'
        },
        title: {
            text: "Analysis",
            align:"left",
            style: {
                "color": "#555555",

            }
        },
        yAxis: {
            title: {
                text: 'Total percent market share'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                borderColor: null
            }
        },
        tooltip: {
            formatter: function() {
                return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
            }
        },
        legend: {
            align: 'right',
            layout: 'vertical',
            verticalAlign: 'middle',
            symbolRadius: 0,
            symbolPadding: 10,
            itemMarginTop: 40,
            itemStyle: {
                "color": "#000000"
            }
        },
        series: [{
            name: 'Browsers',
            data: [{
                y: 2,
                name: "Russia",
                color: "#65b5c2"
            }, {
                y: 2,
                name: "Italy",
                color: "#2e7bad"
            }, {
                y: 4,
                name: "Germany",
                color: "#23649e"
            }, {
                y: 3,
                name: "Other",
                color: "#63daed"
            },
                {
                    y: 3,
                    name: "United States",
                    color: "#3993bb"
                }],
            size: '70%',
            innerSize: '65%',
            showInLegend: true,
            dataLabels: {
                enabled: false
            },
            marker: {
                symbol: 'square',
                radius: 12
            }

        }]
    }, function(chart) {
        var textX = chart.plotLeft + (chart.plotWidth * 0.5);
        var textY = chart.plotTop + (chart.plotHeight * 0.52);

        var span = '<div id="pieChartInfoText" style="position:absolute; text-align:center;">';
        span += '<div style="color:black;font-size: 20px;width:50px">84.254</div>';
        span += '<div style="color:black;font-size: 15px;width:50px">VISITS</div><br>';
        span += '</div>';

        $("#addText").append(span);
        span = $('#pieChartInfoText');
        span.css('left', textX + (span.width() * -0.5));
        span.css('top', textY + (span.height() * -0.5));
    });
});




Highcharts.chart('container-2', {
    chart: {
        type: 'area'
    },
    title: {
        align: "left",
        text: 'Statistics'
    },
    xAxis: {
        categories: ['', '', '25', '', '50', '', '75', '', '100', '', '125', '', '150', '', '175', '', '200', '', '225', '', '250', '']
    },
    yAxis: {
        title: {
            text: null
        },
        // categories: ['0', '10', '20', '30', '40', '50', '60']
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    },
    tooltip: {
        split: false,
        valueSuffix: ''
    },
    plotOptions: {

        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: false,
        }
    },
    series: [{
        area:{
            borderRadius: 20
        },
        showInLegend: false,//нижні назви
        data: [1, 1, 1, 2, 5, 10, 4, 6, 6, 5, 43, 11, 15, 8, 7, 7, 6, 4, 3, 3, 1, 1],
        color: '#86d3ce',//колір фону
    }, {
        showInLegend: false,//нижні назви
        data: [1, 1, 1, 1, 1, 5, 3, 4, 7, 5, 12, 3, 10, 7, 4, 6, 3, 2, 1, 0, 0, 0],
        color: '#3993bb',//колір фону
    }]
});



Highcharts.chart('container-3', {
    chart: {
        type: 'area'
    },
    title: {
        align: "left",
        text: 'Statistics'
    },
    xAxis: {
        categories: ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','', ]
    },
    yAxis: {
        title: {
            text: null
        },
        // categories: ['0', '10', '20', '30', '40', '50', '60']
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    },
    tooltip: {
        split: false,
        valueSuffix: ''
    },
    plotOptions: {

        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: false,
        }
    },
    series: [{
        showInLegend: false,//нижні назви
        data: [39,37,47,39,43,35,32,34,29,32,36,38,39,36,47,39,43,35,32,34,29,32,36,38,39,36,47,39,43,35,32,34,29,32,36,38,
            39,35,47,39,43,35,32,34,29,32,36,38,29,25,37,29,33,25,22,24,19,12,9,18,19,17,27,19,13,15,22,14,29,22,16,18,],
        color: '#dcc2f1',//колір фону
    }, {
        showInLegend: false,//нижні назви
        data: [30,22,17,23,19,30,20,24,17,19,13,18,30,22,17,23,19,30,20,24,17,19,13,18,30,22,17,23,19,30,20,24,17,19,13,18,
            20,12,7,13,5,20,10,14,7,9,3,8,20,12,7,13,5,20,10,14,7,9,3,8,20,12,7,13,5,30,20,24,17,19,13,18,],
        color: '#90abe3',//колір фону
    }, {
        showInLegend: false,//нижні назви
        data: [9,6,11,10,6,10,5,10,9,8,10,6,9,6,11,10,6,10,5,10,9,8,10,6,9,6,11,10,6,10,5,10,9,8,10,6,
            9,6,11,10,6,10,5,10,9,8,10,6,9,6,11,10,6,10,5,10,9,8,10,6,9,6,11,10,6,10,5,10,9,8,10,6,],
        color: '#8db987',//колір фону
    }]
});