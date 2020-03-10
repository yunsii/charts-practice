import React from 'react';
import {
  PlotBarChart,
  PlotGaugeChart,
} from '../src';

export default {
  title: 'bizcharts-plot',
};

export const hello = () => <PlotBarChart />;

hello.story = {
  name: 'Hello World',
};

export const gaugeChart = () => <PlotGaugeChart />;

gaugeChart.story = {
  name: 'Gauge Chart',
};
