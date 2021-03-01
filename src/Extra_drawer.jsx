import React from 'react';
import { Drawer, Button } from 'antd';

const Extra_drawer = ()=>{
    return (
      <div className="site-drawer-render-in-current-wrapper">
        Render in this
        <div style={{ marginTop: 16 }}>
          <Button type="primary">
            Open
          </Button>
        </div>
        <Drawer
          title="Basic Drawer"
          placement="right"
          style={{ position: 'absolute' }}
        >
          <p>Some contents...</p>
        </Drawer>
      </div>
    );
}
export  default Extra_drawer;