import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCHgy97VQoJIEuV-P2WC8G-RNtY6FY8raY",
  authDomain: "cryptovis.firebaseapp.com",
  databaseURL: "https://cryptovis.firebaseio.com",
  projectId: "cryptovis",
  storageBucket: "cryptovis.appspot.com",
  messagingSenderId: "773563328730"
};
  
firebase.initializeApp(config);


export const auth = firebase.auth();
export const db = firebase.database();

export const isAuthenticated = () => {
  return !!auth.currentUser
}

export const provider = new firebase.auth.GoogleAuthProvider();

export const googleSignIn = () => {
	return firebase.auth().signInWithPopup(provider).then(user => console.log(user))
}

export const fetchWatchList = async (user) => {
	return db.ref('watchlists/' + user.uid ).once('value')
}



export default firebase;

