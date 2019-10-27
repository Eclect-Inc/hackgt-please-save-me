import React from 'react';
import ReactDOM from 'react-dom';
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
                <input type = "submit" name = "box1" value = "submit" className = "phonebutton" id = "button1"/>
                <input type = "submit" name = "box2" value = "submit" className = "phonebutton" id = "button2"/>
                <input type = "submit" name = "box3" value = "submit" className = "phonebutton" id = "button3"/>
                <input type = "submit" name = "box4" value = "submit" className = "phonebutton" id = "button4"/>
                <input type = "submit" name = "box5" value = "submit" className = "phonebutton" id = "button5"/>
                <input type = "submit" name = "box6" value = "submit" className = "phonebutton" id = "button6"/>
                <input type = "submit" name = "box7" value = "submit" className = "phonebutton" id = "button7"/>
                <input type = "submit" name = "box8" value = "submit" className = "phonebutton" id = "button8"/>
                <input type = "submit" name = "box9" value = "submit" className = "phonebutton" id = "button9"/>
                <input type = "submit" name = "box10" value = "submit" className = "phonebutton" id = "button10"/>
                <input type = "submit" name = "boxok" value = "submit" className = "phonebutton" id = "buttonok"/>
                <img className="img" src={Phone} alt="phone"></img>
            </div>
        );
    }
}