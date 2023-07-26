import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';

const Transaction = ({transaction}) => {
   const {deleteTransaction}=useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <div>
       <li className={transaction.amount<0 ? "minus" : "plus"}>
          {transaction.text} <span>{sign}Rs.{Math.abs(transaction.amount)}</span>
          <button onClick={()=>deleteTransaction(transaction.id)} class="delete-btn">x</button>
        </li>
    </div>
  )
}

export default Transaction