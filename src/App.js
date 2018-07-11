import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
// import Intro from './Intro.js';
// import Number from './Number.js';
// import Selector from './Selector.js';
import MoneyConverter from './MoneyConverter.js';
// import Calculation from './Calculation.js';
// import Product from './Product';
import products from './Data/products.js';
import Button from './Button';
import Products from './Products';
import Form from './Form';
import SearchField from './SearchField';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          products: products,
          isForm: false,
          status: 0,
          filterNumber: 0,
          value: "0"
        }
        }
    

  //  renderElement = (yourName) => {
  //     return <p>{`Hello Worldcup ${yourName}`}</p>
  //   }

    // showProduct = () => {
    //   this.setState({
    //     showProduct: true,
    //     showProductLess: false,
    //     showProductGreater:false
    //   });
    // }
    // showProductLess = () => {
    //   this.setState({
    //     showProductLess: true,
    //     showProduct: false,
    //     showProductGreater:false
    //   });
    // }
    // showProductGreater = () => {
    //   this.setState({
    //     showProductGreater: true,
    //     showProduct: false,
    //     showProductLess:false
    //   });
    // }

    filterProduct = (name) => {
      const number = parseInt(name.split(' ')[1])
      let resultFilter = []
      let status =0
      if (!number) {
        resultFilter = products
        this.setState ({
          status: 0
        })
      }
      else {
        if (name.includes('=')) {
          resultFilter = products.filter(pro => pro.price <= number)
          this.setState ({
            status: 2
          })
        } else {
          resultFilter = products.filter(pro => pro.price > number)
          this.setState ({
            status: 1
          })
        }
      }
      this.setState ({
        products: resultFilter,
        filterNumber: number
      })
    }
    gotoForm = () => {
      this.setState ({
        isForm: true
      })
    }
    goBack = () => {
      this.setState ({
        isForm: false
      })
    }

    renderButton = () => {
      const buttons = [{
        name: 'ALL',
        onClick: (name) => {this.filterProduct(name)}
      }, {
        name: '> 1000',
        onClick: (name) => {this.filterProduct(name)}
      }, {
        name: '<= 1000',
        onClick: (name) => {this.filterProduct(name)}
      }, {
        name: '+',
        onClick: () => this.gotoForm()
      }]

      return (
        buttons.map(btn => (
          <Button
          nameBtn = {btn.name}
            onClick = {btn.onClick}
            />
        ))
      )
    }
    searchProduct = (event) => {
      console.log("event", event);
      let filterProduct = []
      switch (this.state.status) {
        case 0:
          this.setState({
            value: "value",
            products: products.filter(pro => pro.name.includes(event.target.value))
          });
          break;
        case 1:
          this.setState({
            value: "value",
            products: products.filter(p => p.price > this.state.filterNumber).filter(pro => pro.name.includes(event.target.value))
          });
          break;
        case 2:
          this.setState({
            value: "value",
            products: products.filter(p => p.price <= this.state.filterNumber).filter(pro => pro.name.includes(event.target.value))
          });
          break;
      
        default:
          break;
      }     
    }
    render() {
      return (
        <div>
          {
            this.state.isForm?
            <Form
              goBack = {this.goBack}
            /> :
            <div>
              {this.renderButton()}
              <SearchField 
                searchProduct = {this.searchProduct}
              />
              <Products
                products = {this.state.products}
              />
              <h1>{this.state.value}</h1>
            </div>
          }
          
        </div>
      )
    }
}

export default App;