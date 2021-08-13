import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {

	const { transactions } = useContext(GlobalContext);
	let total_income = transactions.filter( (income) => income.amount >= 0).reduce( (sum, income) => sum + income.amount, 0).toFixed(2);
	let total_expense = transactions.filter( (expense) => expense.amount < 0).reduce( (sum, expense) => sum + expense.amount, 0).toFixed(2);

	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p className="money plus">
					R{total_income}
				</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className="money minus">
					R{total_expense}
				</p>
			</div>

		</div>
	)
}