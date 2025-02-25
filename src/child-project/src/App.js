import React from 'react';
import { Select, Tooltip } from 'antd';
import './App.css';

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log('search:', value);
};

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>子应用<span style={{ fontSize: '30px' }}>react19+antd5</span></h1>
      <div>下拉选择：
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="label"
          onChange={onChange}
          onSearch={onSearch}
          options={[
            {
              value: 'jack',
              label: 'Jack',
            },
            {
              value: 'lucy',
              label: 'Lucy',
            },
            {
              value: 'tom',
              label: 'Tom',
            },
          ]}
        />
      </div>
    </header>
  </div>
);

export default App;