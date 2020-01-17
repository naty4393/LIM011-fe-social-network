import { component } from '../view-screen/index.js';

export const changeViews = (route) => {
  const i = route.split('/')[1];
  const container = document.getElementById('main');
  container.innerHTML = '';
  const user = firebase.auth().currentUser;
  console.log(user);
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });

  switch (route) {
    case '':
    case '#':
    case '#/':
    { return container.appendChild(component.home()); }
    case '#/knowUs':
    case '#/signUp':
    case '#/login':
    case '#/perfilHome':
    case '#/myAccount':
    case '#/foroAll':
    case '#/perfil':
    case '#/configuration':
    { return container.appendChild(component[i]()); }
    default:
     return container.appendChild(component.error());
  }
};
