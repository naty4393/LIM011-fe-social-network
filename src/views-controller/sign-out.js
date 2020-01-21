import { signOutUsers } from './controller-firebase.js'

export const SignOutUser = () => {

    signOutUsers()
        .then(() => {
            window.location.hash = '#/login';
        }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
        })
  };