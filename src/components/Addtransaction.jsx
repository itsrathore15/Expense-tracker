import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';


const Addtransaction = () => {
   const {addTransaction}=useContext(GlobalContext);

   const [text,setText]=React.useState('');
   const [amount,setAmount]=React.useState(0);
   
   function onSubmit(e){
    e.preventDefault();
    const newTransaction={
        id:Math.floor(Math.random() * 100000000),
        text,
        amount:+amount
    }
    addTransaction(newTransaction);
   }

  return (
    <div>
         <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default Addtransaction