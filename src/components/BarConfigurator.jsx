import React, { useState } from 'react';
import Bar from './Bar';
import db from '../database/db';

function BarConfigurator() {

    // const [phone, setPhone] = useState('');
    // const [address, setAddress] = useState('');
    // const [agreement, setAgreement] = useState(false);

    const labels = [];

    for (let item of db.lmeCalendar) {
        labels.push(item.date);
    }

    const yAxesArr = [];

    const addNewAxisY = (newAxis) => {
        const indexOfAxis = yAxesArr.findIndex(object => object.yAxisName === newAxis.yAxisName && object.variable === newAxis.variable);
        if (indexOfAxis === -1) {
            yAxesArr.push(newAxis);
        }
        // console.log(yAxesArr);
    }

    const deleteAxisY = (newAxis) => {
        const indexOfAxis = yAxesArr.findIndex(object => object.yAxisName === newAxis.yAxisName && object.variable === newAxis.variable);
        yAxesArr.splice (indexOfAxis, 1);
        // console.log(yAxesArr);
    }

    const datasets = [];

    const handleCheckBoxClick = (event) => {
        if (event.target.id === 'purchase') {
          if (event.target.checked) {
            addNewAxisY({ yAxisName: 'lme', variable: 'purchase'});
          } else {
            deleteAxisY({ yAxisName: 'lme', variable: 'purchase'});
          }
        } else if (event.target.id === 'lme_official') {
          if (event.target.checked) {
            addNewAxisY({ yAxisName: 'lme', variable: 'lme_official'});
          } else {
            deleteAxisY({ yAxisName: 'lme', variable: 'lme_official'});
          }
        } else if (event.target.id === 'lme_bidding') {
          if (event.target.checked) {
            addNewAxisY({ yAxisName: 'lme', variable: 'lme_bidding'});
          } else {
            deleteAxisY({ yAxisName: 'lme', variable: 'lme_bidding'});
          }
        } else if (event.target.id === 'usd_bidding') {
          if (event.target.checked) {
            addNewAxisY({ yAxisName: 'usd', variable: 'usd_bidding'});
          } else {
            deleteAxisY({ yAxisName: 'usd', variable: 'usd_bidding'});
          }
        } else if (event.target.id === 'usd_official') {
          if (event.target.checked) {
            addNewAxisY({ yAxisName: 'usd', variable: 'usd_official'});
          } else {
            deleteAxisY({ yAxisName: 'usd', variable: 'usd_official'});
          }
        }
        console.log(event.target.id);
        console.log(event.target.checked);
        console.log('yAxesArr');
        console.log(yAxesArr);
    }

    const annotations = [];

    const calculateAnnotations = () => {
        for (let i = 0; i < db.lmeCalendar.length; i += 1) {
            const newAnnotation = {
                type: 'box',
                xScaleID: 'x1',
                yScaleID: 'y',
                yMin: 0,
                yMax: 20000,
                xMin: i -0.5,
                xMax: i + 0.5,
                borderWidth: 1
            };
            if (db.lmeCalendar[i].work) {
                newAnnotation.borderColor = 'green';
            } else {
                newAnnotation.borderColor = 'black';
            }
            if (db.lmeCalendar[i].trend === 'grow') {
                newAnnotation.backgroundColor = 'rgba(42, 187, 155, 0.05)'
            } else if (db.lmeCalendar[i].trend === 'fall') {
                newAnnotation.backgroundColor = 'rgba(255, 0, 0, 0.05)'
            } else if (db.lmeCalendar[i].trend === 'no') {
                newAnnotation.backgroundColor = 'rgba(255, 255, 255, 0.05)'
            }
            annotations.push(newAnnotation);
        }
    }

    calculateAnnotations();
    // console.log(annotations);

    const handleDrawClick = () => {
      const yAxes = [];
      for (let i = 0; i < yAxesArr.length; i += 1) {
        const indexOfAxis = yAxes.findIndex(object => object.name === yAxesArr[i].yAxisName);
        if (indexOfAxis === -1) {
          const lengthOfAxes = yAxes.length;
          const newAxis = {
            name: yAxesArr[i].yAxisName,
            axisNumber: lengthOfAxes === 0 ? `y` : `y${lengthOfAxes}`
          };
          yAxes.push(newAxis);
        }
      }
      

      console.log('datasets');
      console.log(datasets);
    }

    const data = {
        labels: labels,
        datasets: [
          {
            label: 'LME официальный курс',
            data: [1750, 1859, 1695, 1820, 1699, 1800],
            borderColor: 'red',
            backgroundColor: 'rgba(132, 155, 123, 0.3)',
            type: 'line',
            order: 1,
            yAxisID: 'y2'
          }, {
            label: 'LME торги',
            data: [1700, 1800, 1650, 1790, 1650, 1720],
            backgroundColor: 'rgba(25, 155, 6, 0.3)',
            borderColor: 'blue',
            type: 'line',
            order: 1,
            yAxisID: 'y2'
          }, {
            label: 'USD торги',
            data: [71, 73, 79, 71, 72, 75],
            backgroundColor: 'rgba(25, 155, 6, 0.3)',
            borderColor: 'brown',
            type: 'line',
            order: 1,
            yAxisID: 'y'
          }, {
            label: 'USD официальный',
            data: [71, 73, 77, 71, 73, 77],
            backgroundColor: 'rgba(25, 155, 6, 0.3)',
            borderColor: 'yellow',
            type: 'line',
            order: 2,
            yAxisID: 'y'
          }, {
            type: 'bubble',
            label: 'Менеджер 1',
            data: [{
              x: 1,
              y: 1700,
              r: 17
            },{
              x: 2,
              y: 1650,
              r: 15
            },{
              x: 3,
              y: 1700,
              r: 15
            },{
              x: 4,
              y: 1740,
              r: 15
            },{
              x: 5,
              y: 1650,
              r: 15
            },{
              x: 6,
              y: 1600,
              r: 15
            }],
            borderColor: 'green',
            backgroundColor: 'green',
            order: 0,
            yAxisID: 'y2'
          },
          {
            type: 'bubble',
            label: 'Менеджер 2',
            data: [{
              x: 1,
              y: 1800,
              r: 17
            },{
              x: 2,
              y: 1720,
              r: 15
            },{
              x: 3,
              y: 1650,
              r: 15
            },{
              x: 4,
              y: 1700,
              r: 15
            },{
              x: 5,
              y: 1660,
              r: 15
            },{
              x: 6,
              y: 1700,
              r: 15
            },{
              x: 6,
              y: 1730,
              r: 15
            }],
            borderColor: 'brown',
            backgroundColor: 'brown',
            order: 0,
            yAxisID: 'y2'
          },
        ],
      };
      
      const options = {
        scales: {
          y: {
            title: {
              display: true,
              text: 'USD'
            },
            position: 'right',
            stacked: false,
            ticks: {
              beginAtZero: true,
            },
            min: 60,
            max: 100,
          },
          y2: {
            title: {
              display: true,
              text: 'LME'
            },
            stacked: false,
            ticks: {
              beginAtZero: false
            },
            min: 1400,
            max: 2100
          },
          x1: {
            title: {
              display: true,
              text: 'Дата'
            },
          }
        },
        plugins: {
          annotation: {
            annotations: annotations
          },
          filler: {
            propagate: false
          },
          'samples-filler-analyser': {
            target: 'chart-analyser'
          },
          tooltip: {
            callbacks: {
                footer: function(tooltipItems) {
                  let output = 'no';
                  tooltipItems.forEach(function(tooltipItem) {
                    // console.log(tooltipItem);
                    if (tooltipItem.dataset.type === 'bubble') {
                      output = `Закуплено ${tooltipItem.raw.r} т меди по цене ${tooltipItem.parsed.y} $`;
                    }
                  });
                  return output === 'no' ? '' : output;
                }
            }
        }
        },
      };


    return (
        <div className="bar_wrapper">
            {/* <h1>Конфигуратор графика</h1>
            <div className="config_wrapper">
                <div className="config_row">
                    <input type="checkbox" id="purchase" name="purchase" onClick={(evt) => handleCheckBoxClick(evt)} />
                    <label htmlFor="purchase">Закупка менеджеров</label>
                </div>
                <div className="config_row">
                    <input type="checkbox" id="lme_official" name="lme_official" onClick={(evt) => handleCheckBoxClick(evt)} />
                    <label htmlFor="purchase">Официальный курс LME</label>
                </div>
                <div className="config_row">
                    <input type="checkbox" id="lme_bidding" name="lme_bidding" onClick={(evt) => handleCheckBoxClick(evt)} />
                    <label htmlFor="purchase">Курс торгующийся на LME</label>
                </div>
                <div className="config_row">
                    <input type="checkbox" id="usd_official" name="usd_official" onClick={(evt) => handleCheckBoxClick(evt)} />
                    <label htmlFor="purchase">Официальный курс USD</label>
                </div>
                <div className="config_row">
                    <input type="checkbox" id="usd_bidding" name="usd_bidding" onClick={(evt) => handleCheckBoxClick(evt)} />
                    <label htmlFor="purchase">Торгующийся курс USD</label>
                </div>
            </div>
            <button type="button" onClick={handleDrawClick}>Сформировать график</button> */}
            <div className="bar_wrapper">
                <Bar data={data} options={options}/>
            </div>
        </div>
    );
}

export default BarConfigurator;



