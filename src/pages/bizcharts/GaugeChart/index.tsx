import React from 'react';

import { LinkCard } from '../../../components';
import GaugeChart from '../../../components/GaugeChart';

export default () => {
  const scale = {
    value: {
      min: 0,
      max: 9,
      tickInterval: 1,
      nice: false,
    },
  };

  return (
    <LinkCard
      title="仪表盘"
      href="https://bizcharts.net/product/bizcharts/demo/145"
    >
      <GaugeChart
        value={5.6}
        scale={scale}
      />
    </LinkCard>
  )
};
