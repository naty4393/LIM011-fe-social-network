import { signInFacebook } from './controller-firebase.js';

export const signInWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  console.log('ingreso', provider);

  signInFacebook(provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('ingreso promesa f', user);
      console.log('ingreso token f ', token);
    // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
      console.log('error de codigo f ', errorCode);
      console.log('sms error f ', errorMessage);
      console.log('error de email f', email);
      console.log('credencial f', credential);
    });
};
