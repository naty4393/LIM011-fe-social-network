import { loginUsers } from './controller-firebase.js';

export const loginUser = (email, password) => {
  loginUsers(email, password)
    .then(() => {
      window.location.hash = '#/perfilHome';
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
      console.log(errorCode);
      console.log(errorMessage);
    });
};

export const photo = (user) => {
  let photoUrl = '';
  if (user.photoURL == null) {
    photoUrl = '../imagen/usuario.png';
  } else {
    photoUrl = user.photoURL;
  }
  return photoUrl;
};
