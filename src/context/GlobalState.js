import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
	transactions: [
	  { id: 1, text: 'iPhone 6s', amount: -3600.00 },
	  { id: 2, text: 'Salary', amount: 42000.00 },
	  { id: 7, text: 'Rent', amount: -6500.00 },
	  { id: 3, text: 'Book', amount: -350.00 },
	  { id: 5, text: 'Grocery', amount: -3000 },
	  { id: 4, text: 'Alcohol', amount: -239 },
	],
}
// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions

	function deleteTransaction(id) {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id
		})
	}
	function addTransaction(transaction) {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction
		})
	}

	return (<GlobalContext.Provider value={{
		transactions: state.transactions,
		deleteTransaction,
		addTransaction
	}}>
		{children}
	</GlobalContext.Provider>)
}