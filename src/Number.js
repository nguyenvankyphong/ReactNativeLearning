import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Header from './Header.js';
// import Intro from './Intro.js';

class Number extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      name: 'phong',
    }
  }
  click = (type) => {
    const value = this.state.value
    this.setState ({
        value: (type == 'UP')? value + 1 : value -1
    }
    )
  }
  

  renderElement = (name) => {
    return <p>{`Hello ${name}`}</p>
  }

  render() {
    console.log('props', this.props);
    return (
      <div>
        {/* <Header className="App" lop= {'Hoai'}/>
        <Intro className="App" class = {'React'}/> */}
        <h1>{this.state.value}</h1>
        <button onClick = {() => this.click('UP')}>+</button>
      </div>
    )
  }
}

export default Number;
