// eslint-disable-next-line max-len
export const createUser = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

// eslint-disable-next-line max-len
export const loginUsers = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const SignGmail = provider => firebase.auth().signInWithPopup(provider);

export const signOutUsers = () => firebase.auth().signOut();

export const signInFacebook = provider => firebase.auth().signInWithPopup(provider);

export const dataUsers = (res, email, name, birthday, lastname) => firebase.firestore().collection('users').doc(res.user.uid).set({
  birthday,
  email,
  lastname,
  name,
});

export const getInformation = id => firebase.firestore().collection('users').doc(id).get();

const savePost = user => firebase.firestore().collection('post').doc(user.uid);

export const storePost = (user, post, date, username, number) => savePost(user).collection('posts')
  .doc(number).set({
    number,
    post,
    date,
    username,
  });

export const getPost = () => firebase.firestore().collection('posts');

export const deletePost = user => firebase.firestore().collection('post').doc(user.uid).delete();
