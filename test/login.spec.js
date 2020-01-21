const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
  () => mockfirestore
);

import { loginUsers } from '../src/views-controller/login-user.js'

describe('inicio de sesión', () => {
  it('Debería poder iniciar sesion', () => {
    return loginUsers('pattycbs28@gmail.com', '123123')
      .then((user) => {
        expect(user.email).toBe('pattycbs28@gmail.com')
      })
  });
})