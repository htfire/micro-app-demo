import React, { useState } from 'react';
import { Drawer, Button, Select } from 'antd';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
    </div>
  );
}

export default App;