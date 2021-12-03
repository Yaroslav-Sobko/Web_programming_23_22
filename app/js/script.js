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