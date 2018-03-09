$('.table_coin').click(function() {
  $(this).children("div").toggleClass("border_left_none");
});

// page indexes
$('#buy_btc_button').click(function() {
  $("#first").removeClass('show active');
  $('#deposit').addClass('show active');
  $(".modal_left_up").show();
  $('#modal_tab li:nth-child(1)').css('background-color', '#202129')

});
$('#awaiting-exchange').click(function() {
  $("#deposit").removeClass('show active')
  $("#exchange").addClass('show active');
  $('#modal_tab li:nth-child(2)').css('background-color', '#202129')
  $('#exchange-tab').attr("href", "#exchange");

});
$('#buy_btc_button_3').click(function() {
  $("#exchange").removeClass('show active')
  $("#complete").addClass('show active');
  $('#modal_tab li:nth-child(3)').css('background-color', '#202129')
  $('#complete-tab').attr("href", "#complete");
});



// highcharts first

$.getJSON('js/data.json', function(data) {

  // create the chart
  Highcharts.stockChart('container', {
    navigator: {
      enabled: false
    },

    title: {
      text: 'Bitcoin Cash, BCH /  Dollar, USD',
      align: 'left',
      style: {
        "color": "#222222",
        "fontSize": "35px",
        "fontWeight": "300"
      }
    },
    style: {
      "fontFamily": "OpenSans",
    },

    yAxis: {
      opposite: false,
      offset: 60,
      labels: {
        align: 'left',
        x: 0,
        style: {
          "fontSize": "12px",
          "color": "#28292b",

        }
      }
    },

    rangeSelector: {
      buttonTheme: {
        visibility: 'hidden'
      },
      selected: 1,
      labelStyle: {
        visibility: 'hidden'
      },

    },
    series: [{
      type: 'candlestick',
      name: 'AAPL Stock Price',
      data: data,
      dataGrouping: {
        units: [
          [
            'week', // unit name
            [1] // allowed multiples
          ],
          [
            'month', [1, 2, 3, 4, 6]
          ]
        ]
      }
    }]
  });


});

// graph 2


$.getJSON('js/data.json', function(data) {

  // create the chart
  Highcharts.stockChart('graph2', {
    navigator: {
      enabled: false
    },

    title: {
      text: 'Bitcoin Cash, BCH /  Dollar, USD',
      align: 'left',
      style: {
        "color": "#222222",
        "fontSize": "35px",
        "fontWeight": "300"
      }
    },
    style: {
      "fontFamily": "OpenSans",
    },

    yAxis: {
      opposite: false,
      offset: 60,
      labels: {
        align: 'left',
        x: 0,
        style: {
          "fontSize": "12px",
          "color": "#28292b",

        }
      }
    },

    rangeSelector: {
      buttonTheme: {
        visibility: 'hidden'
      },
      selected: 1,
      labelStyle: {
        visibility: 'hidden'
      },

    },
    series: [{
      type: 'candlestick',
      name: 'AAPL Stock Price',
      data: data,
      dataGrouping: {
        units: [
          [
            'week', // unit name
            [1] // allowed multiples
          ],
          [
            'month', [1, 2, 3, 4, 6]
          ]
        ]
      }
    }]
  });


});


$.getJSON('js/data.json', function(data) {

  Highcharts.stockChart('container3', {
    navigator: {
      enabled: false
    },

    title: {
      text: 'Bitcoin Cash, BCH /  Dollar, USD',
      align: 'left',
      style: {
        "color": "#222222",
        "fontSize": "35px",
        "fontWeight": "300"
      }
    },
    style: {
      "fontFamily": "OpenSans",
    },
    yAxis: {
      opposite: false,
      offset: 60,
      labels: {
        align: 'left',
        x: 0,
        style: {
          "fontSize": "12px",
          "color": "#28292b",

        }
      }
    },

    rangeSelector: {
      buttonTheme: {
        visibility: 'hidden'
      },
      selected: 1,
      labelStyle: {
        visibility: 'hidden'
      },

    },
    series: [{
      type: 'candlestick',
      name: 'AAPL Stock Price',
      data: data,
      dataGrouping: {
        units: [
          [
            'week', // unit name
            [1] // allowed multiples
          ],
          [
            'month', [1, 2, 3, 4, 6]
          ]
        ]
      }
    }]
  });


});

// chart comparison
var seriesOptions = [],
  seriesCounter = 0,
  names = ['BTC', 'MSFT', 'AAPL', 'GOOG'];

/**
 * Create the chart when all data is loaded
 * @returns {undefined}
 */
function createChart() {

  Highcharts.stockChart('compare_chart', {

    chart: {
      // spacingTop: 10,
    },

    title: {
      text: 'Cryptocurrency Comparison',
      align: 'left',
      // y: -10,
      // margin: 40,
      style: {
        "color": "#222222",
        "fontSize": "35px",
        "fontWeight": "300"
      }
    },
    style: {
      "fontFamily": "OpenSans",
    },
    legend: {
      itemStyle: {
        "fontSize": "14px",
        "fontWeight": "normal"
      },
      itemMargin: 10,
      padding: 40,
      enabled: true,
      title: {
        text: 'Choose Cryptocurency      <br> for Composition',
        style: {
          "color": "#222222",
          "font-size": "14px",
          "line-height": "15px",
          "fontWeight": "bold",
          "margin": "50px"
        }
      },
      align: 'right',
      verticalAlign: 'top',
      layout: 'vertical',
      x: 0,
      y: 100,
      borderColor: '#dbdbdb',
      borderWidth: 1,
    },
    rangeSelector: {
      selected: 0
    },
    colors: ['#79b54d', '#414b56', '#ff4504'],
    yAxis: {
      opposite:false,
      labels: {
        formatter: function() {
          return (this.value > 0 ? ' + ' : '') + this.value + '%';
        }
      },
      plotLines: [{
        value: 0,
        width: 2,
        color: 'silver'
      }]
    },
    navigator: {
      enabled: false
    },

    plotOptions: {
      series: {
        compare: 'percent',
        showInNavigator: true,
        marker: {
            enabled: true,
          fillColor: '#FFFFFF',
          radius: 4,
          lineWidth: 2,
          lineColor: null,
          symbol: 'circle',
          states: {
            hover: {
              radiusPlus: 3,
              lineWidthPlus: 2,
              // lineWidth: "5px",
              // lineColor: "#fff"
            }
          },
        }
      }

    },


    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
      valueDecimals: 2,
      split: true
    },

    series: seriesOptions,
  });
}

$.each(names, function(i, name) {

  $.getJSON('js/' + name.toLowerCase() + '-c.json', function(data) {

    seriesOptions[i] = {
      type: 'spline',
      name: name,
      data: data,

    };

    seriesCounter += 1;

    if (seriesCounter === names.length) {
      createChart();
    }
  });
});


// chart Indexes

$.getJSON('js/indexes-c.json', function(data) {

  // Create the chart
  Highcharts.stockChart('coin_chart', {
    navigator: {
      enabled: false
    },
    rangeSelector: {
      selected: 0
    },
    title: {
      text: 'Bitcoin, BTC / Dollar, USD',
      align: 'left',
      style: {
        "color": "#222222",
        "fontSize": "35px",
        "fontWeight": "300"
      }
    },
    colors: ['rgba(121, 181, 77, 0.5)', ],
    plotOptions: {
      series: {
        marker: {
          enabled: true,
          radius: 4,

        }
      }
    },
      yAxis: {
         opposite:false,
         offset: 60,
        labels: {
            align: 'left',
            x: 0,
            style: {
              "fontSize": "12px",
                "color": "#28292b",

            }          }
      },

    series: [{
        name: 'AAPL Stock Price',
        data: data,
        type: 'area',
        threshold: null,
        id: 'dataseries',
        tooltip: {
          valueDecimals: 2
        },
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          fillColor: '#FFFFFF',
          lineWidth: 1,
          lineColor: null,
          symbol: 'circle',
          states: {
            hover: {
              radiusPlus: 1,
              lineWidthPlus: 2,
            }
          },
        },
      },

      {
        type: 'flags',
        y: -14,
        shape: 'url(img/marker_n.png)',
        data: [{
          x: Date.UTC(2017, 11, 6),
          title: ' ',
          text: 'Stocks fall on Greece, rate concerns; US dollar dips'
        }, {
          x: Date.UTC(2017, 11, 12),
          title: ' ',
          text: 'Zimbabwe ditches \'worthless\' currency for the US dollar '
        }, {
          x: Date.UTC(2017, 11, 4),
          title: ' ',
          text: 'US Dollar Declines Over the Week on Rate Timeline'
        }, {
          x: Date.UTC(2017, 11, 8),
          title: ' ',
          text: 'Greek Negotiations Take Sharp Turn for Worse, US Dollar set to Rally '
        }, {
          x: Date.UTC(2017, 11, 15),
          title: ' ',
          text: 'Euro records stunning reversal against dollar'
        }, {
          x: Date.UTC(2017, 11, 17),
          title: ' ',
          text: 'Surging US dollar curbs global IT spend'
        }],
        onSeries: 'dataseries',
        // shape: 'circlepin',
        width: 16
      }

    ]
  });
});


// portfolio_chart



  $.getJSON('js/portfoli-c.json', function (data) {

    // Create the chart
    Highcharts.stockChart('portfolio_chart', {
      navigator: {
        enabled: false
      },
        rangeSelector: {
            selected: 1
        },

        navigation: {
    buttonOptions: {
        enabled: false
    }
},
        title: {
            text: ' '
        },
         colors: [ "#79b54d"],
         yAxis: {
            opposite:false,
            offset: 60,
           labels: {
               align: 'left',
               x: 0,
               style: {
                 "fontSize": "12px",
                   "color": "#28292b",
               }          }
         },
        series: [{
          marker: {
            fillColor: '#FFFFFF',
            lineWidth: 2,
            lineColor: null,
            symbol: 'circle',
            states: {
              hover: {
                radiusPlus: 3,
                lineWidthPlus: 2,
                // lineWidth: "5px",
                // lineColor: "#fff"
              }
            },
          },
            name: ' ',
            data: data,
            type: 'areaspline',
            threshold: null,
            tooltip: {
                valueDecimals: 2
            },
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
            }
        }]
    });
});
