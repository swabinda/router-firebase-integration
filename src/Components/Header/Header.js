import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'
const Header = () => {
	const {user, handleLogOut} = useFirebase();
	return (
		<div className='header'>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/products">Products</Link>
				<Link to="/orders">Orders</Link>
				<Link to="/register">Register</Link>
				<span>{user?.displayName && user.displayName}</span>
				{
					user?.uid ? <Link onClick={handleLogOut} to="/logout">Log Out</Link> :
					<Link to="/login">Login</Link>
				}
			</nav>
		</div>
	);
};

export default Header;