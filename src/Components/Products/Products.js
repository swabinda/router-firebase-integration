import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const Products = () => {
	const [user] = useAuthState(auth)
	return (
		<div>
			<h2>knock knock! who is there?</h2>
			<h6>{user ? user.displayName : 'Ghost'}</h6>
		</div>
	);
};

export default Products;