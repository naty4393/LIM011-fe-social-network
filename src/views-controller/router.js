import { component } from '../view-screen/index.js';

export const changeViews = (route) => {
  const container = document.getElementById('main');
  container.innerHTML = '';
  switch (route) {
    case '':
    case '#/':
    { return container.appendChild(component.home()); }
    case '#/knowUs':
    { return container.appendChild(component.knowsUs()); }
    case '#/signUp':
    { return container.appendChild(component.signUp()); }
    case '#/login':
    { return container.appendChild(component.login()); }
    default:
      break;
  }
};
