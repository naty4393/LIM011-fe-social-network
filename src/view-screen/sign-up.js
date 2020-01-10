import { registerUser } from '../views-controller/register-user.js';

export default () => {
  const mainSignUp = `   
    <header>
        <a href="/#"><img src="" alt="">
        <nav id="nav">
            <ul>
                <li><a href="#/">Inicio</a></li>
                <li><a href="#/knowUs">Conocenos</a></li>
                <li><a href="#/signUp">Registrate</a></li>
                <li><a href="#/login">Ingresa</a></li>
            </ul>
        </nav>
    </header>     
    <section>
      <div id="formRegister">
        <form action="" method="get">
            <label for="name">Nombres:</label>
            <input type="text" id="name" required>
            <label for="lastName">Apellidos:</label>
            <input type="text" id="lastName" required>
            <label for="birthday">Cumpleaños:</label>
            <input type="text" id="birthday" placeholder="dd/mm/aaaa" required>
            <label for="mail">Correo:</label>
            <input type="text" id="email" placeholder="email@email.com" required>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" required>
            <label for="confirmPassword">Confirmar  Contraseña:</label>
            <input type="password" id="confirmPassword" required>
            <input type="button" id="cancel" value="Cancelar">
            <input type="button" id="register" value="Registrar">
        </form>
      </div>
    </section>
          `;

  const divElement = document.createElement('div');
  divElement.innerHTML = mainSignUp;
  // eslint-disable-next-line no-console
  console.log(divElement);
  const divFormRegister = divElement.querySelector('#formRegister');
  const email = divElement.querySelector('#email');
  const password = divElement.querySelector('#password');
  divElement.querySelector('#register').addEventListener('click', () => {
    registerUser(email.value, password.value, divFormRegister);
  });
  return divElement
};
