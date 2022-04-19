import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import './Header.css'
const Header = () => {
	const [user] = useAuthState(auth);
	const logOut = () => {
		signOut(auth);
	}
	return (
		<div className='header'>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/products">Products</Link>
				<Link to="/orders">Orders</Link>
				<Link to="/register">Register</Link>
				<span>{user?.displayName && user.displayName}</span>
				{
					user?.uid ? <Link onClick={logOut} to="/logout">Log Out</Link> :
					<Link to="/login">Login</Link>
				}
			</nav>
		</div>
	);
};

export default Header;