import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
export const Transaction = ({ transaction }) => {

	const { deleteTransaction } = useContext(GlobalContext);

	return (
		<li className={transaction.amount < 0 ? 'minus' : 'plus'} key={transaction.id}>
		{transaction.text} <span key={transaction.id}>R{transaction.amount.toFixed(2)}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
	</li>
	)
}