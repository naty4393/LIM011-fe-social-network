import { loginUsers } from './controller-firebase.js';

export const loginUser = (email, password) => {

    loginUsers (email, password)
      .then(() => {
          firebase.auth().currentUser;
          window.location.hash = '#/perfilHome';
      }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      let errorMessage = error.message;
      // ...
      console.log(errorCode);
      console.log(errorMessage);
      })
};