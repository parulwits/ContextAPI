import React, { useContext } from 'react';
import { AppContext } from '../context';
import User from './User';
import { StyledContainer, Title, List, Container } from '../styles/userlist';

const UserList = () => {
	const { users } = useContext(AppContext);
	return (
		<Container>
		<StyledContainer>
			<Title>{users.length ? 'Available Users' : ' No Available Users'}</Title>
			<List>
			{users.map(user => <User key={user.id} user={user} />)}
  			</List>
		</StyledContainer>
		</Container>
	);
};

export default UserList;