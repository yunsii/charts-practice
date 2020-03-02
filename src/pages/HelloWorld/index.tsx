import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';

import { LinkCard } from '../../components';

const data = [
  { genre: 'Sports', sold: 275, income: 2300 },
  { genre: 'Strategy', sold: 115, income: 667 },
  { genre: 'Action', sold: 120, income: 982 },
  { genre: 'Shooter', sold: 350, income: 5271 },
  { genre: 'Other', sold: 150, income: 3710 }
];

const cols = {
  sold: { alias: '销售量' },
  genre: { alias: '游戏种类' }
};

export default () => {
  return (
    <LinkCard
      href="https://bizcharts.net/product/bizcharts/category/12/page/7#%E7%BB%98%E5%88%B6%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E5%9B%BE%E8%A1%A8"
      title="绘制一个简单的图表"
    >
      <Chart width={600} height={400} data={data} scale={cols}>
        <Axis name="genre" title />
        <Axis name="sold" title />
        <Legend position="top" />
        <Tooltip />
        <Geom type="interval" position="genre*sold" color="genre" />
      </Chart>
    </LinkCard>
  )
};
