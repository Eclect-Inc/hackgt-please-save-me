import React from 'react';
import { Demo } from './demo.js';
import { Button } from 'antd';
import { Input } from 'antd';
import { Icon } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { white } from 'ansi-colors';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Demo />
        <div className="input-panel">
          <p>Improving Accessibility via SMS</p>
          <div className="input">
            <Input placeholder="Input message here." style={{marginRight: 10}}/>
            <Button type="primary" shape="square" icon="double-right"/>
          </div>
        </div>
        <div style={{backgroundColor: white, height: 50, width: 50}}>

        </div>
      </header>
    </div>
  );
}

export default App;