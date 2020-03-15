import React, { } from 'react';
import { Chart, Axis, Coord, Geom, Guide, Shape } from 'bizcharts';

const { Html, Arc } = Guide;

(Shape as any).registerShape('point', 'pointer', {
  drawShape(cfg, group) {
    let point = cfg.points[0]; // 获取第一个标记点
    point = this.parsePoint(point);
    const center = this.parsePoint({ // 获取极坐标系下画布中心点
      x: 0,
      y: 0,
    });
    // 绘制指针
    group.addShape('line', {
      attrs: {
        x1: center.x,
        y1: center.y,
        x2: point.x,
        y2: point.y - 20,
        stroke: cfg.color,
        lineWidth: 5,
        lineCap: 'round',
      },
    });
    return group.addShape('circle', {
      attrs: {
        x: center.x,
        y: center.y,
        r: 12,
        stroke: cfg.color,
        lineWidth: 4.5,
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
  label?: string;
  value?: number;
  scale?: any;
}

export const Gauge: React.FC<GaugeProps> = (props) => {
  const { label, value = 0, scale } = props;

  const labelHtml = label && `<p style="font-size:1.75em; color:rgba(0,0,0,0.43); margin: 0;">${label}</p>`;

  const valueHtml = `
    <div style="width:300px; text-align:center; font-size:12px!important;">
      ${labelHtml || ""}
      <p style="font-size:3em; color:rgba(0,0,0,0.85); margin: 0;"}}>
        ${value}
      </p>
    </div>
`;

  return (
    <Chart height={600} data={[{ value }]} scale={scale || defaultScale} padding={[0, 0, 200, 0]} forceFit>
      <Coord type="polar" startAngle={-9 / 8 * Math.PI} endAngle={1 / 8 * Math.PI} radius={0.75} />
      <Axis
        name="value"
        zIndex={2}
        line={null}
        label={{
          offset: -16,
          textStyle: {
            fontSize: 18,
            textAlign: 'center',
            textBaseline: 'middle',
          },
        }}
        subTickCount={4}
        subTickLine={{
          length: -8,
          stroke: '#fff',
          strokeOpacity: 1,
        }}
        tickLine={{
          length: -18,
          stroke: '#fff',
          strokeOpacity: 1,
        }}
      />
      <Axis name="1" visible={false} />
      <Guide>
        <Arc
          // zIndex={0}
          start={[0, 0.965]}
          end={[9, 0.965]}
          style={{ // 底灰色
            stroke: '#CBCBCB',
            lineWidth: 18,
          }}
        />
        <Arc
          // zIndex={1}
          start={[0, 0.965]}
          end={[value, 0.965]}
          style={{
            stroke: '#1890FF',
            lineWidth: 18,
          }}
        />
        <Html
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

export default Gauge;
