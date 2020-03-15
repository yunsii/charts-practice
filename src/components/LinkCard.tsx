import React from 'react';
import { Card } from 'antd';

import withGutter from './utils/withGutter';

export interface LinkProps {
  href?: string;
  title: string;
  children: React.ReactNode;
}

export default (props: LinkProps) => {
  const { href, title, children } = props;

  return withGutter(
    <Card
      title={href ? <a href={href} target="_blank">{title}</a> : title}
      bodyStyle={{ display: "flex", justifyContent: "center" }}
    >
      {children}
    </Card>
  );
};
