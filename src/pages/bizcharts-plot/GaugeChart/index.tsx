import React from 'react';
import { GaugeChart } from 'bizcharts-plot';

import { LinkCard } from '../../../components';

export default () => {
  return (
    <LinkCard
      title="仪表盘"
    >
      <GaugeChart
        value={0.1}
      />
    </LinkCard>
  )
};
