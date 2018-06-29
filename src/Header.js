import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Header extends Component {

  constructor(props) {
    super(props)
  }

  renderElement = (lop) => {
    return <p>{`Hello ${lop}`}</p>
  }

  render() {
    console.log('props', this.props);
    
    return (
      <header className="App-header">
        <img className="App-logo" src={logo} alt="logo"/>
        <h1 className="App-title">Welcome to Reacts</h1>
      </header>    );
  }
}
export default Header;
