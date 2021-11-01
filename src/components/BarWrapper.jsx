import React, { useState, useRef } from 'react';
import BarChart from './BarChart';
import { v4 as uuidv4 } from 'uuid';

function BarWrapper() {

    const [showDayChart, setShowDayChart] = useState(false);
    const [dayChartDate, setDayChartDate] = useState('');

    const timeLabels = [
        '00.00', '01.00','02.00', '03.00','04.00', '05.00', '06.00',
        '07.00', '08.00','09.00', '10.00','11.00', '12.00', '13.00',
        '14.00', '15.00','16.00', '17.00','18.00', '19.00', '20.00',
        '21.00', '22.00','23.00', '24.00'
    ];

    const dayChartData = {
        labels: timeLabels,
        datasets: [
            {
                label: `LME официальный курс на ${dayChartDate}`,
                data: [
                    1750, 1859, 1695, 1820, 1699, 1800, 1750, 1859, 1695, 1820,
                    1750, 1859, 1695, 1820, 1699, 1800, 1750, 1859, 1695, 1820,
                    1750, 1859, 1695, 1820, 
                ],
                borderColor: 'red',
                backgroundColor: 'rgba(132, 155, 123, 0.3)',
                type: 'line',
                order: 1,
                yAxisID: 'y'
            }
        ]
    }

    const dayChartOptions = {
        scales: {
            y: {
              title: {
                display: true,
                text: 'LME'
              },
              position: 'left',
              stacked: false,
              ticks: {
                beginAtZero: false,
              },
              grid: {
                  display: false
              },
              min: 1500,
              max: 2000,
            },
            x1: {
              title: {
                display: true,
                text: 'Время'
              },
            }
          },
          plugins: {
              title: {
                  display: true,
                  text: 'Почасовой график'
              },
              filler: {
                  propagate: false
              },
              'samples-filler-analyser': {
                  target: 'chart-analyser'
              },
          },
    }

    const labelsObj = [
        {date: '01.01.21', trend: 'growth', actions: ['Событие 1. Приведет к росту' , 'Событие 2. Просто новость'], lme: true},
        {date: '02.01.21', trend: 'no', actions: ['Событие 1' , 'Событие 2'], lme: true},
        {date: '03.01.21', trend: 'fall', actions: ['Событие 1. Приведет к падению' , 'Событие 2'], lme: true},
        {date: '04.01.21', trend: 'no', actions: ['Событие 1' , 'Событие 2'], lme: true},
        {date: '05.01.21', trend: 'no', actions: ['Событие 1' , 'Событие 2'], lme: true},
        {date: '06.01.21', trend: 'growth', actions: ['Событие 1. Приведет к росту' , 'Событие 2'], lme: false},
        {date: '07.01.21', trend: 'no', actions: ['Событие 1' , 'Событие 2'], lme: false},
        {date: '08.01.21', trend: 'no', actions: ['Событие 1' , 'Событие 2'], lme: true},
        {date: '09.01.21', trend: 'no', actions: ['Событие 1' , 'Событие 2'], lme: true},
        {date: '10.01.21', trend: 'fall', actions: ['Событие 1. Приведет к падению' , 'Событие 2'], lme: true},
        {date: '11.01.21', trend: 'no', actions: ['Событие 1' , 'Событие 2'], lme: true},
        {date: '12.01.21', trend: 'growth', actions: ['Событие 1. Приведет к росту' , 'Событие 2'], lme: false},
        {date: '13.01.21', trend: 'no', actions: ['Событие 1' , 'Событие 2'], lme: false},
        {date: '14.01.21', trend: 'growth', actions: ['Событие 1. Приведет к росту' , 'Событие 2'], lme: false},
        {date: '15.01.21', trend: 'fall', actions: ['Событие 1. Приведет к падению' , 'Событие 2'], lme: true},
        {date: '16.01.21', trend: 'no', actions: ['Событие 1' , 'Событие 2'], lme: true},
        {date: '17.01.21', trend: 'no', actions: ['Событие 1' , 'Событие 2'], lme: true},
        {date: '18.01.21', trend: 'no', actions: ['Событие 1' , 'Событие 2'], lme: true},
        {date: '19.01.21', trend: 'no', actions: ['Событие 1' , 'Событие 2'], lme: true},
        {date: '20.01.21', trend: 'no', actions: ['Событие 1' , 'Событие 2'], lme: false},
        {date: '21.01.21', trend: 'growth', actions: ['Событие 1. Приведет к росту' , 'Событие 2'], lme: false},
        {date: '22.01.21', trend: 'fall', actions: ['Событие 1. Приведет к падению' , 'Событие 2'], lme: true},
        {date: '23.01.21', trend: 'no', actions: ['Событие 1' , 'Событие 2'], lme: true},
        {date: '24.01.21', trend: 'no', actions: ['Событие 1' , 'Событие 2'], lme: true},
        {date: '25.01.21', trend: 'fall', actions: ['Событие 1. Приведет к падению' , 'Событие 2'], lme: true},
        {date: '26.01.21', trend: 'growth', actions: ['Событие 1. Приведет к росту' , 'Событие 2'], lme: true},
        {date: '27.01.21', trend: 'fall', actions: ['Событие 1. Приведет к падению' , 'Событие 2'], lme: false},
        {date: '28.01.21', trend: 'no', actions: ['Событие 1' , 'Событие 2'], lme: false},
        {date: '29.01.21', trend: 'no', actions: ['Событие 1' , 'Событие 2'], lme: true},
        {date: '30.01.21', trend: 'no', actions: ['Событие 1' , 'Событие 2'], lme: true} 
    ];

    const labels = [];

    for (let item of labelsObj) {
        labels.push(item.date);
    }

    const annotations = [];

    const calculateAnnotations = () => {
        for (let i = 0; i < labelsObj.length; i += 1) {
            const newAnnotation = {
                type: 'box',
                xScaleID: 'x1',
                yScaleID: 'y',
                yMin: 0,
                yMax: 20000,
                xMin: i -0.5,
                xMax: i + 0.5,
                borderWidth: 0
            };
            if (labelsObj[i].trend === 'growth') {
                newAnnotation.backgroundColor = 'rgba(42, 187, 155, 0.20)'
            } else if (labelsObj[i].trend === 'fall') {
                newAnnotation.backgroundColor = 'rgba(255, 0, 0, 0.20)'
            } else if (labelsObj[i].trend === 'no') {
                newAnnotation.backgroundColor = 'rgba(255, 255, 255, 0.05)'
            } else if (labelsObj[i].trend === 'dayOff') {
                newAnnotation.backgroundColor = 'rgba(0, 0, 255, 0.20)'
            }
            annotations.push(newAnnotation);
        }
    }

    calculateAnnotations();

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
            grid: {
                display: false
            },
            min: 60,
            max: 100,
            },
            y3: {
            title: {
                display: true,
                text: 'Импорт, т'
            },
            position: 'right',
            stacked: true,
            ticks: {
                beginAtZero: true,
            },
            grid: {
                display: false
            },
            min: 0,
            max: 800,
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
                ticks: {
                    color: (c) => {
                        switch (c.index) {
                            case 5:
                                return 'red';
                            case 6:
                                return 'red';
                            case 11:
                                return 'red';
                            case 12:
                                return 'red';
                            case 13:
                                return 'red';
                            case 19:
                                return 'red';
                            case 20:
                                return 'red';
                            case 26:
                                return 'red';
                            case 27:
                                return 'red';
                            default:
                                return 'black';
                        }
                    }
                }
            },
        },
        plugins: {
            annotation: {
                annotations: annotations
            },
            title: {
                display: true,
                text: 'График с тремя осями у'
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

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Импорт ЕАЭС, т',
                data: [
                    20, 30, 31, 35, 45, 44, 45, 56, 23, 10,
                    20, 30, 31, 35, 45, 44, 45, 56, 23, 10,
                    20, 30, 31, 35, 45, 44, 45, 56, 23, 10
                ],
                borderColor: 'rgba(67, 69, 201, 0.808)',
                backgroundColor: 'rgba(67, 69, 201, 0.808)',
                type: 'bar',
                yAxisID: 'y3',
                stack: 'Stack 0',
            },
            {
                label: 'Импорт дальнее, т',
                data: [
                    20, 30, 31, 35, 45, 44, 45, 56, 23, 10,
                    20, 30, 31, 35, 45, 44, 45, 56, 23, 10,
                    20, 30, 31, 35, 45, 44, 45, 56, 23, 10
                ],
                borderColor: 'rgba(75, 207, 126, 0.808)',
                backgroundColor: 'rgba(75, 207, 126, 0.808)',
                type: 'bar',
                yAxisID: 'y3',
                stack: 'Stack 0',
            },
            {
                label: 'LME официальный курс',
                data: [
                    1750, 1859, 1695, 1820, 1699, 1800, 1750, 1859, 1695, 1820,
                    1750, 1859, 1695, 1820, 1699, 1800, 1750, 1859, 1695, 1820,
                    1750, 1859, 1695, 1820, 1699, 1800, 1750, 1859, 1695, 1820,
                ],
                borderColor: 'red',
                backgroundColor: 'rgba(132, 155, 123, 0.3)',
                type: 'line',
                order: 1,
                yAxisID: 'y2'
            }, {
                label: 'USD официальный',
                data: [
                    71, 75, 77, 75, 73, 77, 75, 73, 77, 79,
                    71, 75, 77, 75, 73, 77, 75, 73, 77, 79,
                    71, 75, 77, 75, 73, 77, 75, 73, 77, 79,
                ],
                backgroundColor: 'rgba(20, 0, 133, 1)',
                borderColor: 'rgba(20, 0, 133, 1)',
                type: 'line',
                order: 2,
                yAxisID: 'y'
            }, 
            {
                label: 'min цена импорта',
                data: [
                    1700, 1800, 1640, 1750, 1630, 1750, 1700, 1800, 1630, 1780,
                    1700, 1800, 1640, 1750, 1630, 1750, 1700, 1800, 1630, 1780,
                    1700, 1800, 1640, 1750, 1630, 1750, 1700, 1800, 1630, 1780,
                ],
                backgroundColor: 'rgba(253, 152, 0, 0.2)',
                borderColor: 'rgb(253, 152, 0)',
                type: 'line',
                order: 1,
                fill: '+1',
                yAxisID: 'y2'
            }, {
                label: 'max цена импорта',
                data: [
                    1800, 1900, 1750, 1860, 1750, 1850, 1800, 1900, 1750, 1860,
                    1800, 1900, 1750, 1860, 1750, 1850, 1800, 1900, 1750, 1860,
                    1800, 1900, 1750, 1860, 1750, 1850, 1800, 1900, 1750, 1860,
                ],
                backgroundColor: 'rgba(9, 248, 228, 1)',
                borderColor: 'rgba(9, 248, 228, 1)',
                type: 'line',
                order: 2,
                yAxisID: 'y2'
            },
            {
                type: 'bubble',
                label: 'Менеджер 1',
                data: [
                    {x: '01.01.21', y: 1700, r: 10}, {x: '02.01.21', y: 1900, r: 15}, {x: '03.01.21', y: 1750, r: 15},
                    {x: '04.01.21', y: 1620, r: 15}, {x: '05.01.21', y: 1900, r: 15}, {x: '06.01.21', y: 1675, r: 15},
                    {x: '06.01.21', y: 1850, r: 15}, {x: '07.01.21', y: 1650, r: 10}, {x: '08.01.21', y: 1850, r: 5},
                    {x: '10.01.21', y: 1720, r: 10}, {x: '11.01.21', y: 1750, r: 10}, {x: '15.01.21', y: 1853, r: 5},
                    {x: '20.01.21', y: 1920, r: 10}, {x: '23.01.21', y: 1820, r: 15}, {x: '28.01.21', y: 1654, r: 15},
                ],
                borderColor: 'rgba(207, 75, 196, 0.616)',
                backgroundColor: 'rgba(207, 75, 196, 0.616)',
                order: 0,
                yAxisID: 'y2'
            },
            {
                type: 'bubble',
                label: 'Менеджер 2',
                data: [
                    {x: '01.01.21', y: 1800, r: 10}, {x: '02.01.21', y: 1720, r: 15}, {x: '03.01.21', y: 1650, r: 15},
                    {x: '04.01.21', y: 1700, r: 15}, {x: '05.01.21', y: 1660, r: 15}, {x: '06.01.21', y: 1700, r: 15},
                    {x: '06.01.21', y: 1730, r: 15}, {x: '07.01.21', y: 1850, r: 10}, {x: '08.01.21', y: 1950, r: 5},
                    {x: '10.01.21', y: 1600, r: 10}, {x: '11.01.21', y: 1950, r: 10}, {x: '15.01.21', y: 1750, r: 5},
                    {x: '20.01.21', y: 1800, r: 10}, {x: '23.01.21', y: 1720, r: 15}, {x: '27.01.21', y: 1650, r: 15},
                    {x: '27.01.21', y: 1650, r: 15}, {x: '30.01.21', y: 1650, r: 15},
                ],
                borderColor: 'rgba(194, 207, 75, 0.8)',
                backgroundColor: 'rgba(194, 207, 75, 0.8)',
                order: 0,
                yAxisID: 'y2'
            },
        ],
    };
  
    const getDatasetAtEvent = dataset => {
        if (!dataset.length) return;
        // console.log(dataset);
    };
  
    const getElementAtEvent = element => {
        if (!element.length) return;
        setShowDayChart(true);
        setDayChartDate(labelsObj[element[0].element.$context.parsed.x].date)

        // console.log(element);
        // console.log(element[0]);
        // console.log(element[0].element.$context.parsed.x);
        // console.log(LineBubbledData.labels[element[0].element.$context.parsed.x])

    };
  
    const getElementsAtEvent = elements => {
        if (!elements.length) return;
        // console.log(elements);
    };
  

    // const data = StackedBarData;
    // const options = StackedBarOptions;
    
    return (
        <>
        <div className="chart_wrapper">
            { showDayChart && <div className="day_chart">
                <BarChart data={dayChartData} options={dayChartOptions} />
            </div>}
            {showDayChart && <div className="close_day_chart" onClick={() => setShowDayChart(false)}>
                Закрыть
            </div>}
            <div className="chart_item">
                {/* <BarChart data={data} options={options} />
                <BarChart data={BarLineData} options={BarLineOptions} />
                <BarChart data={BarLineDataNomenclature} options={BarLineOptionsNomenclature} /> */}
                <BarChart data={data} options={options}
                getDatasetAtEvent={getDatasetAtEvent}
                getElementAtEvent={getElementAtEvent}
                getElementsAtEvent={getElementsAtEvent} />
            </div>
        </div>

        <div className="dates_info">
        { labelsObj.map((o) => (
            <div className="date_item" key={uuidv4()}>
                <span className={o.lme ? "date" : "date red"} key={uuidv4()}>{o.date}</span>
                {o.actions.map((action) => (
                    <span className="date_actions" key={uuidv4()}>{action}</span>
                ))}
            </div>
            ))}
            
        </div>

        
        </>
    );
}

export default BarWrapper;