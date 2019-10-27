import React from 'react';
import Phone from './phone.png';
import './App.css';

export class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    setStyles = (marginTop, marginLeft) => {
        return {
            marginTop: marginTop,
            marginLeft: marginLeft
        };
    }
    render() {
        const marginTop123 = 608;
        const marginTop456 = 648;
        const marginTop789 = 695;
        const marginTop0 = 735;
        const marginTopOk = 525;
        const marginLeft147 = 205;
        const marginLeft258 = 268;
        const marginLeft369 = 330;
        return(
            <div>
                <input type = "button" onClick={() => this.props.changeInput(1)} name = "box1" value = "one" className = "phonebutton" id = "button1" style = {this.setStyles(marginTop123, marginLeft147)} />
                <input type = "button" onClick={() => this.props.changeInput(2)} name = "box2" value = "two" className = "phonebutton" id = "button2" style = {this.setStyles(marginTop123, marginLeft258)}/>
                <input type = "button" onClick={() => this.props.changeInput(3)} name = "box3" value = "three" className = "phonebutton" id = "button3" style = {this.setStyles(marginTop123, marginLeft369)}/>
                <input type = "button" onClick={() => this.props.changeInput(4)} name = "box4" value = "four" className = "phonebutton" id = "button4" style = {this.setStyles(marginTop456, marginLeft147)}/>
                <input type = "button" onClick={() => this.props.changeInput(5)} name = "box5" value = "five" className = "phonebutton" id = "button5" style = {this.setStyles(marginTop456, marginLeft258)}/>
                <input type = "button" onClick={() => this.props.changeInput(6)} name = "box6" value = "six" className = "phonebutton" id = "button6" style = {this.setStyles(marginTop456, marginLeft369)}/>
                <input type = "button" onClick={() => this.props.changeInput(7)} name = "box7" value = "seven" className = "phonebutton" id = "button7" style = {this.setStyles(marginTop789, marginLeft147)}/>
                <input type = "button" onClick={() => this.props.changeInput(8)} name = "box8" value = "eight" className = "phonebutton" id = "button8" style = {this.setStyles(marginTop789, marginLeft258)}/>
                <input type = "button" onClick={() => this.props.changeInput(9)} name = "box9" value = "nine" className = "phonebutton" id = "button9" style = {this.setStyles(marginTop789, marginLeft369)}/>
                <input type = "button" onClick={() => this.props.changeInput(0)} name = "box0" value = "zero" className = "phonebutton" id = "button0" style = {this.setStyles(marginTop0, marginLeft258)}/>
                <input type = "button" onClick={() => this.props.changeInput("ok")} name = "boxok" value = "ok" className = "phonebutton" id = "buttonok" style = {this.setStyles(marginTopOk, marginLeft258)}/>
                <img className="img" src={Phone} alt="phone"></img>
            </div>
        );
    }
}