import { firebaseConfig } from './views-controller/config-firebase.js';
import { changeViews } from './views-controller/router.js';

const init = () => {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  changeViews(window.location.hash);
  window.addEventListener('hashchange', () => changeViews(window.location.hash));
};

window.addEventListener('load', init);
