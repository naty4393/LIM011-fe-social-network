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
        <form action="" method="get">
            <label for="name">Nombres:</label>
            <input type="text" id="name">
            <label for="lastName">Apellidos:</label>
            <input type="text" id="lastName">
            <label for="birthday">Cumpleaños:</label>
            <input type="text" id="birthday" placeholder="dd/mm/aaaa">
            <label for="mail">Correo:</label>
            <input type="text" id="mail">
            <label for="password">Contraseña:</label>
            <input type="password" id="password">
            <label for="confirmPassword">Confirmar  Contraseña:</label>
            <input type="password" id="confirmPassword">
        </form>
    </section>
          `;

  const divElement = document.createElement('div');
  divElement.innerHTML = mainSignUp;
  // eslint-disable-next-line no-console
  console.log(divElement);
  return divElement;
};
