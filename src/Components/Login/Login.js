import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';

const Login = () => {
	const [signInWithGoogle, user] = useSignInWithGoogle(auth);
	const handleSubmit = e => {
		e.preventDefault();
	}
	const navigate = useNavigate();
	const location = useLocation();
	let from = location.state?.from?.pathname || "/";

	const handleSignWithGoogle = () => {
		signInWithGoogle()
		.then(() => {
			navigate(from, { replace: true });
		})
	}
	return (
		<div>
			<h3>Please Login</h3>
			<form onSubmit={handleSubmit}>
				<input type="email" placeholder='Your Email' />
				<br />
				<input type="password" name="" id="" placeholder='Password' />
				<br />
				<input type="submit" value="Login" />
			</form>
			<div style={{ margin: '20px' }}>
				<button onClick={handleSignWithGoogle}>Google Sign In</button>
			</div>
		</div>
	);
};

export default Login;