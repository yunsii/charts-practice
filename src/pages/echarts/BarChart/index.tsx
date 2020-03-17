import React from 'react';

import BarChart from '../../../components/echarts/BarChart';
import { LinkCard } from '../../../components';

export default () => {
  return (
    <LinkCard
      title="柱状图"
    >
      <BarChart
        height={360}
        data={[
          ["周一", 12],
          ["周二", 7],
          ["周三", 40],
          ["周四", 24],
          ["周五", 74],
          ["周六", 21],
          ["周日", 74],
        ]}
      />
    </LinkCard>
  )
};
