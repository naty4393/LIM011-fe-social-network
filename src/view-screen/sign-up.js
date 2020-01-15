import { registerUser } from '../views-controller/register-user.js';

export default () => {
  const mainSignUp = `   
  <header>
  <a href="/#"><img src=""></a>
  <label  id="label-bar-menu" for="bar-menu" class="icon-menu-outline"></label>
  <input type="checkbox" name="bar-menu" id="bar-menu">
      <nav id="nav" class="nav">
          <ul>
              <li><a href="#/" class="icon-home icon"><b>Inicio</b></a></li>
              <li><a href="#/knowUs" class="icon icon-chat"><b>Conocenos</b></a></li>
              <li><a href="#/signUp" class="icon icon-user-add-1"><b>Registrate</b></a></li>
              <li><a href="#/login" class="icon icon-user"><b>Ingresa</b></a></li>
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
            <label for="email">Correo:</label>
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
  const divFormRegister = divElement.querySelector('#formRegister');
  const name = divElement.querySelector('#name');
  const lastName = divElement.querySelector('#lastName');
  const birthday = divElement.querySelector('#birthday');
  const password = divElement.querySelector('#password');
  const confirmPassword = divElement.querySelector('#confirmPassword');
  const email = divElement.querySelector('#email');
  const bodyElement = document.getElementById('body');
  bodyElement.setAttribute('class','background1');
  divElement.querySelector('#register').addEventListener('click', () => {+
    console.log('datos',name.value, lastName.value, birthday.value, password.value, confirmPassword.value);
    
    registerUser(email.value, password.value, divFormRegister.value, name.value, lastName.value, birthday.value, confirmPassword.value);
  });
  return divElement
};
