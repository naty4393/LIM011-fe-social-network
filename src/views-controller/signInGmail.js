import { SignGmail } from './controller-firebase.js';

export const signInWithGmail = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  console.log('ingreso', provider);

  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().languageCode = 'pt';

  SignGmail(provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('ingreso promesa', user);
      console.log('ingreso token', token);
      // ...
      /* firebase.auth().signInWithRedirect(provider);
      firebase.auth().getRedirectResult()
        .then((res) => {
          if (res.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
            const tokenG = res.credential.accessToken;
            console.log(tokenG);
            // ...
            window.location.hash = '#/perfilHome';
          }
          // The signed-in user info.
          const users = res.user;
          console.log(users);
        }).catch((error) => {
        // Handle Errors here.
          const errorCodeG = error.code;
          const errorMessageG = error.message;
          // The email of the user's account used.
          const emailG = error.email;
          // The firebase.auth.AuthCredential type that was used.
          const credentialG = error.credential;
          // ...
          console.log(errorCodeG);
          console.log(errorMessageG);
          console.log(emailG);
          console.log(credentialG);
        }); */
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
      console.log('error de codigo', errorCode);
      console.log('sms error', errorMessage);
      console.log('error de email', email);
      console.log('credencial', credential);
    });
};
