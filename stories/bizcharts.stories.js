import React from 'react';
import {
  HelloWorld,
  GaugeChart,
} from '../src';

export default {
  title: 'bizcharts',
};

export const hello = () => <HelloWorld />;

hello.story = {
  name: 'Hello World',
};

export const gaugeChart = () => <GaugeChart />;

gaugeChart.story = {
  name: 'Gauge Chart',
};
