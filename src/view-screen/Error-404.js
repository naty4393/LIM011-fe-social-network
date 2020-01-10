export default () => {
    const mainHome = ` 
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
            <h1>Bienvenid@</h1>
              <article>
                <p>Te invitamos a este espacio, TU ESPACIO, donde podrás compartir con muchas mas personas,
                  el tema que tu desees en general, tanto desde el riesgo que puede causar un artefacto,
                  hasta una app que se muy util, y todo dentro de un mismo tema; el tema que tu quisieras 
                  hablar, ya que tienes que saber que no eres el único, que hay muchas mas personas que
                  quizas sienten lo mismo que tu.</p>
                <p>Así que adelante, <a href="#/signUp">Registrate</a> si es que aún no tienes una cuenta
                  o si ya la tienes una cuenta <a href="#/login">Ingresa</a> y genera un tema diverso el
                  el cual tu puedas brindar mas información y/o te brinden mas información.</p> 
              </article>
          </section>
          `;
  
    const divElement = document.createElement('div');
    divElement.innerHTML = mainHome;
    // eslint-disable-next-line no-console
    console.log(divElement);
    return divElement;
  };
  