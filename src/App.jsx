import React from "react";
import "./App.css";
import {
  Header,
  Balance,
  IncomeExpense,
  TransactionList,
  AddTransaction,
} from "./components/";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
