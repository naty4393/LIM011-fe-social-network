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
                <input type="text" id="userName">
                <label for="password">Contraseña:</label>
                <input type="password" id="password">
            </form>
        </section>
        `;

  const divElement = document.createElement('div');
  divElement.innerHTML = mainLogin;
  // eslint-disable-next-line no-console
  console.log(divElement);
  return divElement;
};
