import React, { Component } from 'react'
import './style.css';

export default class Home extends Component {

    state={
        balance: 1500
    }
    render() {
        return (
            <div>
                
                <h3>Welcome to DBS</h3>
                <div><img className = "photo" src = "data:image/png;base64,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" alt=""/>
                </div>
                <div><button className="button">Transaction History</button></div>
                <br></br>
                <button className="button">Transfer</button>
                 <div className="balance">
                     <h3>Available Balance: ${this.state.balance}</h3>
                </div>
            
            </div>
        )
    }
}
