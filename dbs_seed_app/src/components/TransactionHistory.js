import React, { Component } from "react";

export class TransactionHistory extends Component {
  state = {
    loading: true,
    transactions: [], //empty array to store the data
  };

  async componentDidMount() {
    const url = "http://www.json-generator.com/api/json/get/ceyXMrwjvS?indent=2";
    // fetch is an async function
    // so we use async and await to make then sync
    // so it will wait here to fetch the data then move on next line
    const response = await fetch(url);
    const data = await response.json();
    //data gives the array list
    this.setState({ transactions: data, loading: false });
    console.log(data);
  }

  render() {

    if (this.state.loading) {
        return <div>loading...</div>;
      } else if (!this.state.transactions.length) {
        return <div>didnt get transaction history</div>;
      }

    return (
      <div>
        <h3>Fetch API for transactions</h3>
        {this.state.transactions.map((transaction) => (
          <div key={transaction.dateTime} className="transaction">
            {" "}
            {/* this is the root div and it needs a unique key else throws error */}
            <div>
              CustomerID: {transaction.custID} 
            {/* </div>
            <div> */}
            DateTime: {transaction.dateTime} 
            {/* </div>
            <div> */}
            Amount: {transaction.amount}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default TransactionHistory;
