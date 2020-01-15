import { loginUser } from "../views-controller/login-user.js";

export default () => {
  const mainLogin = ` 
  <header>
  <a href="#/"><img src="" alt=""></a>
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
            <form action="" method="get">
                <label for="userName">Usuario:</label>
                <input type="email" id="email" placeholder="email@email.com" required>
                <label for="password">Contraseña:</label>
                <input type="password" id="password" required>
                <span>Se te olvido tu comtraseña....<a href="#/newPassword">Recuperar</a></span>
                <input type="button" id="cancelar" value="Cancelar">
                <input type="button" id="start" value="Iniciar">
            </form>
        </section>
        `;

  const divElement = document.createElement('div');
  divElement.innerHTML = mainLogin;
  const email = divElement.querySelector('#email');
  const password = divElement.querySelector('#password');
  divElement.querySelector('#start').addEventListener('click',() => {
    loginUser(email.value, password.value);
  })

  return divElement;
};
