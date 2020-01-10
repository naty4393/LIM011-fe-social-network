export const SignOutUser = () => {
    const promise = firebase.auth().signOut();
    promise
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