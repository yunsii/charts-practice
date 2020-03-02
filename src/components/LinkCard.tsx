import React from 'react';
import { Card } from 'antd';

export interface LinkProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

export default (props: LinkProps) => {
  const { href, title, children } = props;

  return (
    <Card
      title={<a href={href} target="_blank">{title}</a>}
      style={{ margin: "24px 48px 0" }}
      bodyStyle={{ display: "flex", justifyContent: "center" }}
    >
      {children}
    </Card>
  )
}
