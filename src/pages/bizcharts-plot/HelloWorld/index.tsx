import React from 'react';
import { BarChart } from 'bizcharts-plot';

import { LinkCard } from '../../../components';

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
      title="柱状图"
    >
      <BarChart
        data={data}
        xField="sold"
        yField="genre"
        // scale={cols}  // no this prop
        color="genre"
      />
    </LinkCard>
  )
};
