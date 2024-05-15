// youtube subscribers

var chart = document.getElementById("area-chart-spline").getContext("2d");
gradient = chart.createLinearGradient( 0,500, 0, 100);

gradient.addColorStop(0, "#B9BED0");
gradient.addColorStop(0.4, "#B9BED0");

var data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
  ],
  datasets: [
    {
      label: "Custom Label Name",
      backgroundColor: gradient,
      pointBackgroundColor: "white",
      borderWidth: 1,
      borderColor: '#DFE2ED',
      borderColor: gradient,
      data: [0, 4, 3, 5, 5, 8, 7, 8, 6, 10],
    },
  ],
};

var as_options = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: "easeInOutQuad",
    duration: 520,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.05)",
          lineWidth: 1,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: "rgba(200, 200, 200, 0.08)",
          lineWidth: 1,
        },
      },
    ],
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
  legend: {
    display: false,
  },
  point: {
    backgroundColor: "white",
  },
  tooltips: {
    titleFontFamily: "inherit",
    backgroundColor: "rgba(0,0,0,0.3)",
    titleFontColor: "red",
    caretSize: 5,
    cornerRadius: 2,
    xPadding: 10,
    yPadding: 10,
  },
};

var chartInstance = new Chart(chart, {
  type: "line",
  data: data,
  options: as_options,
});

var options1 = {
    chart: {
      height: 200,
      type: "radialBar",
    },
    series: [67, 84, 95],
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'TOTAL'
          }
        }
      }
    },
    labels: ['TEAM A', 'TEAM B', 'TEAM C'],
    colors: ['#142762', '#6B6F80', '#23A6F0'], // Add this line to specify custom colors
  };
  
  new ApexCharts(document.querySelector("#chart1"), options1).render();