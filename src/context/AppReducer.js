import * as transactionsTypes from "./ActionTypes";

export default (state, action) => {
  switch (action.type) {
    case transactionsTypes.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case transactionsTypes.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (el) => el.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
