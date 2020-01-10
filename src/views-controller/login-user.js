export const loginUser = (email, password) => {
  const promise = firebase.auth().signInWithEmailAndPassword(email, password);
  promise
      .then(() => {
          window.location.hash = '#/perfilHome';
      }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode);
      console.log(errorMessage);
      })
};