import React from 'react';
import './App.css';

function transferpage() {
  return(
    <div className="abc">
      <h1>Transfer Page</h1>
      <form>
      <fieldset>
         <label>
           <p>Name:</p>
           <p>Bank Account:</p>
           <input Bankaccount="Bank Account"/>
           <p>Transfer Amount:</p>
           <input TransferAmount="Transfer Amount"/>
         </label>
       </fieldset>
       <button type="submit">Transfer</button>
      </form>
    </div>
  )
}

export default transferpage;