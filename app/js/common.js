$('.table_coin').click(function() {
  $(this).children("div").toggleClass("border_left_none");
  });

// highcharts

  $.getJSON('js/data.json', function (data) {

  // customize
  Highcharts.setOptions({
  chart: {
  style: {
    fontFamily: 'OpenSans',

  }
  }
  });
        // create the chart
  Highcharts.stockChart('container', {
  rangeSelector: {
  selected: 1
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
        ], [
            'month',
            [1, 2, 3, 4, 6]
        ]
    ]
  }
  }]
  });
  });

  $.getJSON('js/data.json', function (data) {

  // customize
  Highcharts.setOptions({
  chart: {
  style: {
    fontFamily: 'OpenSans',

  }
  }
  });
        // create the chart
  Highcharts.stockChart('container2', {
  rangeSelector: {
  selected: 1
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
        ], [
            'month',
            [1, 2, 3, 4, 6]
        ]
    ]
  }
  }]
  });
  });


  $.getJSON('js/data.json', function (data) {

  // customize
  Highcharts.setOptions({
  chart: {
  style: {
    fontFamily: 'OpenSans',

  }
  }
  });
        // create the chart
  Highcharts.stockChart('container3', {
  rangeSelector: {
  selected: 1
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
        ], [
            'month',
            [1, 2, 3, 4, 6]
        ]
    ]
  }
  }]
  });
  });



  // chart comparison



      var seriesOptions = [],
        seriesCounter = 0,
        names = ['BTC','MSFT', 'AAPL', 'GOOG'];

      /**
       * Create the chart when all data is loaded
       * @returns {undefined}
       */
      function createChart() {

        Highcharts.stockChart('compare_chart', {

          chart:{
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
            padding:40,
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
            selected: 4
          },
          colors: ['#79b54d', '#414b56', '#ff4504'],
          yAxis: {

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
