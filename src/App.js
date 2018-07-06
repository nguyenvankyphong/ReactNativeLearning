import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
// import Intro from './Intro.js';
// import Number from './Number.js';
// import Selector from './Selector.js';
import MoneyConverter from './MoneyConverter.js';
// import Calculation from './Calculation.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1,
      name: 'phong',
    }
  }
  com

  renderElement = (name) => {
    return <p>{`Hello ${name}`}</p>
  }

  render() {
    console.log('props', this.props);
    return (
      <div>
        <Header className="App" lop= {'Hoai'}/>
        {/* <Intro className="App" class = {'React'}/> */}
        {/* <Number class = {'React'}/> */}
        {/* <h1>{this.state.value}</h1> */}
        {/* <Selector/> */}
        <MoneyConverter/>
        {/* <Calculation/> */}
      </div>
    )
  }
}

export default App;
