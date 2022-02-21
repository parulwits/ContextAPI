import React, { useContext } from 'react';
import { AppContext } from '../context';
import User from './User';

const UserList = () => {
	const { users } = useContext(AppContext);
	return (
		<div className='app'>
			<div className="list">
				<div className="title">{users.length ? 'Available Users' : ' No Available Users'}</div>
				{users.map(user => <User key={user.id} user={user} />)}
			</div>
		</div>
	);
};

export default UserList;