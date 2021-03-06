export default () => {
  const mainHome = ` 
        <header>
          <a href="/#"><img src="../imagen/logo1.png" class="logo"></a>
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
        <section class="write-block">
          <h1>Bienvenid@</h1>
            <article>
              <img src="../imagen/logo1.jpeg" class="logo1">
              <p>Te invitamos a este espacio, TU ESPACIO, donde podrás compartir con muchas mas personas,
                el tema que tu desees en general, tanto desde el riesgo que puede causar un artefacto,
                hasta una app que se muy util, y todo dentro de un mismo tema; el tema que tu quisieras 
                hablar, ya que tienes que saber que no eres el único, que hay muchas mas personas que
                quizas sienten lo mismo que tu.</p>
              <p>Así que adelante, <a href="#/signUp" class="button">Registrate</a> si es que aún no tienes una cuenta
                o si ya la tienes una cuenta <a href="#/login" class="button">Ingresa</a> y genera un tema diverso el
                el cual tu puedas brindar mas información y/o te brinden mas información.</p> 
            </article>
        </section>
        `;
  const divElement = document.createElement('div');
  divElement.innerHTML = mainHome;
  const bodyElement = document.ElementById('body');
  bodyElement.setAttribute('class', 'background');
  return divElement;
};
