import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Header from './Header.js';
// import Intro from './Intro.js';

class MoneyConverter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value1: 0,
      value2: 0,
    }
  }
  handleChange = (pos, event) => {
      console.log(event);
      console.log(pos);
      
    this.setState({
        value1: (pos === 'value1')? event.target.value : event.target.value/20,
        value2: (pos === 'value1')? event.target.value*20 : event.target.value,
    });
  }

  render() {
    console.log('props', this.props);
    return (
        <div className="Selector" >
            <input type="number"
                style={{height: 40}}
                value = {this.state.value1}
                onChange = {(event) => this.handleChange("value1", event)}
            />
            <input type="number"
                style={{height: 40}}
                value = {this.state.value2}
                onChange = {(event) => this.handleChange("value2", event)}
            />
            <h1>{this.state.value1}</h1>
            <h1>{this.state.value2}</h1>
        </div>
    )
  }
}

export default MoneyConverter;
