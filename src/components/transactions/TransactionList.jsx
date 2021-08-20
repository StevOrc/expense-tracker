import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Transaction from "./Transaction";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  const renderTransaction = transactions.map((el) => (
    <Transaction key={el.id} transaction={el} />
  ));
  return (
    <>
      <h3>History</h3>
      <ul className="list">{renderTransaction}</ul>
    </>
  );
}

export default TransactionList;
