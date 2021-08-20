import React, { Context, createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import * as transactionTypes from "./ActionTypes";

const initial_state = {
  transactions: [
    { id: 1, text: "Salary", amount: 1000 },
    { id: 3, text: "Bet", amount: -100 },
    { id: 5, text: "Food", amount: -200 },
    { id: 6, text: "Food", amount: -100 },
    { id: 4, text: "Bet", amount: 150 },
  ],
};

// Create Context
export const GlobalContext = createContext(initial_state);

// Provider
// le GlobalPovider va wrapper tout l'appli => il aura l'App en props, children qui sera l'App wrappée
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initial_state);

  /**
   * Add transaction action
   * @param {*} transaction
   * @returns action
   */
  function addTransaction(transaction) {
    dispatch({
      type: transactionTypes.ADD_TRANSACTION,
      payload: transaction,
    });
  }

  /**
   * Delete transaction action
   * @param {*} payload - Transaction
   * @returns action
   */
  function deleteTransaction(id) {
    dispatch({
      type: transactionTypes.DELETE_TRANSACTION,
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
