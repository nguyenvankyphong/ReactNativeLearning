import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

const egFunc = (name) => {
    return (
        <h1>Hello {name}</h1>
    )
}
const Intro = (props) => {
    return (
        <div>
            <p>Welcome</p>
            {egFunc(props.class)}
        </div>
      )
}

export default Intro;
