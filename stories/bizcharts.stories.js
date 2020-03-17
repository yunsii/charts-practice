import React from 'react';
import {
  BarChart,
  GaugeChart,
} from '../src/pages/bizcharts';

export default {
  title: 'bizcharts',
};

export const barChart = () => <BarChart />;

barChart.story = {
  name: 'Bar Chart',
};

export const gaugeChart = () => <GaugeChart />;

gaugeChart.story = {
  name: 'Gauge Chart',
};
