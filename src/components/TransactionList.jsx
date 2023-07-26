import React from 'react'
import { GlobalContext } from '../Context/GlobalState';
import { useContext } from 'react';
import Transaction from './Transaction';

const TransactionList = () => {
    const {transactions}=useContext(GlobalContext);
    //console.log(transactions);
   

  return (
    <div>
        <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction=>(<Transaction key={transaction.id} transaction={transaction}></Transaction>))}  
      </ul>
    </div>
  )
}

export default TransactionList