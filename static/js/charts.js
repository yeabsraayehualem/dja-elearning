$(document).ready(function(){
// round corners
Chart.pluginService.register({
  afterUpdate: function (chart) {
    for (let i = 1; i < chart.config.data.labels.length; i++) {
      var arc = chart.getDatasetMeta(0).data[i];
      arc.round = {
        x: (chart.chartArea.left + chart.chartArea.right) / 2,
        y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
        radius: (chart.outerRadius + chart.innerRadius) / 2,
        thickness: (chart.outerRadius - chart.innerRadius) / 2 - 1,
        backgroundColor: arc._model.backgroundColor,
      };
    }
    // Draw rounded corners for first item
    var arc = chart.getDatasetMeta(0).data[0];
    arc.round = {
      x: (chart.chartArea.left + chart.chartArea.right) / 2,
      y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
      radius: (chart.outerRadius + chart.innerRadius) / 2,
      thickness: (chart.outerRadius - chart.innerRadius) / 2 - 1,
      backgroundColor: arc._model.backgroundColor,
    };
  },

  afterDraw: function (chart) {
    for (let i = 0; i < chart.config.data.labels.length; i++) {
      var ctx = chart.chart.ctx;
      var arc = chart.getDatasetMeta(0).data[i]; // Add 'var' or 'let' to properly declare the 'arc' variable.
      if (arc && arc.round) {
        var startAngle = Math.PI / 2 - arc._view.startAngle;
        var endAngle = Math.PI / 2 - arc._view.endAngle;
        ctx.save();
        ctx.translate(arc.round.x, arc.round.y);
        ctx.fillStyle = arc.round.backgroundColor;
        ctx.beginPath();
        ctx.arc(
          arc.round.radius * Math.sin(endAngle),
          arc.round.radius * Math.cos(endAngle),
          arc.round.thickness,
          0,
          2 * Math.PI
        );
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }
  },
});

var config = {
  type: "doughnut",
  data: {
    labels: ["Fashion", "Sports", "Technology", "Other"],
    datasets: [
      {
        data: [30, 18, 89, 25],
        backgroundColor: ["#476568", "#1A2526", "#BAEDBD", "#9CB8BB"],
        hoverBackgroundColor: ["#476568", "#1A2526", "#BAEDBD", "#9CB8BB"],
        borderWidth: 0,
        borderColor: ["#476568", "#1A2526", "#BAEDBD", "#9CB8BB"],
        hoverBorderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    legend: {
      position: "right",
      reverse: true,
      labels: {
        fontSize: 10,
        fontColor: "#858d9d",
      },
    },
    tooltips: {
      enabled: true,
    },
    cutoutPercentage: 78,
    rotation: -0.5 * Math.PI,
    circumference: 2 * Math.PI,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
};
window.onload = function () {
  var ctx = document.getElementById("myChart").getContext("2d");
  window.myDoughnut = new Chart(ctx, config);
  var salesByCtx = document.getElementById("salesby-traffic").getContext("2d");
  salesByCtx.canvas.parentNode.style.height = '320px';
  salesByCtx.canvas.parentNode.style.width = '320px';
  window.myDoughnut = new Chart(salesByCtx, salesbyConfig);
};

anychart.onDocumentReady(function () {
  // create data
  var data = [
    {
      x: "Jan",
      value: 5000,
      normal: {
        fill: "#BDD0D2",
        stroke: "#BDD0D2",
        label: { enabled: false },
      },
      hovered: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
      selected: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
    },
    {
      x: "Feb",
      value: 3000,
      normal: {
        fill: "#BDD0D2",
        stroke: "#BDD0D2",
        label: { enabled: false },
      },
      hovered: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
      selected: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
    },
    {
      x: "Mar",
      value: 4600,
      normal: {
        fill: "#BDD0D2",
        stroke: "#BDD0D2",
        label: { enabled: false },
      },
      hovered: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
      selected: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
    },
    {
      x: "Apr",
      value: 3000,
      normal: {
        fill: "#BDD0D2",
        stroke: "#BDD0D2",
        label: { enabled: false },
      },
      hovered: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
      selected: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
    },
    {
      x: "May",
      value: 2500,
      normal: {
        fill: "#BDD0D2",
        stroke: "#BDD0D2",
        label: { enabled: false },
      },
      hovered: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
      selected: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
    },
    {
      x: "Jun",
      value: 5000,
      normal: {
        fill: "#BDD0D2",
        stroke: "#BDD0D2",
        label: { enabled: false },
      },
      hovered: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
      selected: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
    },
  ];

  // create a chart
  var chart = anychart.column();

  // create a column series and set the data
  if ($("#container").length > 0) {
  var series = chart.column(data);
  // set the container id
  chart.container("container");
  // initiate drawing the chart
  chart.draw();
  }
});

anychart.onDocumentReady(function () {
  // create data
  var item = [
    {
      x: "Jan",
      value: 5000,
      normal: {
        fill: "#BDD0D2",
        stroke: "#BDD0D2",
        label: { enabled: false },
      },
      hovered: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
      selected: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
    },
    {
      x: "Feb",
      value: 3000,
      normal: {
        fill: "#BDD0D2",
        stroke: "#BDD0D2",
        label: { enabled: false },
      },
      hovered: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
      selected: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
    },
    {
      x: "Mar",
      value: 4600,
      normal: {
        fill: "#BDD0D2",
        stroke: "#BDD0D2",
        label: { enabled: false },
      },
      hovered: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
      selected: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
    },
    {
      x: "Apr",
      value: 3000,
      normal: {
        fill: "#BDD0D2",
        stroke: "#BDD0D2",
        label: { enabled: false },
      },
      hovered: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
      selected: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
    },
    {
      x: "May",
      value: 2500,
      normal: {
        fill: "#BDD0D2",
        stroke: "#BDD0D2",
        label: { enabled: false },
      },
      hovered: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
      selected: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
    },
    {
      x: "Jun",
      value: 5000,
      normal: {
        fill: "#BDD0D2",
        stroke: "#BDD0D2",
        label: { enabled: false },
      },
      hovered: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
      selected: {
        fill: "#1A2526",
        stroke: "#1A2526",
        label: { enabled: false },
      },
    },
  ];

  // create a chart
  var chart2 = anychart.column();

  // create a column series and set the data
  var series = chart2.column(item);
  if ($("#container2").length > 0) {
    // set the container id
    chart2.container("container2");
    // initiate drawing the chart
    chart2.draw();
  }
});

// order this month 1st chart
var options = {
    chart: {
        width: "100%",
        height: 130,
        type: "area",
        toolbar: { show: false },
        events: {
          mounted: (chart) => {
            chart.windowResizeHandler();
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        borderColor: "#E5E7EB",
        strokeDashArray: 6,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      colors: ["#142762"],
      series: [
        {
          name: "Series 1",
          data: [45, 52, 38, 45, 19, 23, ]
        }
      ],
      fill: { type: "gradient", colors: [ '#EDEFF3', '#EDEFF3'], gradient: { shadeIntensity: 1, opacityFrom: 1, opacityTo: 1, stops: [50, 100, 0] } },
        xaxis: {
            categories: [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            ],
        },
        yaxis: {
          show: false,
        },
        plotOptions: {
          bar: {
            columnWidth: "100%"
          }
        },
  };
  if ($("#month-order").length > 0) {
    var monthOorder = new ApexCharts(document.getElementById("month-order"), options);
    monthOorder.render();
  }
  
// order this month 1st chart
// order this month 2st chart
var options2 = {
  chart: {
      width: "100%",
      height: 130,
      type: "area",
      toolbar: { show: false },
      events: {
        mounted: (chart) => {
          chart.windowResizeHandler();
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 6,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    colors: ["#142762"],
    series: [
      {
        name: "Series 1",
        data: [45, 52, 38, 45, 19, 23, ]
      }
    ],
    fill: { type: "gradient", colors: ['#EDEFF3', '#EDEFF3'], gradient: { shadeIntensity: 1, opacityFrom: 1, opacityTo: 1, stops: [50, 100, 0] } },
      xaxis: {
          categories: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          ],
      },
      yaxis: {
        show: false,
      },
      plotOptions: {
        bar: {
          columnWidth: "100%"
        }
      },
};

if ($("#month-order2").length > 0) {
  var monthOorder2 = new ApexCharts(document.getElementById("month-order2"), options2);
  monthOorder2.render();
}

// order this month 2st chart

// order this month 3rd chart
// const yValues = [20, 35, 15, 40, 25, 50];
var options3 = {
  chart: {
      width: "100%",
      height: 350,
      type: "area",
      toolbar: { show: false },
      events: {
        mounted: (chart) => {
          chart.windowResizeHandler();
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 6,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    colors: ["rgba(123, 59, 155, 0.17)"],
    series: [
      {
        name: "Series 1",
        data: [350, 450, 430, 400, 450, 570, 545, 200, 332, 400 ]
      }
    ],
    fill: { type: "gradient", colors: ['#5C3361', '#7B3B9B'], gradient: { shadeIntensity: 1, opacityFrom: 1, opacityTo: 1, stops: [50, 100, 0] } },
      xaxis: {
          categories: [
          "11JUN",
          "12JUN",
          "13JUN",
          "14JUN",
          "15JUN",
          "16JUN",
          "17JUN",
          "18JUN",
          "19JUN",
          "20JUN",
          ],
      },
      yaxis: {
        show: true,
        labels: {
          formatter: function (yValues) {
              return yValues; // Custom y-axis label format
          }
      }
      },
      plotOptions: {
        bar: {
          columnWidth: "100%"
        }
      },
};

if ($("#month-order3").length > 0) {
  var monthOorder3 = new ApexCharts(document.getElementById("month-order3"), options3);
  monthOorder3.render();
}
// order this month 3rd chart

// order this month 3rd chart
var options4 = {
  chart: {
      width: "100%",
      height: 350,
      type: "area",
      toolbar: { show: false }
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      borderColor: "#5C3361",
      strokeDashArray: 6,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    colors: ["#142762", "#23A6F0"],
    series: [
      {
        name: "Series 1",
        data: [45, 52, 38, 45, 39, 40, 45, 58, 55, 45, 32, 30 ]
      },
      {
        name: "Series 2",
        data: [44, 58, 50, 40, 45, 48, 40, 45, 42, 37, 32, 25 ]
      }
    ],
    fill: { type: "gradient", colors: ['#EDEFF3', '#EDEFF3'], gradient: { shadeIntensity: 0, opacityFrom: 0, opacityTo: 0, stops: [50, 100, 0] } },
      xaxis: {
          categories: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JULY",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
          ],
      },
      yaxis: {
        show: false,
      },
      plotOptions: {
        bar: {
          columnWidth: "100%"
        }
      },
};
if ($("#month-order4").length > 0) {
  var monthOorder4 = new ApexCharts(document.getElementById("month-order4"), options4);
  monthOorder4.render();
}

// order this month 4rd chart

// sale this month
var options = {
  chart: {
      width: "100%",
      height: 280,
      type: "area",
      toolbar: { show: false },
      events: {
        mounted: (chart) => {
          chart.windowResizeHandler();
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#142762"],
    series: [
      {
        name: "Sales This Month",
        data: ["1", "1k", "2k", "3k", "4k", "5k","5K", "4k", "4k", "3k", "3k", "3k","5k"]
      }
    ],
    fill: { type: "gradient", colors: ['#EEF3F7', '#EEF3F7', '#EEF3F7'], gradient: { shadeIntensity: 1, opacityFrom: 1, opacityTo: 1, stops: [50, 100, 0] } },
    xaxis: {
      categories: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC"
      ],
      tickAmount: 12,
      min: 1,
      max: 12
  },
  yaxis: {
    min: 0,
    max: 5,
    tickAmount: 5
  }
};
if ($("#month-sale").length > 0) {
  var monthSales = new ApexCharts(document.getElementById("month-sale"), options);
  monthSales.render();
}

// Orders This Month

// total revenue
var chart = {
  series: [
    {
      name: "Earning",
      data: ["22000K", "4000K", "6000K", "8000K", "10000K"],
    }
  ],
  chart: {
    toolbar: {
      show: false,
    },
    type: "bar",
    height: 320,
    stacked: true,
    events: {
      mounted: (chart) => {
        chart.windowResizeHandler();
      }
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      barHeight: "60%",
      columnWidth: "50%",
      borderRadius: [4],
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'all'
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    colors: '#142762'
  },
  grid: {
    borderColor: "#E5E7EB",
    strokeDashArray: 6,
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  yaxis: {
    min: -5,
    max: 5,
    labels: {
      style: {
        colors: 'var(--secondary-text)',
        fontSize: 'var(--fs-12)',
        fontWeight: '500'
    }
  },
    title: {
      // text: 'Age',
    },
  },
  xaxis: {
    categories: [
    "8K",
    "15K",
    "30K",
    "5K",
    "15K"
    ],
    tickAmount: 12,
    min: 1,
    max: 12,
    labels: {
        style: {
          colors: 'var(--secondary-text)',
          fontSize: 'var(--fs-12)',
          fontWeight: '500'
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
},
  yaxis: {
    tickAmount: 4,
  },
  tooltip: {
    theme: "dark",
  },
};
if ($("#total-revenue").length > 0) {
  var chart = new ApexCharts(document.getElementById("total-revenue"), chart);
  chart.render();
}
// total revenue

// total revenue
var chart2 = {
  series: [
    {
      name: "Product 1",
      data: ["8000K", "4000K", "6000K", "8000K", "10000K"],
    },
    {
      name: "Product 2",
      data: ["5000K", "2000K", "3000K", "4000K", "5000K"],
    },
    {
      name: "Product 3",
      data: ["6500K", "2500K", "4500K", "4000K", "7500K"],
    }
  ],
  chart: {
    toolbar: {
      show: false,
    },
    type: "bar",
    foreColor: "#D1D5DB",
    height: 320,
    stacked: true,
    events: {
      mounted: (chart) => {
        chart.windowResizeHandler();
      }
    }
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'center',
    align: 'center',
    show: true,
  },
  colors: ['#142762', '#B6BCCE', '#E9ECEF'],
  plotOptions: {
    bar: {
      horizontal: false,
      barHeight: "60%",
      columnWidth: "50%",
      borderRadius: [4],
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'all'
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    colors: ['#142762', '#B6BCCE', '#E9ECEF']
  },
  grid: {
    borderColor: "#E5E7EB",
    strokeDashArray: 6,
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  yaxis: {
    min: -5,
    max: 5,
    labels: {
      style: {
        colors: 'var(--secondary-text)',
        fontSize: 'var(--fs-12)',
        fontWeight: '500'
    }
  }
  },
  xaxis: {
    categories: [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY"
    ],
    tickAmount: 12,
    min: 1,
    max: 12,
    labels: {
        style: {
          colors: 'var(--secondary-text)',
          fontSize: 'var(--fs-12)',
          fontWeight: '500'
      }
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
},
  yaxis: {
    tickAmount: 4,
  },
  tooltip: {
    theme: "dark",
  },
};
if($("#total-revenue2").length > 0) {
  var chart2 = new ApexCharts(document.getElementById("total-revenue2"), chart2);
  chart2.render();
}
// total revenue


// Sales by traffic
var salesbyConfig = {
  height:320,
  type: "doughnut",
  data: {
    labels: ["YouTube", "Google", "Facebook", "Instagram"],
    datasets: [
      {
        data: [30, 18, 89, 25],
        backgroundColor: ["#DD2724", "#34A853", "#1877F2", "#C5257E"],
        // hoverBackgroundColor: ["#476568", "#1A2526", "#BAEDBD", "#9CB8BB"],
        borderWidth: 0,
        borderColor: ["#F7F9FB", "#F7F9FB", "#F7F9FB", "#F7F9FB"],
        hoverBorderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      enabled: true,
    },
    cutoutPercentage: 78,
    rotation: -0.5 * Math.PI,
    circumference: 2 * Math.PI,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
};
// Sales by traffic


// Discounted Product Sales
var discountedProdcut = {
  chart: {
    id: 'spark3',
    group: 'sparks',
    type: 'area',
    height: 250,
    width:"100%",
    toolbar: { show: false }
  },
  dataLabels: {
    enabled: false // Set this to false to hide data labels
  },
  series: [{
    data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
  }],
  stroke: {
    curve: 'straight'
  },
  fill: { type: "gradient", colors: ['#DEE7E8', '#9CB8BB', '#FFFFFF'], gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.7, stops: [50, 100, 0] } },
  grid: {
    borderColor: "#E5E7EB",
    strokeDashArray: 6,
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  colors: ['#344A4C'],
  xaxis: {
    crosshairs: {
      width: 1
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
  },
}
if ($("#discounted-prodcut").length > 0) {
  var discountedProdcut = new ApexCharts(document.getElementById("discounted-prodcut"), discountedProdcut);
  discountedProdcut.render();
}
// Discounted Product Sales






// Create chart instance
var chart = am4core.create("chartdiv", am4charts.PieChart);
chart.height = 290; 
// Add data
chart.data = [{
  "country": "Pass",
  "value": 500
}, {
  "country": "In Progress",
  "value": 170
}, {
  "country": "Fail",
  "value": 200
}];

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "value";
pieSeries.dataFields.category = "country";
pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;

// Set custom colors for the chart slices
pieSeries.colors.list = [
  am4core.color("#5B1A68"),
  am4core.color("#AE3A76"),
  am4core.color("#D1BED5"),
];

chart.legend = new am4charts.Legend();
chart.legend.position = "bottom";

chart.innerRadius = am4core.percent(0);

var label = pieSeries.createChild(am4core.Label);
label.text = "Total Value 100%";
label.horizontalCenter = "middle";
label.verticalCenter = "middle";
label.fontSize = 14;
label.color = "red";


// Create second chart instance
var chart2 = am4core.create("chartdiv2", am4charts.PieChart);
chart2.height = 320; 
// Add data
chart2.data = [{
  "country": "Quiz",
  "value": 500
}, {
  "country": "Exams ",
  "value": 170
}, {
  "country": "Assignments",
  "value": 200
}, {
  "country": "Assessments ",
  "value": 120
}];

// Add and configure Series
var pieSeries2 = chart2.series.push(new am4charts.PieSeries());
pieSeries2.dataFields.value = "value";
pieSeries2.dataFields.category = "country";
pieSeries2.labels.template.disabled = true;
pieSeries2.ticks.template.disabled = true;

// Set custom colors for the chart slices
pieSeries2.colors.list = [
  am4core.color("#5B1A68"),
  am4core.color("#783885"),
  am4core.color("#8C5B97"),
  am4core.color("#D1BED5"),
];

chart2.legend = new am4charts.Legend();
chart2.legend.position = "bottom";

chart2.innerRadius = am4core.percent(60);

var label2 = pieSeries2.createChild(am4core.Label);
label2.text = "160k";
label2.horizontalCenter = "middle";
label2.verticalCenter = "middle";
label2.fontSize = 10;
  label2.color = "red";
  
  // Create thir3 chart instance
var chart3 = am4core.create("chartdiv3", am4charts.PieChart);

// Add data
chart3.data = [{
  "country": "Pass",
  "value": 201.9,
}, {
  "country": "In Progress",
  "value": 201.9
}, {
  "country": "Fail",
  "value": 201.1
}];

// Add and configure Series
var pieSeries3 = chart3.series.push(new am4charts.PieSeries());
pieSeries3.dataFields.value = "value";
pieSeries3.dataFields.category = "country";
pieSeries3.labels.template.disabled = true;
pieSeries3.ticks.template.disabled = true;

// Set custom colors for the chart slices
pieSeries3.colors.list = [
  am4core.color("#5B1A68"),
  am4core.color("#783885"),
  am4core.color("#8C5B97"),
];

chart3.legend = new am4charts.Legend();
chart3.legend.position = "bottom";

chart3.innerRadius = am4core.percent(60);

var label3 = pieSeries2.createChild(am4core.Label);
label3.text = "160k";
label3.horizontalCenter = "middle";
label3.verticalCenter = "middle";
label3.fontSize = 10;
label3.color = "red";

  // Create doctor detail chart instance
var chart4 = am4core.create("chartdiv4", am4charts.PieChart);
chart2.height = 320; 
// Add data
chart4.data = [{
  "country": "40 Courses",
  "value": 201.9,
}, {
  "country": "30 Courses ",
  "value": 201.9
}, {
  "country": "20 Quizzes",
  "value": 201.1
}, {
  "country": "10 Quizzes",
  "value": 165.8
}];

// Add and configure Series
var pieSeries4 = chart4.series.push(new am4charts.PieSeries());
pieSeries4.dataFields.value = "value";
pieSeries4.dataFields.category = "country";
pieSeries4.labels.template.disabled = true;
pieSeries4.ticks.template.disabled = true;

// Set custom colors for the chart slices
pieSeries4.colors.list = [
  am4core.color("#521B5F"), // Electronics - Red
  am4core.color("#7B258D"), // Home - Green
  am4core.color("#A14EB4"), // Cosmetics - Yellow
  am4core.color("#B98CC2")  // Others - Grey
];

chart4.legend = new am4charts.Legend();
chart4.legend.position = "bottom";

chart4.innerRadius = am4core.percent(60);

var label4 = pieSeries2.createChild(am4core.Label);
label4.text = "160k";
label4.horizontalCenter = "middle";
label4.verticalCenter = "middle";
label4.fontSize = 10;
label4.color = "red";
  


//donut chart
var config = {
  type: "doughnut",
  data: {
    labels: ["40 Courses", "30 Courses", "20 Quizzes", "20 Quizzes"],
    datasets: [
      {
        data: [30, 18, 89, 25],
        backgroundColor: ["#531B5F", "#7B258D", "#A14EB4", "#B98CC2"],
        hoverBackgroundColor: ["#531B5F", "#7B258D", "#A14EB4", "#B98CC2"],
        borderWidth: 0,
        borderColor: ["#531B5F", "#7B258D", "#A14EB4", "#B98CC2"],
        hoverBorderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    legend: {
      position: "right",
      reverse: true,
      labels: {
        fontSize: 10,
        fontColor: "#858d9d",
      },
    },
    tooltips: {
      enabled: true,
    },
    cutoutPercentage: 78,
    rotation: -0.5 * Math.PI,
    circumference: 2 * Math.PI,
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  },
};
window.onload = function () {
  var ctx = document.getElementById("myChart").getContext("2d");
  window.myDoughnut = new Chart(ctx, config);
  if ($("#salesby-traffic").length > 0) {
    var salesByCtx = document.getElementById("salesby-traffic").getContext("2d");
    salesByCtx.canvas.parentNode.style.height = '320px';
    salesByCtx.canvas.parentNode.style.width = '320px';
    window.myDoughnut = new Chart(salesByCtx, salesbyConfig);
  }
};







// line column
var lc_options = {
  colors: ['#142762', '#B6BCCE'],
  series: [{
  name: 'Product 1',
  type: 'column',
  data: [440, -50, 304, -150, 100, 33, 200, -50]
}, {
  name: 'Product 2',
  type: 'line',
  data: [400, -48, 280, -130, 80, 30, 150, -30]
}],
  chart: {
  height: 350,
  type: 'line',
  events: {
    mounted: (chart) => {
      chart.windowResizeHandler();
    }
  }
},
stroke: {
  width: [0, 4]
},
dataLabels: {
  enabled: false,
},
labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug'],
xaxis: {
  // type: 'datetime'
},
};

if ($("#line_column").length > 0) {
var lc_chart = new ApexCharts(document.querySelector("#line_column"), lc_options);
lc_chart.render();
}

// horizontal bar chart
var hb_options = {
  series: [{
  name: 'Males',
  data: [0.4, 1.5, 2.9, 3.8, 3.9, 4, 4.5, 3]
},
{
  name: 'Females',
  data: [-0.8, -1.04, -2.85, -3.96, -4.3, -4, -3.4, -2.8]
}
],
  chart: {
  type: 'bar',
  height: 440,
  stacked: true,
  events: {
    mounted: (chart) => {
      chart.windowResizeHandler();
    }
  }
},
colors: ['#142762', '#B6BCCE'],
plotOptions: {
  bar: {
    horizontal: true,
    barHeight: '80%',
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  width: 1,
  colors: ["#fff"]
},

grid: {
  xaxis: {
    lines: {
      show: false
    }
  }
},
yaxis: {
  min: -5,
  max: 5,
  title: {
    // text: 'Age',
  },
},
tooltip: {
  shared: false,
  x: {
    formatter: function (val) {
      return val
    }
  },
  y: {
    formatter: function (val) {
      return Math.abs(val) + "%"
    }
  }
},
xaxis: {
  categories: [ '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9', '0-4'],
  labels: {
    formatter: function (val) {
      return Math.abs(Math.round(val)) + "%"
    }
  }
},
};
if ($("#bar_negative").length > 0) {
var hb_chart = new ApexCharts(document.querySelector("#bar_negative"), hb_options);
hb_chart.render();
}
// horizontal bar chart ends

// column-negative
var cn_options = {
  series: [{
  name: 'Cash Flow',
  data: [1.45, -12.6, -14.16, 0.34, 3.88, 8.1, 17.1, 19.8, -18.6, -48.6, -41.1]
}],
  chart: {
  type: 'bar',
  height: 350,
  events: {
    mounted: (chart) => {
      chart.windowResizeHandler();
    }
  }
},
plotOptions: {
  bar: {
    colors: {
      ranges: [{
        from: -100,
        to: -46,
        color: '#6B6F80'
      }, {
        from: -45,
        to: 0,
        color: '#8A92A6'
      }, {
        from: 0,
        to: 100,
        color: '#142762'
      }]
    },
    columnWidth: '80%',
  }
},
dataLabels: {
  enabled: false,
},
yaxis: {
  labels: {
    formatter: function (y) {
      return y.toFixed(0) + "%";
    }
  }
},
xaxis: {
  type: 'datetime',
  categories: [
    '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
    '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01'
  ],
  labels: {
    rotate: -90
  }
}
};

if ($("#column_negative").length > 0){
  var cn_chart = new ApexCharts(document.querySelector("#column_negative"), cn_options);
  cn_chart.render();
}
// column-negative ends

// column
var cn_options2 = {
  series: [{
  name: 'Cash Flow',
  data: [8.45, 3.88, 8.1, 7.1, 10.8]
}],
  chart: {
  type: 'bar',
  height: 130,
  events: {
    mounted: (chart) => {
      chart.windowResizeHandler();
    }
  }
},
plotOptions: {
  bar: {
    colors: {
      ranges: [{
        from: 0,
        to: 100,
        color: '#142762'
      }]
    },
    columnWidth: '80%',
  }
},
dataLabels: {
  enabled: false,
},
yaxis: {
  labels: {
    formatter: function (y) {
      return y.toFixed(0) + "%";
    }
  }
},
xaxis: {
  type: 'datetime',
  categories: [
    '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01'
  ],
  labels: {
    rotate: -90
  }
}
};

if ($("#column_positive").length > 0){
  var cn_chart2 = new ApexCharts(document.querySelector("#column_positive"), cn_options2);
  cn_chart2.render();
}
// column-negative ends

// two column chart start
var options = {
  series: [{
  name: 'Male',
  data: [44, 55, 57, 56]
}, {
  name: 'Female',
  data: [76, 85, 101, 98]
}],
  chart: {
  type: 'bar',
  height: 130,
  events: {
    mounted: (chart) => {
      chart.windowResizeHandler();
    }
  }
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '60%',
    endingShape: 'rounded'
  },
},
dataLabels: {
  enabled: false,
},
stroke: {
  show: true,
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['Apr', 'May', 'Jun', 'Jul'],
},
yaxis: {
  title: {
    text: '$ (thousands)'
  }
},
fill: {
  opacity: 1
},
tooltip: {
  y: {
    formatter: function (val) {
      return "$ " + val + " thousands"
    }
  }
},
colors: ['#142762', '#AAA9BC'],
};

if ($("#chart").length > 0) {
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
}
// two column  chart end

//  two line chart start

var options2 = {
  series: [{
    name: "Positive",
    data: [10, 11, 15, 25, 40, 70, 100, 150, 200]
  },{
    name: "Negative",
    data: [10, 11, 11, 15, 25, 40, 70, 100, 150]
  }],
  chart: {
  height: 250,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight'
},
grid: {
  row: {
    colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
},
colors: ['#23A6F0', '#ECA81D'],
};

if ($("#chart2").length > 0) {
  var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
  chart2.render();
}

//  two line chart end

//  single line chart start

var options3 = {
  series: [{
    name: "Positive",
    data: [50, 50, 65, 35, 75, 45, 60, 50, 50, 75, 45, 60, 40]
  }],
  chart: {
  height: 120,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight'
},
grid: {
  row: {
    colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
},
colors: ['#142762'],
};

if ($("#chart3").length > 0) {
  var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
  chart3.render();
}

//  single line chart end

// Fever History chart

window.onload = function () {

  //Better to construct options first and then pass it as a parameter
  var options = {
    animationEnabled: true,
    backgroundColor: "transparent",
    axisX: {
      lineColor: "#E5E5EF", // Change X-axis line color
      labelFontColor: "#898989" // Change X-axis label color
  },
  axisY: {
      lineColor: "#E5E5EF", // Change Y-axis line color
      labelFontColor: "#898989" // Change Y-axis label color
  },
    data: [
    {
      type: "spline", //change it to line, area, column, pie, etc
      dataPoints: [
        { x: 10, y: 10 },
        { x: 20, y: 12 },
        { x: 30, y: 8 },
        { x: 40, y: 14 },
        { x: 50, y: 6 },
        { x: 60, y: 24 },
        { x: 70, y: -4 },
        { x: 80, y: 10 }
      ],
      color: "#142762"
    }
    ]
  };
  if ($("#chartContainer").length > 0) {
    $("#chartContainer").CanvasJSChart(options);
  }  
  }
});