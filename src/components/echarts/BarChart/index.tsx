import React from 'react';
import ReactEcharts from 'echarts-for-react';

export interface BarChartProps {
  height?: number | string;
  data: any;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  height = 240,
}) => {
  const option = {
    xAxis: {
      type: 'category',
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data,
      type: 'bar'
    }]
  };

  return (
    <ReactEcharts
      style={{ width: "100%", height }}
      option={option}
    />
  );
}

export default BarChart;
