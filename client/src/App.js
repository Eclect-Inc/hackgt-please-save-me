import React from 'react';
import { Demo } from './demo.js';
import { Button } from 'antd';
import { Input } from 'antd';
import { Icon } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  changeInput = (input) => {
    this.setState({
      value: this.state.value !== "" ? this.state.value.toString() + input : input
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Demo changeInput={this.changeInput}/>
          <div className="input-panel">
            <p>Improving Accessibility via SMS</p>
            <div className="input">
              <Input placeholder="Input message here." style={{marginRight: 10}} value={this.state.value}/>
              <Button type="primary" shape="square" icon="double-right"/>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;