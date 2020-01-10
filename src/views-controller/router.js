import { component } from '../view-screen/index.js';

export const changeViews = (route) => {
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
