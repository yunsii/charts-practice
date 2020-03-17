import React from 'react';
import {
  BarChart,
  GaugeChart,
} from '../src/pages/bizcharts-plot';

export default {
  title: 'bizcharts-plot',
};

export const barChart = () => <BarChart />;

barChart.story = {
  name: 'Bar Chart',
};

export const gaugeChart = () => <GaugeChart />;

gaugeChart.story = {
  name: 'Gauge Chart',
};
