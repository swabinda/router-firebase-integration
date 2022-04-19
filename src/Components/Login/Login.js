import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
	const { signInWithGoogle} = useFirebase();
	const handleSubmit = e => {
		e.preventDefault();
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
				<button onClick={signInWithGoogle}>Google Sign In</button>
			</div>
		</div>
	);
};

export default Login;