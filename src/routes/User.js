
import { useContext } from 'react';
import { AppContext } from '../context';

const User = ({ user }) => {
	const { dispatchUserEvent } = useContext(AppContext);

	const handleRemoveUser = () => {
		dispatchUserEvent('REMOVE_USER', { userId: user.id });
	};
	return (
		<div className="user-box">
			<div >Name: <small>{user.name}</small></div>
			<div>Age: <small>{user.age}</small></div>
			<div>Bio: <small> {user.bio}</small></div>
			<div className="button-container">
				<button onClick={handleRemoveUser}>Delete user</button>
			</div>

		</div>
	);
};

export default User;