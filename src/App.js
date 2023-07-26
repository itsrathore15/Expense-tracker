import Balance from './components/Balance';
import Header from './components/Header';
import './App.css';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import Addtransaction from './components/Addtransaction';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
       <Header></Header>
        <div className="container">
            <Balance></Balance>
            <IncomeExpenses></IncomeExpenses>
            <TransactionList></TransactionList>
            <Addtransaction></Addtransaction>
        </div>
    </GlobalProvider>
  );
}

export default App;
