/* const user = firebase.auth().currentUser; */

export const loginUser = (email, password) => {
  const promise = firebase.auth().signInWithEmailAndPassword(email, password);
  promise
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