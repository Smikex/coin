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
