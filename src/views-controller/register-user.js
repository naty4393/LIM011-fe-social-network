import { createUser } from './controller-firebase.js'

export const registerUser = (email, password, messageError, name, lastname, birthday, confirPassword ) => {
  console.log(name);
  
  createUser(email, password)
    .then(() => {
      firebase.firestore().collection('users').add({
        birthday,
        confirPassword,
        email,
        lastname,
        name,
        password,
      }).then(function(docRef) {
        console.log('estoy aqui');
        console.log("Document written with ID: ", docRef.id);
        window.location.hash = '#/login'; 
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
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
