import React, {Component} from 'react'

class Calculation extends Component {
    // state ( {
    //     vnd: '',
    //     usd: ''
    // })

    onChangeCurrency = (currency, event) =>{
        const value = event.target.value
        if (value) {
            this.convertMoney(currency, value)
        }
        else {
            this.setState({
                vnd : '',
                usd : ''
            })
        }
    }
    convertMoney = (currency, number) => {
        const currencyRevert = (currency === 'vnd' ) ? 'usd' : 'vnd' 
        const result = (currency === 'vnd') ? number*22 : number /22 
        this.setState = {
            [currency]: number,
            [currencyRevert]: result
        }
    }
    render () {
        return (
            <div>
                <div>
                    <input type = "number" 
                        value = {this.state.vnd} 
                        placeholder = 'VND'
                        // onChange = {(event) => this.onChangeCurrency('vnd', event)}
                        ref = {(event) => this.vnd = event}
                        />
                    <span>VND</span>
                </div>
                <div>
                    <input type = "number" value = {this.state.usd} placeholder = 'USD'
                        // onChange = {(event) => this.onChangeCurrency('vnd', event)}
                        ref = {(event) => this.USD = event}
                    />
                    <span>USD</span>
                </div>
            </div>
        )
    }
}

export default Calculation
