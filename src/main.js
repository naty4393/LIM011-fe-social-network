import { firebaseConfig } from './views-controller/config-firebase.js';
import { changeViews } from './views-controller/router.js';

const init = () => {
  changeViews(window.location.hash);
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  window.addEventListener('hashchange', () => changeViews(window.location.hash));
};

window.addEventListener('load', init);
