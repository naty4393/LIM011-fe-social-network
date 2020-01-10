import { loginUser } from "../views-controller/login-user.js";

export default () => {
  const mainLogin = ` 
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
