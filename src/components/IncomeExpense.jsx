import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((el) => el.amount);

  const incomeTot = amounts
    .filter((el) => el > 0)
    .reduce((acc, el) => (acc += el), 0)
    .toFixed(2);

  const expenseTot = amounts
    .filter((el) => el < 0)
    .reduce((acc, el) => (acc += el), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{incomeTot}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expenseTot}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
