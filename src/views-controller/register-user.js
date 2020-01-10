export const registerUser = (email, password, messageError) => {
  const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
  promise
    .then(() => {
      window.location.hash = '#/login';
    }).catch((error) => {
    // Handle Errors here
      const p = document.createElement('p');
      const errorCode = error.code;
      let errorMessage = error.message;
      // eslint-disable-next-line no-console
      console.log(errorCode);
      switch (errorCode) {
        case 'auth/email-already-in-use':{ 
          errorMessage = 'El correo a registrar ya esta en uso';
          p.textContent = errorMessage;
          messageError.appendChild(p);
          messageError.removeChild(messageError.childNodes[2])};
        case 'auth/invalid-email': {
          errorMessage = 'El correo a registrar no es válido';
          p.textContent = errorMessage;
          messageError.appendChild(p);
          messageError.removeChild(messageError.childNodes[2])}
        case 'auth/operation-not-allowed': {
          errorMessage = 'El registro no fue exitoso, se le sugiere intentarlo de nuevo';
          p.textContent = errorMessage;
          messageError.appendChild(p);
          messageError.removeChild(messageError.childNodes[2])}
        }
      }

    );
};
