import { component } from '../view-screen/index.js';
import { getThePosts } from './getPosts.js';

export const changeViews = (route) => {
  const user = firebase.auth().currentUser;
  // eslint-disable-next-line no-console
  console.log(user);
  const i = route.split('/')[1];
  const container = document.getElementById('main');
  container.innerHTML = '';

  switch (route) {
    case '':
    case '#':
    case '#/':
    { return container.appendChild(component.home()); }
    case '#/knowUs':
    case '#/signUp':
    case '#/login':
    { return container.appendChild(component[i]()); }
    case '#/perfilHome':
    {
      return getThePosts(arryPost => container.appendChild(component.perfilHome(user, arryPost)));
    }
    case '#/myAccount':
    case '#/foroAll':
    case '#/perfil':
    case '#/configuration':
    { return container.appendChild(component[i](user)); }
    default:
      return container.appendChild(component.error());
  }
};
