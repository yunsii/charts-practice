import React from 'react';

export default (component: React.ReactNode) => {
  return (
    <div style={{ padding: "24px 48px 0" }}>
      {component}
    </div>
  )
}
