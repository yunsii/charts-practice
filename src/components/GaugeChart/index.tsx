import React, { } from 'react';
import { Chart, Axis, Coord, Geom, Guide, Shape } from 'bizcharts';

import autoHeight from '../autoHeight';

(Shape as any).registerShape('point', 'pointer', {
  drawShape(cfg, group) {
    let point = cfg.points[0];
    point = (this as any).parsePoint(point);
    const center = (this as any).parsePoint({
      x: 0,
      y: 0,
    });
    group.addShape('line', {
      attrs: {
        x1: center.x,
        y1: center.y,
        x2: point.x,
        y2: point.y,
        stroke: cfg.color,
        lineWidth: 2,
        lineCap: 'round',
      },
    });
    return group.addShape('circle', {
      attrs: {
        x: center.x,
        y: center.y,
        r: 6,
        stroke: cfg.color,
        lineWidth: 3,
        fill: '#fff',
      },
    });
  },
});

const defaultScale = {
  value: {
    min: 0,
    max: 1,
    tickInterval: 0.1,
    nice: false,
  },
}

export interface GaugeProps {
  height?: number;
  label?: string;
  value?: number;
  scale?: any;
  /**
   * html 中内联样式
   */
  labelColor?: string;
  valueColor?: string;
}

const Gauge: React.FC<GaugeProps> = (props) => {
  const {
    label,
    value = 0,
    scale = defaultScale,
    height = 1,
    labelColor = "rgba(0,0,0,0.43)",
    valueColor = "rgba(0,0,0,0.85)",
  } = props;

  const labelHtml = label ? `<p style="font-size:14px; color:${labelColor}; margin: 0;">${label}</p>` : "";

  const valueHtml = `
    <div style="width:300px; text-align:center; font-size:12px!important;">
      ${labelHtml}
      <p style="font-size:24px; color:${valueColor}; margin: 0;"}}>
        ${value}
      </p>
    </div>
`;

  const maxValue = scale.value.max;
  console.log("gauge", value, maxValue, value / maxValue * 10);

  return (
    <Chart height={height} data={[{ value }]} scale={scale} padding={[-16, 0, 16, 0]} forceFit>
      <Coord type="polar" startAngle={-1.25 * Math.PI} endAngle={0.25 * Math.PI} radius={0.8} />
      <Axis
        name="value"
        zIndex={2}
        line={null}
        subTickCount={4}
        label={{
          offset: -14,
          textStyle: {
            fontSize: 14,
            textAlign: 'center',
            textBaseline: 'middle',
          },
        }}
        subTickLine={{
          length: -8,
          stroke: '#fff',
          strokeOpacity: 1
        }}
        tickLine={{
          length: -17,
          stroke: '#fff',
          strokeOpacity: 1
        }}
        grid={null}
      />
      <Axis name="1" line={null} />
      <Guide>
        <Guide.Arc
          zIndex={0}
          start={[0, 0.965]}
          end={[maxValue, 0.965]}
          style={{ // 底灰色
            stroke: '#CBCBCB',
            lineWidth: 10,
          }}
        />
        <Guide.Arc
          zIndex={1}
          start={[0, 0.965]}
          end={[value, 0.965]}
          style={{
            stroke: '#1890FF',
            lineWidth: 10,
          }}
        />
        <Guide.Html
          position={['50%', '95%']}
          html={valueHtml}
        />
      </Guide>
      <Geom
        type="point"
        position="value*1"
        shape="pointer"
        color="#1890FF"
        active={false}
        style={{ stroke: '#fff', lineWidth: 1 }}
      />
    </Chart>
  );
}

export default autoHeight()(Gauge);