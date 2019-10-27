import React from 'react';
import Phone from './phone.png';
import './App.css';

export class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div>
                <img className="img" src={Phone} alt="phone"></img>
            </div>
        );
    }
}