import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  const total = transactions.reduce((acc, el) => {
    return (acc += el.amount);
  }, 0);
  return (
    <>
      <h4>Your Balance</h4>
      <h1> {total} $</h1>
    </>
  );
}

export default Balance;
