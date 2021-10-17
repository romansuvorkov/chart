import React from 'react';
import { Chart, Bar } from 'react-chartjs-2';
// import * as ChartAnnotation from 'chartjs-plugin-annotation';
import annotationPlugin from 'chartjs-plugin-annotation';
// import type * as ChartJs from 'chart.js';
// import * as ChartJs from 'chart.js';
// import annotationPlugin from 'chartjs-plugin-annotation';
Chart.register(annotationPlugin);



// const data = {
//   labels: ['01.10.21', '02.10.21', '03.10.21', '04.10.21', '05.10.21', '06.10.21'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       order: 2,
//       yAxisID: 'y',
//       borderWidth: 1,
//       stack: 'Stack 0',
//     },
//     {
//       label: '# of Votes2',
//       data: [5, 11, 5, 7, 5, 4],
//       backgroundColor: [
//         'rgba(25, 99, 12, 0.2)',
//         'rgba(5, 162, 25, 0.2)',
//         'rgba(25, 206, 6, 0.2)',
//         'rgba(7, 192, 12, 0.2)',
//         'rgba(53, 102, 25, 0.2)',
//         'rgba(25, 159, 6, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       order: 2,
//       borderWidth: 1,
//       yAxisID: 'y',
//       stack: 'Stack 0',
//     }, {
//       label: 'Dataset 1',
//       data: [1750, 1859, 1695, 1820, 1699, 1800],
//       borderColor: 'red',
//       backgroundColor: 'rgba(25, 15, 6, 0.3)',
//       type: 'line',
//       fill: '+1',
//       order: 1,
//       yAxisID: 'y2'
//     }, {
//       label: 'Dataset 2',
//       data: [1700, 1800, 1650, 1790, 1650, 1720],
//       backgroundColor: 'rgba(25, 155, 6, 0.3)',
//       borderColor: 'red',
//       type: 'line',
//       order: 1,
//       yAxisID: 'y2'
//     }, {
//       type: 'bubble',
//       label: 'Dataset 3',
//       test: "testItem",
//       data: [{
//         x: 1,
//         y: 1700,
//         r: 15
//       },{
//         x: 2,
//         y: 1650,
//         r: 15
//       },{
//         x: 3,
//         y: 1700,
//         r: 15
//       },{
//         x: 4,
//         y: 1740,
//         r: 15
//       },{
//         x: 5,
//         y: 1650,
//         r: 15
//       },{
//         x: 6,
//         y: 1600,
//         r: 15
//       }],
//       borderColor: 'green',
//       backgroundColor: 'green',
//       order: 0,
//       yAxisID: 'y2'
//     },
//   ],
// };

// const options = {
//   scales: {
//     y: {
//       title: {
//         display: true,
//         text: 'test'
//       },
//       stacked: true,
//       ticks: {
//         beginAtZero: true,
//       },
//       max: 50,
//     },
//     y2: {
//       title: {
//         display: true,
//         text: 'LME'
//       },
//       stacked: false,
//       ticks: {
//         beginAtZero: false
//       },
//       min: 1400,
//       max: 2100
//     },
//     y3: {
//       title: {
//         display: true,
//         text: 'test3'
//       },
//       stacked: true,
//       ticks: {
//         beginAtZero: true,
//       },
//     },
//     y4: {
//       title: {
//         display: true,
//         text: 'test4'
//       },
//       stacked: true,
//       ticks: {
//         beginAtZero: true,
//       },
//     },
//     x1: {
//       title: {
//         display: true,
//         text: 'test4'
//       },
//     }
//   },
//   plugins: {
//     annotation: {
//       annotations: [
//         {
//           type: 'box',
//           xScaleID: 'x1',
//           yScaleID: 'y',
//           xMin: 1,
//           xMax: 3,
//           yMin: 0,
//           yMax: 40,
//           backgroundColor: 'rgba(255, 99, 132, 0.25)'
//         },
//         {
//           type: 'box',
//           xScaleID: 'x1',
//           yScaleID: 'y',
//           xMin: 4,
//           xMax: 4.5,
//           yMin: 0,
//           yMax: 40,
//           backgroundColor: 'rgba(25, 99, 13, 0.25)'
//         }
//       ]
//     },
//     filler: {
//       propagate: false
//     },
//     'samples-filler-analyser': {
//       target: 'chart-analyser'
//     },
//     tooltip: {
//       callbacks: {
//           footer: function(tooltipItems) {
//             let sum = 0;

//             tooltipItems.forEach(function(tooltipItem) {
//               sum += tooltipItem.parsed.y;
//             });
//             return 'Sum: ' + sum;
//           }
//       }
//   }
//   },
// };

function VerticalBar(props) {

  return (
    <Bar data={props.data} options={props.options} />
  )
};

export default VerticalBar;