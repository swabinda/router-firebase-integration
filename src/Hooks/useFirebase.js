import { useEffect, useState } from "react"
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth"
import app from "../firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
	const [user, setUser] = useState({});

	const signInWithGoogle = () => {
		signInWithPopup(auth, googleProvider)
		.then((result) => {
			const user = result.user;
			setUser(user);
			console.log(user);
		}).catch((error) => {
			const errorMessage = error.message;
			console.log(errorMessage);

		});

	}
	const handleLogOut = () => {
		signOut(auth).then(() => {

		})
	}
	useEffect(() => {
		onAuthStateChanged(auth, user => {
			setUser(user);
		})
	}, [])
	return {user, signInWithGoogle, handleLogOut}
}
export default useFirebase;