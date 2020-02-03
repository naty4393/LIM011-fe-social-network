import { createUser, dataUsers } from './controller-firebase.js';

export const registerUser = (email, password, messageError, name, lastname, birthday) => {
  createUser(email, password)
    .then((res) => {
      console.log(res.user);
      console.log(res.user.uid);
      dataUsers(res, email, name, lastname, birthday)
        .then((result) => {
          console.log('estoy aqui');
          console.log('Document written with ID: ', result);
          window.location.hash = '#/login';
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
      res.user.updateProfile({
        displayName: name,
        /* photoURL: "https://example.com/jane-q-user/profile.jpg" */
      }).then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
    }).catch((error) => {
    // Handle Errors here
      const errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage);
      // eslint-disable-next-line no-console
      console.log(errorCode);
      switch (errorCode) {
        case 'auth/email-already-in-use': {
          errorMessage = 'El correo a registrar ya esta en uso';
          const p = document.createElement('p');
          p.textContent = errorMessage;
          messageError.appendChild(p);
          messageError.removeChild(p.childNodes[2]); }
          break;
        case 'auth/invalid-email': {
          errorMessage = 'El correo a registrar no es válido';
          const p = document.createElement('p');
          p.textContent = errorMessage;
          messageError.appendChild(p);
          messageError.removeChild(p.childNodes[2]); }
          break;
        case 'auth/operation-not-allowed': {
          errorMessage = 'El registro no fue exitoso, se le sugiere intentarlo de nuevo';
          const p = document.createElement('p');
          p.textContent = errorMessage;
          messageError.appendChild(p);
          messageError.removeChild(p.childNodes[2]); }
          break;
        default: {
          errorMessage = 'Locador no encontrado intentelo de Nuevo';
          const p = document.createElement('p');
          p.textContent = errorMessage;
          messageError.appendChild(p);
          messageError.removeChild(p.childNodes[2]); }
          break;
      }
    });
};
