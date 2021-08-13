import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {

	const { transactions } = useContext(GlobalContext);
	let available_balance = transactions.map( (balance) => balance).reduce( (sum, balance) => sum + balance.amount, 0).toFixed(2)

	return (
		<>
			<h4> Your Balance </h4>
			<h1>R{available_balance}</h1>
		</>
	)
}