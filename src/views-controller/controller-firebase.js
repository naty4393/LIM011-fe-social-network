export const createUser = (email,password) => firebase.auth().createUserWithEmailAndPassword(email, password);

export const loginUsers = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const signOutUsers = () => firebase.auth().signOut();

export const dataOfUsers = () => firebase.firestore().collection('user').doc(user.uid).get();