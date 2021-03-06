import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {

  const {transactions} = useContext(GlobalContext)
 

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (
        <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
          Cash <span>-${transaction.amount}</span>
          <button className="delete-btn">x</button>
        </li>

        ))}
      </ul>
    </>
  );
};
