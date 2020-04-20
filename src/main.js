import { firebaseConfig } from './views-controller/config-firebase.js';
import { changeViews } from './views-controller/router.js';
/* import { personConnet } from './views-controller/controller-firebase.js'; */

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const init = async () => {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log('user', firebase.auth().currentUser);
/*   while (firebase.auth().currentUser == null) {
    // eslint-disable-next-line no-await-in-loop
    await sleep(1000);
  } */
  /*   personConnet(); */
  changeViews(window.location.hash);
  window.addEventListener('hashchange', () => changeViews(window.location.hash));
};

window.addEventListener('load', init);
