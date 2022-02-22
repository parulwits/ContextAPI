
import { useContext } from 'react';
import { AppContext } from '../context';
import { UserBox, Button } from '../styles/user'
const User = ({ user }) => {
	const { dispatchUserEvent } = useContext(AppContext);

	const handleRemoveUser = () => {
		dispatchUserEvent('REMOVE_USER', { userId: user.id });
	};
	return (
		<UserBox>
			<div >Name: <small>{user.name}</small></div>
			<div>Age: <small>{user.age}</small></div>
			<div>Bio: <small> {user.bio}</small></div>
			<Button onClick={handleRemoveUser}>Delete user</Button>
		</UserBox>
	);
};

export default User;