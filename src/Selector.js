import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Header from './Header.js';
// import Intro from './Intro.js';

class Selector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
    }
  }
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  render() {
    console.log('props', this.props);
    return (
        <div className="Selector" >
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="1">1</option>
            </select>
            <h1>{this.state.value}</h1>
        </div>
    )
  }
}

export default Selector;
