import React from 'react';
import { Chart, Bar } from 'react-chartjs-2';
import annotationPlugin from 'chartjs-plugin-annotation';
Chart.register(annotationPlugin);

function BarChart(props) {

  return (
    <Bar 
      data={props.data}
      options={props.options}
      getDatasetAtEvent={props.getDatasetAtEvent}
      getElementAtEvent={props.getElementAtEvent}
      getElementsAtEvent={props.getElementsAtEvent}
    />
  )

};

export default BarChart;