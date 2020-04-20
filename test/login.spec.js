import { loginUsers } from '../src/views-controller/controller-firebase.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
);

describe('inicio de sesión', () => {
  it('Debería poder iniciar sesion', () => loginUsers('pattycbs28@gmail.com', '123123')
    .then((user) => {
      expect(user.email).toBe('pattycbs28@gmail.com');
    }));
});
