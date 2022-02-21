import React, { useState, createContext } from 'react';
const AppContext = createContext();

const ContextProvider = (props) => {
	const [users, setUsers] = useState([]);

	const dispatchUserEvent = (actionType, payload) => {
		switch (actionType) {
			case 'ADD_USER':
				setUsers([...users, payload.newUser]);
				return;
			case 'REMOVE_USER':
				setUsers(users.filter(user => user.id !== payload.userId));
				return;
			default:
				return;
		}
	};
	return (
		<AppContext.Provider value={{ users, dispatchUserEvent }}
		>
			{props.children}
		</AppContext.Provider>
	)
}

export { AppContext, ContextProvider }
