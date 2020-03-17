import React from 'react';
import {
  BarChart,
} from '../src/pages/echarts';

export default {
  title: 'echarts',
};

export const barChart = () => <BarChart />;

barChart.story = {
  name: 'Bar Chart',
};
